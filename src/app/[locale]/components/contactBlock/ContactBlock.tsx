"use client";

import Link from "next/link";
import { FaWhatsapp, FaVk, FaTelegram } from "react-icons/fa";
import { useTranslations } from "next-intl";

const ContactBlock = () => {
  const t = useTranslations("contacts");

  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-[#1F1D1A] px-4 py-12 text-center"
    >
      <h2 className="mb-4 text-2xl font-bold text-[#C8A96A]">{t("title")}</h2>
      <p className="mb-2 text-lg text-[#EDEAE4]">{t("address")}</p>
      <p className="text-md mb-6 text-[#EDEAE4]">{t("hours")}</p>

      {/* Социальные сети */}
      <div className="mb-6 flex flex-wrap justify-center gap-6">
        <Link
          href="https://api.whatsapp.com/send/?phone=79500384135&text&type=phone_number&app_absent=0"
          target="_blank"
          className="flex items-center space-x-2 text-lg text-[#A8C3A0] transition-colors hover:text-[#C8A96A]"
        >
          <FaWhatsapp size={24} /> <span>{t("whatsapp")}</span>
        </Link>
        <Link
          href="https://vk.com/olympspa"
          target="_blank"
          className="flex items-center space-x-2 text-lg text-[#0077FF] transition-colors hover:text-[#559CFF]"
        >
          <FaVk size={24} /> <span>{t("vk")}</span>
        </Link>
        <Link
          href="https://t.me/olympspa"
          target="_blank"
          className="flex items-center space-x-2 text-lg text-[#26A5E4] transition-colors hover:text-[#5BCBF2]"
        >
          <FaTelegram size={24} /> <span>{t("telegram")}</span>
        </Link>
      </div>

      {/* Карта */}
      <div className="h-96 w-full max-w-4xl overflow-hidden rounded-lg border border-[#35312D]">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=30.317473%2C59.893150&z=18.2&pt=30.317473,59.893150,pm2rdl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactBlock;
