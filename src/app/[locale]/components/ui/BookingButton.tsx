"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

interface BookingButtonProps {
  url?: string;
  label?: string; // можно кастомно передать текст, но по умолчанию берём из i18n
}

const BookingButton: FC<BookingButtonProps> = ({
  url = "https://n1124325.yclients.com/",
  label,
}) => {
  const t = useTranslations("booking"); // 👉 ищем переводы в messages.booking.*

  const handleBooking = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleBooking}
      className="rounded-lg bg-gradient-to-r from-[#D9C48C] to-[#C8A96A] 
                 px-7 py-2.5 text-sm font-semibold text-[#1A1A1A] sm:text-base
                 shadow-md transition hover:scale-105 hover:from-[#C8A96A] hover:to-[#B38F55]"
    >
      {label || t("button")}
    </button>
  );
};

export default BookingButton;
