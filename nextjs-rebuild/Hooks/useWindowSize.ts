import { useState, useEffect } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  if (typeof window !== "undefined") {
    useEffect(() => {
      function handleResize() {
        if (width !== window.innerWidth) setWidth(window.innerWidth);
        if (height !== window.innerHeight) setHeight(window.innerHeight);
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);
  }

  return { width, height };
}
