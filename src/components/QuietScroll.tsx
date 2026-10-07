"use client";

import { useRef } from "react";

export default function QuietScroll({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const timer = useRef<number>(0);

  return (
    <div
      className={`quiet-scroll ${className ?? ""}`}
      onScroll={(event) => {
        const el = event.currentTarget;
        el.classList.add("is-scrolling");
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => {
          el.classList.remove("is-scrolling");
        }, 800);
      }}
    >
      {children}
    </div>
  );
}
