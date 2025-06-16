"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface ConfirmBookingModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmBookingModal: React.FC<ConfirmBookingModalProps> = ({ onCancel }) => {
  const router = useRouter();
  const t = useTranslations("booking");

  const handleConfirm = () => {
    window.location.href = "https://n1124325.yclients.com/";
  };

  return (
    <div
      className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onCancel}
    >
      <div
        className="w-[280px] rounded-lg bg-[#2A2723] p-6 text-center text-white shadow-xl sm:w-[320px]"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-4 text-lg font-semibold">{t("title")}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleConfirm}
            className="rounded bg-[#4CAF50] px-4 py-2 text-white transition hover:bg-[#43A047]"
          >
            {t("yes")}
          </button>
          <button
            onClick={onCancel}
            className="rounded bg-gray-500 px-4 py-2 text-sm text-white transition hover:bg-gray-600"
          >
            {t("no")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBookingModal;
