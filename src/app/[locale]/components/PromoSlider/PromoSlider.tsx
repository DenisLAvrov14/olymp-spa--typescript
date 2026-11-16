"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const PromoSlider = () => {
  const [current, setCurrent] = useState(0);
  const t = useTranslations("promoSlider");

  const slides = t.raw("slides") as { title: string; lines: string[] }[];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      className="relative flex h-[400px] w-full items-center justify-center rounded-xl bg-cover bg-center shadow-lg"
      style={{ backgroundImage: "url('/Greeting.jpg')" }}
    >
      <div className="absolute inset-0 rounded-xl bg-black/50" />

      <div className="relative z-10 max-w-3xl px-6 text-center transition-opacity duration-700 ease-in-out">
        <h2 className="mb-6 text-3xl font-bold text-[#C8A96A] drop-shadow sm:text-4xl">
          {slides[current].title}
        </h2>

        {slides[current].lines.map((line, idx) => (
          <p
            key={idx}
            className="mb-3 text-base text-[#F2E9DA] drop-shadow sm:text-lg"
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}
      </div>

      <div className="absolute bottom-4 flex space-x-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full transition ${
              idx === current ? "bg-[#C8A96A]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoSlider;