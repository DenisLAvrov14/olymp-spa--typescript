"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "ru";
  const t = useTranslations("header.nav");

  const navLinks = [
    { href: "#services", label: t("services") },
    { href: "#about", label: t("about") },
    { href: "#reviews", label: t("reviews") },
    { href: "#contact", label: t("contacts") },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-[#35312D] bg-[#1F1D1A] shadow-md">
      {/* ---------------- Desktop ---------------- */}
      <div className="hidden xl:flex items-center relative container mx-auto px-6 py-3">
        {/* Логотип слева */}
        <div className="flex items-center">
          <Link href={`/${currentLocale}`}>
            <Image src="/logo.png" alt="Logo" width={70} height={30} />
          </Link>
        </div>

        {/* Навигация — строго по центру экрана */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-[#EDEAE4] transition-colors duration-300 
                         after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full 
                         after:origin-left after:scale-x-0 after:bg-[#C8A96A] after:transition-transform 
                         after:duration-300 hover:text-[#C8A96A] hover:after:scale-x-100 sm:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Блок справа: адрес + телефоны + язык */}
        <div className="ml-auto flex items-center space-x-6">
          <div className="grid grid-cols-2 gap-x-6 text-sm">
            {/* Адрес */}
            <div className="flex flex-col text-right">
              <a
                href="https://yandex.com.ge/maps/-/CLUM486w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EDEAE4] hover:underline"
              >
                Отель Московские ворота
              </a>
              <a
                href="https://yandex.com.ge/maps/-/CLUM486w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EDEAE4] hover:underline"
              >
                Московский проспект 97
              </a>
            </div>

            {/* Телефоны */}
            <div className="flex flex-col items-start">
              <a
                href="tel:+79500384135"
                className="flex items-center space-x-1 font-semibold text-[#C8A96A] hover:underline whitespace-nowrap"
              >
                <FiPhone /> <span>+7 (950) 038-41-35</span>
              </a>
              <a
                href="tel:+78124487170"
                className="flex items-center space-x-1 font-semibold text-[#C8A96A] hover:underline whitespace-nowrap"
              >
                <FiPhone /> <span>+7 (812) 448-71-70</span>
              </a>
            </div>
          </div>

          {/* Переключатель языка */}
          <LanguageSwitcher />
        </div>
      </div>

      {/* ---------------- Tablet ---------------- */}
      <div className="hidden md:flex xl:hidden flex-col container mx-auto px-6 py-3 space-y-2">
        {/* Логотип + язык в одну строку */}
        <div className="flex items-center justify-between w-full">
          <Link href={`/${currentLocale}`}>
            <Image src="/logo.png" alt="Logo" width={70} height={30} />
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Адрес + телефоны */}
        <div className="flex items-start justify-between w-full">
          {/* Адрес */}
          <div className="text-left">
            <a
              href="https://yandex.com.ge/maps/-/CLUM486w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#EDEAE4] leading-tight hover:underline"
            >
              Отель Московские ворота <br />
              Московский проспект 97
            </a>
          </div>

          {/* Телефоны */}
          <div className="flex flex-col items-end space-y-1">
            <a
              href="tel:+79500384135"
              className="flex items-center space-x-1 text-sm font-semibold text-[#C8A96A] hover:underline whitespace-nowrap"
            >
              <FiPhone /> <span>+7 (950) 038-41-35</span>
            </a>
            <a
              href="tel:+78124487170"
              className="flex items-center space-x-1 text-sm font-semibold text-[#C8A96A] hover:underline whitespace-nowrap"
            >
              <FiPhone /> <span>+7 (812) 448-71-70</span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- Mobile ---------------- */}
      <div className="flex flex-col px-4 py-3 space-y-2 md:hidden">
        {/* Логотип + язык в одну строку */}
        <div className="flex items-center justify-between w-full">
          <Link href={`/${currentLocale}`}>
            <Image src="/logo.png" alt="Logo" width={70} height={30} />
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Адрес + телефоны */}
        <div className="flex items-start justify-between w-full">
          <div className="text-left">
            <a
              href="https://yandex.com.ge/maps/-/CLUM486w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#EDEAE4] leading-tight hover:underline"
            >
              Отель Московские ворота <br />
              Московский проспект 97
            </a>
          </div>

          <div className="flex flex-col items-end space-y-1">
            <a
              href="tel:+79500384135"
              className="flex items-center space-x-1 text-sm font-semibold text-[#C8A96A] hover:underline whitespace-nowrap"
            >
              <FiPhone /> <span>+7 (950) 038-41-35</span>
            </a>
            <a
              href="tel:+78124487170"
              className="flex items-center space-x-1 text-sm font-semibold text-[#C8A96A] hover:underline whitespace-nowrap"
            >
              <FiPhone /> <span>+7 (812) 448-71-70</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
