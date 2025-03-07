"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("RU");

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50 py-2 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Логотип */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={30}
            className="transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/services"
            className="text-gray-700 hover:text-black transition-colors duration-300 relative after:block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Услуги
          </Link>
          <Link
            href="/special-offers"
            className="text-gray-700 hover:text-black transition-colors duration-300 relative after:block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Особые предложения
          </Link>
          <Link
            href="/reviews"
            className="text-gray-700 hover:text-black transition-colors duration-300 relative after:block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Отзывы
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-black transition-colors duration-300 relative after:block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Контакты
          </Link>
        </nav>

        {/* Переключатель языка */}
        <div className="relative">
          <button
            className="flex items-center text-gray-700 hover:text-black transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {lang} <ChevronDown size={16} className="ml-1" />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md transition-all duration-300">
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                onClick={() => {
                  setLang("RU");
                  setIsOpen(false);
                }}
              >
                Русский
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                onClick={() => {
                  setLang("EN");
                  setIsOpen(false);
                }}
              >
                English
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
