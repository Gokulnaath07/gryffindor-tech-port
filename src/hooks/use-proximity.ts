// Simple proximity detector that updates elements with the class `interactive-section`.
// It writes `data-proximity="near"|"far"` and updates CSS variables `--mouse-x` and `--mouse-y`
// so the CSS radial gradient follows the cursor and switches accent color when close.

export function startProximity(options?: { threshold?: number }) {
  const threshold = options?.threshold ?? 220; // px
  let raf = -1;

  const sections = () => Array.from(document.querySelectorAll<HTMLElement>(".interactive-section"));

  function onMove(e: MouseEvent) {
    const x = e.clientX;
    const y = e.clientY;

    if (raf !== -1) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const elems = sections();
      let nearest: { el: HTMLElement; dist: number } | null = null;

      for (const el of elems) {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = cx - x;
        const dy = cy - y;
        const dist = Math.hypot(dx, dy);

        // update local mouse position properties so the radial gradient can be positioned
        const localX = Math.max(0, Math.min(rect.width, x - rect.left));
        const localY = Math.max(0, Math.min(rect.height, y - rect.top));
        el.style.setProperty("--mouse-x", `${localX}px`);
        el.style.setProperty("--mouse-y", `${localY}px`);

        if (!nearest || dist < nearest.dist) {
          nearest = { el, dist };
        }
      }

      // Mark the nearest section as near (if inside threshold), others far
      for (const el of elems) {
        if (nearest && el === nearest.el && nearest.dist <= threshold) {
          el.setAttribute("data-proximity", "near");
        } else {
          el.setAttribute("data-proximity", "far");
        }
      }
    });
  }

  function onLeave() {
    // mark all far when leaving the window
    for (const el of sections()) el.setAttribute("data-proximity", "far");
  }

  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseleave", onLeave);

  return function stop() {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseleave", onLeave);
    if (raf !== -1) cancelAnimationFrame(raf);
  };
}

export default startProximity;
