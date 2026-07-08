"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type LayoutType = "sidebar" | "topbar";

interface LayoutContextType {
  layout: LayoutType;
  setLayout: (layout: LayoutType) => void;
}

const LayoutContext = createContext<LayoutContextType | null>(null);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [layout, setLayoutState] = useState<LayoutType>("sidebar");

  useEffect(() => {
    Promise.resolve().then(() => {
      const saved = localStorage.getItem("layout");
      if (saved === "topbar" || saved === "sidebar") {
        setLayoutState(saved);
      }
    });
  }, []);

  const setLayout = useCallback((newLayout: LayoutType) => {
    setLayoutState(newLayout);
    localStorage.setItem("layout", newLayout);
  }, []);

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useLayout must be used inside LayoutProvider");
  }

  return context;
}
