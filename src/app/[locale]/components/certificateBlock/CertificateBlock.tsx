"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function CertificateFAB() {
  const [showButton, setShowButton] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const t = useTranslations("certificate");
  const locale = useLocale();

  useEffect(() => {
    const specEl = document.getElementById("special-offers");
    const footerEl = document.querySelector("footer");

    if (!specEl || !footerEl) return;

    const onScroll = () => {
      const specRect = specEl.getBoundingClientRect();
      const footRect = footerEl.getBoundingClientRect();

      const reachedSpecial = specRect.top <= window.innerHeight;
      const reachedFooter = footRect.top <= window.innerHeight;

      setShowButton(reachedSpecial && !reachedFooter);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Здравствуйте! Хочу оформить сертификат.\nИмя: ${name}\nТелефон: ${phone}`;
    window.open(
      `https://api.whatsapp.com/send?phone=79500384135&text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setShowForm(false);
    setName("");
    setPhone("");
  };

  return (
    <>
      {showButton && (
        <button
          onClick={() => setShowForm(true)}
          className="fixed bottom-4 left-1/2 z-30 -translate-x-1/2 transform rounded-full bg-green-900 px-5 py-2 text-base text-white shadow-lg transition-opacity duration-200 sm:bottom-6 sm:px-6 sm:py-3 sm:text-lg md:bottom-8 md:px-8"
        >
          {t("button")}
        </button>
      )}

      {showForm && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60 p-4"
          onClick={() => setShowForm(false)}
        >
          <div
            className="w-full max-w-xs rounded-lg bg-white p-4 text-black shadow-xl sm:max-w-sm sm:p-6 md:max-w-md md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-3 text-lg font-bold text-green-900 sm:text-xl">{t("title")}</h2>
            <p className="mb-4 text-sm sm:text-base">
              {t.rich("descriptionRich", {
                link: (chunks) => (
                  <Link
                    href={`/${locale}/privacy-policy`}
                    className="font-semibold text-green-900 hover:underline"
                    onClick={() => setShowForm(false)}
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </p>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder={t("placeholderName")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded border border-gray-300 p-2 sm:p-3"
                required
              />
              <input
                type="tel"
                placeholder={t("placeholderPhone")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded border border-gray-300 p-2 sm:p-3"
                required
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-green-900 py-2 text-base text-white transition-colors hover:bg-green-800 sm:py-3 sm:text-lg"
              >
                {t("submit")}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
