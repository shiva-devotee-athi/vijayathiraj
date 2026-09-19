import { useEffect, useState } from "react";

export const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;

    if (!element) return;
    const handleResize = () => {
      setDimensions({
        width: element.offsetWidth || 0,
        height: element.offsetHeight || 0,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return dimensions;
};
