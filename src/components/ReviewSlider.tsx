"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { reviews } from "@/data/reviews";

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#f5b400]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.1l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewSlider() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const loop = [...reviews, ...reviews];
  const gap = 20;
  const cardStep = cardWidth + gap;

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const nextPerView = window.innerWidth >= 1024 ? 4 : 1;
      const width = viewport.clientWidth;
      const nextCard = (width - gap * (nextPerView - 1)) / nextPerView;
      setCardWidth(nextCard);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || cardStep === 0) return;
    const timer = window.setInterval(() => {
      setAnimate(true);
      setIndex((current) => current + 1);
    }, 3800);
    return () => window.clearInterval(timer);
  }, [paused, cardStep]);

  const jumpWithoutAnimation = (next: number) => {
    setAnimate(false);
    setIndex(next);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimate(true));
    });
  };

  const onTransitionEnd = () => {
    if (index >= reviews.length) {
      jumpWithoutAnimation(index - reviews.length);
    }
  };

  const go = (direction: number) => {
    setPaused(true);
    if (direction < 0 && index === 0) {
      setAnimate(false);
      setIndex(reviews.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
          setIndex(reviews.length - 1);
        });
      });
    } else {
      setAnimate(true);
      setIndex((current) => current + direction);
    }
    window.setTimeout(() => setPaused(false), 7000);
  };

  return (
    <section className="py-20 bg-[#F7F8FB] border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D1C42] mb-12 leading-tight max-w-4xl mx-auto">
          Parça Eşya Taşıma Yaptıran Müşterimizin Yorumları
        </h2>

        <div
          className="relative md:px-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            aria-label="Önceki yorumlar"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0D1C42] shadow-md md:flex"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 4.293a1 1 0 010 1.414L8.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Sonraki yorumlar"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0D1C42] shadow-md md:flex"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 15.707a1 1 0 010-1.414L11.586 10 7.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          <div ref={viewportRef} className="overflow-hidden">
            <div
              className="flex"
              style={{
                gap,
                transform: `translate3d(-${index * cardStep}px, 0, 0)`,
                transition: animate ? "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {loop.map((review, i) => (
                <article
                  key={`${review.name}-${i}`}
                  className="shrink-0 border border-gray-200 bg-white p-5 shadow-sm"
                  style={{ width: cardWidth > 0 ? cardWidth : "100%" }}
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[#0D1C42]">{review.name}</p>
                      <p className="mt-1 text-xs text-gray-400">{review.date}</p>
                    </div>
                    <Stars />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
