"use client";

import { useTranslations } from "next-intl";

const PromotionBlock = () => {
  const t = useTranslations("promotion");

  const openCertificateForm = () => {
    const event = new CustomEvent("openCertificateForm");
    window.dispatchEvent(event);
  };

  return (
    <section id="promotion" className="bg-[#1F1D1A] text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#C8A96A] mb-4">
          {t("title")}
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          {t("paragraph1")}
        </p>
        <p className="text-md mb-8 max-w-2xl mx-auto">
          {t("paragraph2")}
        </p>
        <button
          onClick={openCertificateForm}
          className="inline-block bg-[#C8A96A] text-[#1F1D1A] px-6 py-3 rounded-lg font-semibold hover:bg-[#b18b56] transition-colors"
        >
          {t("button")}
        </button>
      </div>
    </section>
  );
};

export default PromotionBlock;
