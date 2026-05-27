"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function useMobileReducedMotion() {
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return Boolean(reduced || isMobile);
}
