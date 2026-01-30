import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(
  threshold: number = 0.15,
  rootMargin: string = "0px",
  once: boolean = true
) => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && once) {
          try {
            observer.unobserve(el);
          } catch {}
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      try {
        observer.unobserve(el);
      } catch {}
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible } as const;
};
