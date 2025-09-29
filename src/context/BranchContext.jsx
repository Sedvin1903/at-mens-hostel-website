"use client";

import { createContext, useContext, useMemo, useState } from "react";

const BranchContext = createContext({
  branch: "ambattur",
  setBranch: () => {},
});

export function BranchProvider({ children }) {
  const [branch, setBranch] = useState("ambattur");
  const value = useMemo(() => ({ branch, setBranch }), [branch]);
  return <BranchContext.Provider value={value}>{children}</BranchContext.Provider>;
}

export function useBranch() {
  const ctx = useContext(BranchContext);
  if (!ctx) throw new Error("useBranch must be used within BranchProvider");
  return ctx;
}


