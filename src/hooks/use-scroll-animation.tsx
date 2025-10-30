import { useEffect, useRef, useState } from "react";

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  threshold: number = 0.15,
  rootMargin: string = "0px"
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
  }, [threshold, rootMargin]);

  return { ref, isVisible } as const;
}

export default useScrollAnimation;
