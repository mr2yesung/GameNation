import { useEffect, useRef, useState } from "react";

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleIntersection(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }

    // callback function is called when the percentage of the target element is visible crosses a threshold
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    });

    const divCurrent = divRef.current;

    if (divCurrent) {
      // begin watching for the visibility changes on the target element
      observer.observe(divCurrent);
    }

    return () => {
      if (divCurrent) observer.unobserve(divCurrent);
    };
  }, []);

  return { divRef, isVisible };
}

export { useScrollAnimation };
