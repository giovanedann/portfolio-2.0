import { useEffect, useState } from "react";

export default function useWindowDimensions() {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth, window.innerHeight]);

  return {
    innerWidth,
    innerHeight,
  };
}
