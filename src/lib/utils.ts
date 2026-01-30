import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smooth-scroll to an element with a configurable duration and offset.
 * @param element HTMLElement to scroll to
 * @param duration duration in ms (default 1200)
 * @param offset additional offset in px (can be negative)
 */
export function smoothScrollTo(element: HTMLElement | null, duration = 2200, offset = 0) {
  if (!element) return;

  const start = window.scrollY || window.pageYOffset;
  const rect = element.getBoundingClientRect();
  const target = rect.top + start + offset;
  const distance = target - start;
  let startTime: number | null = null;

  // gentler ease to reduce perceived speed: cubic ease in/out
  const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, Math.round(start + distance * eased));
    if (elapsed < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}
