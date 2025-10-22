"use client";

import { useState, useEffect, useRef } from "react";

export default function Reviews() {
  const [iframeHeight, setIframeHeight] = useState(300); // Smaller default height
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      // Listen for messages from the iframe to get the actual content height
      if (event.data && typeof event.data === 'object') {
        if (event.data.type === 'resize' && event.data.height) {
          setIframeHeight(Math.max(150, event.data.height + 20)); // Minimum 150px
          setIsLoading(false);
        }
      }
    };

    const handleResize = () => {
      // Fallback: adjust height based on window size
      const newHeight = Math.min(600, Math.max(200, window.innerHeight * 0.4));
      setIframeHeight(newHeight);
    };

    window.addEventListener('message', handleMessage);
    window.addEventListener('resize', handleResize);
    
    // Set initial height based on screen size
    handleResize();
    
    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="reviews" className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Guests Say</h2>

        {/* Auto-sizing iframe container */}
        <div className="relative w-full">
          {isLoading && (
            <div className="flex items-center justify-center h-32 bg-gray-100 rounded-lg mb-4">
              <div className="text-gray-600">Loading reviews...</div>
            </div>
          )}
          
          <iframe
            ref={iframeRef}
            src="https://widgets.sociablekit.com/google-reviews/iframe/25613219"
            frameBorder="0"
            className="w-full rounded-lg shadow-lg transition-all duration-300"
            style={{ 
              height: `${iframeHeight}px`,
              minHeight: '150px',
              maxHeight: '600px'
            }}
            allowFullScreen
            onLoad={() => {
              setIsLoading(false);
              // Try to get content height after iframe loads
              setTimeout(() => {
                try {
                  const iframe = iframeRef.current;
                  if (iframe && iframe.contentDocument) {
                    const body = iframe.contentDocument.body;
                    if (body) {
                      const contentHeight = body.scrollHeight;
                      if (contentHeight > 0 && contentHeight < 1000) {
                        setIframeHeight(Math.max(150, contentHeight + 20));
                      }
                    }
                  }
                } catch (error) {
                  // Cross-origin restrictions - this is expected
                  console.log('Cannot access iframe content due to CORS restrictions');
                }
              }, 2000);
            }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
