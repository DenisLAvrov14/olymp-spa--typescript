"use client";

import Link from "next/link";
import { FaWhatsapp, FaVk, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-6">
        {/* Логотип и навигация */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">Olimp SPA</h3>
          <nav className="mt-4">
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link href="#services" className="hover:underline">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="#special-offers" className="hover:underline">
                  Акции
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:underline">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="hover:underline">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Контакты */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold">Контакты</h4>
          <p className="text-sm mt-2">
            Санкт-Петербург, Московский проспект 97А
          </p>
          <p className="text-sm">С 12:00 до 22:00</p>
          <p className="text-sm mt-2">Телефон: +7 (950) 038-41-35</p>
        </div>

        {/* Социальные сети */}
        <div>
          <h4 className="text-lg font-semibold">Мы в соцсетях</h4>
          <div className="flex space-x-4 mt-2">
            <Link
              href="https://api.whatsapp.com/send/?phone=79500384135"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaWhatsapp size={24} />
            </Link>
            <Link
              href="https://vk.com/olympspa"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaVk size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/olympspa/"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaInstagram size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
