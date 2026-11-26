"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitHeadlineProps {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  immediate?: boolean;
}

export function SplitHeadline({
  text,
  as = "h2",
  className = "",
  immediate = false,
}: SplitHeadlineProps) {
  const containerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const chars = el.querySelectorAll<HTMLElement>(".split-char");
      if (!chars.length) return;

      const animConfig: gsap.TweenVars = {
        yPercent: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.015,
        ease: "power3.out",
      };

      if (!immediate) {
        animConfig.scrollTrigger = {
          trigger: el,
          start: "top 86%",
          once: true,
        };
      }

      gsap.fromTo(chars, { yPercent: 45, opacity: 0 }, animConfig);
    });

    return () => {
      mm.revert();
    };
  }, [immediate, text]);

  const Tag = as;
  const words = text.split(" ");

  return (
    <Tag ref={containerRef} aria-label={text} className={className}>
      <span aria-hidden="true" className="inline">
        {words.map((word, wIdx) => (
          <span key={`${word}-${wIdx}`} className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, cIdx) => (
              <span
                key={`${wIdx}-${cIdx}`}
                className="split-char inline-block will-change-transform"
              >
                {char}
              </span>
            ))}
            {wIdx < words.length - 1 ? <span>&nbsp;</span> : null}
          </span>
        ))}
      </span>
    </Tag>
  );
}
