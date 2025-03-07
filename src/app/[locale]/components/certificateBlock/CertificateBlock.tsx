"use client";

import { useEffect, useState } from "react";

const CertificateBlock = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight * (6 / 7); // Точка, когда блок прилипает
      setIsSticky(scrollPosition > triggerPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`w-full h-[17vh] flex flex-col items-center justify-center bg-green-900 text-white p-6 transition-all duration-300 ${isSticky ? "fixed top-0 left-0 right-0 shadow-lg" : ""}`}
    >
      <h2 className="text-xl md:text-2xl font-bold">Подарочный сертификат</h2>
      <p className="text-sm md:text-base mt-2 mb-4">
        Порадуйте близких уникальным подарком!
      </p>
      <button className="bg-white text-green-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
        Оформить
      </button>
    </section>
  );
};

export default CertificateBlock;
