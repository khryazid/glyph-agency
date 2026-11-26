"use client";

import { Fragment, useEffect, useRef } from "react";
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
      const words = el.querySelectorAll<HTMLElement>(".split-word");
      if (!words.length) return;

      const animConfig: gsap.TweenVars = {
        yPercent: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.04,
        ease: "power3.out",
        clearProps: "transform,willChange",
      };

      if (!immediate) {
        animConfig.scrollTrigger = {
          trigger: el,
          start: "top 92%",
          once: true,
        };
      }

      gsap.fromTo(words, { yPercent: 28, opacity: 0 }, animConfig);
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
          <Fragment key={`${word}-${wIdx}`}>
            <span className="split-word inline-block will-change-transform">
              {word}
            </span>
            {wIdx < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}
