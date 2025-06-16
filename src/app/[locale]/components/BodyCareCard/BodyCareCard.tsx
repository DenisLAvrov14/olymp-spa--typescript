"use client";

import Image from "next/image";
import { useState } from "react";
import { BodyCareServiceType } from "../../models/BodyCareServiceType";
import ConfirmBookingModal from "../ui/ConfirmBookingModal";

interface BodyCareCardProps {
  service: BodyCareServiceType;
}

const BodyCareCard: React.FC<BodyCareCardProps> = ({ service }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCardClick = () => setShowConfirm(true);
  const handleConfirm = () => {
    setShowConfirm(false);
    window.location.href = "https://n1124325.yclients.com/";
  };
  const handleCancel = () => setShowConfirm(false);

  return (
    <div
      className="relative flex cursor-pointer flex-col rounded-lg bg-[#2A2723] p-6 shadow-lg transition-transform duration-300 md:flex-row"
      onClick={() => {
        if (!showConfirm) handleCardClick();
      }}
    >
      {/* Изображение */}
      <div className="mb-4 w-full md:mb-0 md:w-1/3">
        <Image
          src={service.image}
          alt={service.title}
          width={300}
          height={200}
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/* Текст и цены */}
      <div className="flex w-full flex-col justify-center text-center md:w-2/3 md:pl-6 md:text-left">
        <h3 className="mb-2 text-xl font-semibold text-[#C8A96A]">{service.title}</h3>
        <p className="mb-4 text-sm text-[#EDEAE4]">{service.description}</p>

        <div className="grid grid-cols-2 gap-x-8 font-medium text-[#A8C3A0]">
          {service.prices.map((price, index) => (
            <div key={index} className="flex justify-between">
              <span>{price.time}</span>
              <span>{price.cost}₽</span>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно подтверждения */}
      {showConfirm && <ConfirmBookingModal onConfirm={handleConfirm} onCancel={handleCancel} />}
    </div>
  );
};

export default BodyCareCard;
