"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { FiLock } from "react-icons/fi";
import Link from "next/link";

const FixedPrivacyWidget = () => {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("privacyWidget");

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gray-800 p-3 text-white shadow-lg hover:bg-gray-700 focus:outline-none"
        aria-label={t("ariaLabel")}
        title={t("title")}
      >
        <FiLock size={20} />
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 max-w-xs rounded-lg border border-[#3C3A37] bg-[#1F1D1A] p-4 text-gray-200 shadow-lg">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-lg font-semibold text-[#D9B382]">{t("header")}</h3>
          </div>
          <p className="mb-3 text-sm">
            {t("description")}
            <Link href={`/${locale}/privacy-policy`} className="text-[#5FA6FF] hover:underline">
              {t("linkText")}
            </Link>
            .
          </p>

          <button
            onClick={() => setOpen(false)}
            className="mt-2 w-full rounded bg-[#D9B382] py-2 text-[#1F1D1A] transition-colors hover:bg-[#B28E52]"
          >
            {t("closeButton")}
          </button>
        </div>
      )}
    </>
  );
};

export default FixedPrivacyWidget;
