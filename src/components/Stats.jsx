import React, { useEffect, useRef, useState } from "react";
import { statsData } from "../data/testimonials";

export default function Stats() {
  const containerRef = useRef(null);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1400;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease-out
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts(
              statsData.map((item) => Math.round(eased * item.count))
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(statsData.map((item) => item.count));
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section stats-section">
      <div className="stats-glow"></div>
      <div className="container stats-grid" ref={containerRef}>
        {statsData.map((item, idx) => (
          <div key={idx} className="stat-block">
            <div className="stat-number-wrap">
              <span className="counter">{counts[idx]}</span>
              <span className="stat-suffix">{item.suffix}</span>
            </div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
