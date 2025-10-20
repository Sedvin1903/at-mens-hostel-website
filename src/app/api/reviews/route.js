export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get("placeId");

  if (!placeId) {
    return Response.json({ error: "Missing placeId" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Server misconfiguration: GOOGLE_API_KEY not set" }, { status: 500 });
  }

  try {
    const fields = [
      "reviews",
      "rating",
      "user_ratings_total",
      "name",
    ].join(",");
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}&fields=${fields}&key=${apiKey}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();
    if (!res.ok || data.status !== "OK") {
      const message = data.error_message || data.status || "Failed to fetch reviews";
      return Response.json({ error: message }, { status: 502 });
    }

    const result = data.result || {};
    const reviews = (result.reviews || []).map((r) => ({
      author_name: r.author_name,
      rating: r.rating,
      text: r.text,
      time: r.time,
      relative_time_description: r.relative_time_description,
    }));

    return Response.json({
      name: result.name,
      rating: result.rating,
      total: result.user_ratings_total,
      reviews,
    });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}


