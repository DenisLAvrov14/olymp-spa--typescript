"use client";

import Image from "next/image";
import { MassageType } from "../../models/MassageType";
import BookingButton from "../ui/BookingButton";

interface MassageCardProps {
  massage: MassageType;
}

const MassageCard: React.FC<MassageCardProps> = ({ massage }) => {
  return (
    <div className="relative flex flex-col rounded-lg bg-[#2A2723] p-6 font-helvetica shadow-lg transition-transform duration-300">
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

        {/* Кнопка бронирования */}
        <div className="mt-6 flex justify-center">
          <BookingButton />
        </div>
      </div>
    </div>
  );
};

export default MassageCard;
