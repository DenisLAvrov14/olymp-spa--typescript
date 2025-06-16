"use client";

import Image from "next/image";
import { useState } from "react";
import { HairdresserServiceType } from "../../models/HairdresserServiceTypes";
import ConfirmBookingModal from "../ui/ConfirmBookingModal";

interface HairdresserServiceCardProps {
  service: HairdresserServiceType;
}

const HairdresserServiceCard: React.FC<HairdresserServiceCardProps> = ({ service }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCardClick = () => setShowConfirm(true);
  const handleConfirm = () => {
    setShowConfirm(false);
    window.location.href = "https://n1124325.yclients.com/";
  };
  const handleCancel = () => setShowConfirm(false);

  return (
    <div
      className="relative flex cursor-pointer flex-col rounded-lg bg-[#2A2723] p-4 shadow-lg transition-transform duration-300 sm:p-6 md:flex-row md:p-8"
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
          className="h-auto w-full rounded-lg object-cover"
        />
      </div>

      {/* Текст и цены */}
      <div className="flex w-full flex-col justify-center text-center md:w-2/3 md:pl-6 md:text-left">
        <h3 className="mb-2 text-lg font-semibold text-[#C8A96A] sm:text-xl">{service.title}</h3>
        <p className="mb-4 text-xs text-[#EDEAE4] sm:text-sm">{service.description}</p>

        {/* Новый адаптивный блок цен */}
        <div className="grid grid-cols-1 gap-2 font-helvetica text-sm text-[#A8C3A0] sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {service.prices.map((price, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{price.time}</span>
              <span>{price.cost}₽</span>
            </div>
          ))}
        </div>
      </div>

      {/* Модалка подтверждения */}
      {showConfirm && <ConfirmBookingModal onConfirm={handleConfirm} onCancel={handleCancel} />}
    </div>
  );
};

export default HairdresserServiceCard;
