"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { processSteps } from "@/content/principles";

export function ProcessTimeline() {
  const reducedMotion = useReducedMotion();
  const shellRef = useRef<HTMLDivElement>(null);
  const shellInView = useInView(shellRef, { once: false, margin: "-120px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const progressInitial = reducedMotion ? false : isMobile ? { scaleY: 0 } : { scaleX: 0 };
  const progressInView = reducedMotion
    ? undefined
    : shellInView
      ? isMobile ? { scaleY: 1 } : { scaleX: 1 }
      : isMobile ? { scaleY: 0 } : { scaleX: 0 };

  return (
    <div ref={shellRef} className="process-shell">
      <motion.div
        key={isMobile ? "process-progress-mobile" : "process-progress-desktop"}
        className="process-progress"
        initial={progressInitial}
        animate={progressInView}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="process">
        {processSteps.map(([num, title, text], index) => (
          <motion.article
            className="process-step"
            key={num}
            initial={reducedMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.38, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="step-dot"
              aria-hidden="true"
              initial={reducedMotion ? false : { scale: 0.65, opacity: 0 }}
              whileInView={reducedMotion ? undefined : { scale: 1, opacity: 1 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.32, delay: index * 0.07 + 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className="mono eyebrow">{num}</p>
            <h3>{title}</h3>
            <p className="muted">{text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
