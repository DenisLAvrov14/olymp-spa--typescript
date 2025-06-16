"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Header = () => {
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "ru";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full border-b border-[#35312D] bg-[#1F1D1A] py-2 shadow-md transition-all duration-300 sm:py-3`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Логотип */}
        <Link href={`/${currentLocale}`}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={30}
            className="transition-transform duration-300"
          />
        </Link>

        {/* Навигация (скрыта на mobile) */}
        <nav className="hidden space-x-4 sm:space-x-6 md:flex lg:space-x-8">
          {[
            { href: "#services", label: currentLocale === "ru" ? "Услуги" : "Services" },
            { href: "#about", label: currentLocale === "ru" ? "О нас" : "About" },
            { href: "#reviews", label: currentLocale === "ru" ? "Отзывы" : "Reviews" },
            { href: "#contact", label: currentLocale === "ru" ? "Контакты" : "Contacts" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm text-[#EDEAE4] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#C8A96A] after:transition-transform after:duration-300 hover:text-[#C8A96A] hover:after:scale-x-100 sm:text-base`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Переключатель языка */}
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
