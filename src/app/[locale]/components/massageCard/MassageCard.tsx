"use client";

import Image from "next/image";
import { useState } from "react";
import { MassageType } from "../../models/MassageType";
import ConfirmBookingModal from "../ui/ConfirmBookingModal";

interface MassageCardProps {
  massage: MassageType;
}

const MassageCard: React.FC<MassageCardProps> = ({ massage }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCardClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    window.location.href = "/booking"; // ← замени на нужный маршрут
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div
      className="relative flex cursor-pointer flex-col rounded-lg bg-[#2A2723] p-6 font-helvetica shadow-lg"
      onClick={() => {
        if (!showConfirm) handleCardClick();
      }}
    >
      {/* Изображение */}
      <div className="mb-4 w-full">
        {massage.image ? (
          <Image
            src={massage.image}
            alt={massage.title}
            width={400}
            height={300}
            className="h-[300px] w-full rounded-lg object-cover object-center"
          />
        ) : (
          <div className="h-[300px] w-full rounded-lg bg-[#3A3632]" />
        )}
      </div>

      {/* Текст и цены */}
      <div className="flex flex-col justify-center text-center">
        <h3 className="mb-2 text-xl font-semibold text-[#C8A96A]">{massage.title}</h3>
        <p className="mb-4 text-sm text-[#EDEAE4]">{massage.description}</p>

        <div className="flex flex-col gap-1 font-medium text-[#A8C3A0]">
          {massage.prices.map((price, index) => (
            <div key={index} className="flex justify-between">
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

export default MassageCard;
