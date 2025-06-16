"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const PrivacyPolicyPage = () => {
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();
  const t = useTranslations("privacy");

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(e.target.checked);
  };

  const handleConfirm = () => {
    if (agreed) {
      router.back();
    } else {
      alert(t("error"));
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#1F1D1A] p-6">
      <div className="prose prose-invert max-h-[80vh] w-full max-w-3xl overflow-auto rounded-lg bg-[#2A2723] p-8 text-gray-200 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-[#D9B382]">{t("title")}</h1>

        <p>{t("intro")}</p>
        <p>{t("purpose")}</p>
        <p>{t("applies")}</p>

        <h2>{t("definitions_intro")}</h2>
        <p className="whitespace-pre-line">{t("definitionsText")}</p>

        <p className="whitespace-pre-line">{t("operator_rights_text")}</p>

        <p className="whitespace-pre-line">{t("operator_duties_text")}</p>

        <div className="mb-6 flex items-center">
          <input
            id="agree"
            type="checkbox"
            checked={agreed}
            onChange={handleCheckboxChange}
            className="mr-3 h-5 w-5 border-gray-600 bg-[#1F1D1A] text-[#D9B382] focus:ring-[#D9B382]"
          />
          <label htmlFor="agree" className="select-none text-gray-200">
            {t("agreeText")}
          </label>
        </div>

        <button
          onClick={handleConfirm}
          disabled={!agreed}
          className={`w-full rounded px-6 py-2 font-semibold text-[#1F1D1A] transition-colors ${
            agreed ? "bg-[#D9B382] hover:bg-[#B28E52]" : "cursor-not-allowed bg-gray-600"
          }`}
        >
          {t("confirm")}
        </button>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
