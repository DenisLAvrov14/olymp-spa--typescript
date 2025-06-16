"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaWhatsapp, FaVk, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const t = useTranslations("footer");

  const links = [
    { href: "#services", label: t("nav.services") },
    { href: "#special-offers", label: t("nav.specialOffers") },
    { href: "#reviews", label: t("nav.reviews") },
    { href: "#contacts", label: t("nav.contacts") },
  ];

  return (
    <footer className="border-t border-[#35312D] bg-[#181715] px-6 pb-10 pt-12 text-[#EDEAE4] shadow-inner">
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 text-center md:flex-row md:items-start md:text-left">
        {/* Логотип и навигация */}
        <div>
          <h3 className="text-xl font-bold">Olimp SPA</h3>
          <nav className="mt-4">
            <ul className="grid grid-cols-2 gap-2">
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-[#C8A96A]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Контакты */}
        <div>
          <h4 className="text-lg font-semibold">{t("contacts.title")}</h4>
          <p className="mt-2 text-sm">{t("contacts.address")}</p>
          <p className="text-sm">{t("contacts.hours")}</p>
          <p className="mt-2 text-sm">{t("contacts.phone")}</p>
        </div>

        {/* Социальные сети */}
        <div>
          <h4 className="text-lg font-semibold">{t("social.title")}</h4>
          <div className="mt-2 flex space-x-4">
            <Link
              href="https://api.whatsapp.com/send/?phone=79500384135"
              target="_blank"
              className="text-[#A8C3A0] transition-colors hover:text-[#C8A96A]"
            >
              <FaWhatsapp size={24} />
            </Link>
            <Link
              href="https://vk.com/olympspa"
              target="_blank"
              className="text-[#0077FF] transition-colors hover:text-[#559CFF]"
            >
              <FaVk size={24} />
            </Link>
            <Link
              href="https://t.me/olympspa"
              target="_blank"
              className="text-[#26A5E4] transition-colors hover:text-[#5BCBF2]"
            >
              <FaTelegram size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Подпись */}
      <div className="mt-10 border-t border-[#35312D] pt-4 text-center text-sm text-[#77706A]">
        © {new Date().getFullYear()} Olimp SPA. {t("rights")}
      </div>
    </footer>
  );
};

export default Footer;
