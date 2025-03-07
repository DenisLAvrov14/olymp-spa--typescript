"use client";

import Link from "next/link";
import { FaWhatsapp, FaVk, FaInstagram } from "react-icons/fa";

const ContactBlock = () => {
  return (
    <section className="container mx-auto py-12 flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold text-green-900 mb-4">Контакты</h2>
      <p className="text-lg text-gray-800 mb-2">
        Санкт-Петербург, Московский проспект 97А
      </p>
      <p className="text-md text-gray-700 mb-6">
        С понедельника по воскресенье, с 12:00 до 22:00
      </p>

      {/* Социальные сети */}
      <div className="flex space-x-6 mb-6">
        <Link
          href="https://api.whatsapp.com/send/?phone=79500384135&text&type=phone_number&app_absent=0"
          target="_blank"
          className="text-green-700 text-lg hover:text-green-900 transition-colors flex items-center space-x-2"
        >
          <FaWhatsapp size={24} /> <span>WhatsApp</span>
        </Link>
        <Link
          href="https://vk.com/olympspa"
          target="_blank"
          className="text-blue-700 text-lg hover:text-blue-900 transition-colors flex items-center space-x-2"
        >
          <FaVk size={24} /> <span>VK</span>
        </Link>
        <Link
          href="https://www.instagram.com/olympspa/"
          target="_blank"
          className="text-pink-600 text-lg hover:text-pink-800 transition-colors flex items-center space-x-2"
        >
          <FaInstagram size={24} /> <span>Instagram</span>
        </Link>
      </div>

      {/* Карта с правильным адресом */}
      <div className="w-full max-w-4xl h-96">
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
