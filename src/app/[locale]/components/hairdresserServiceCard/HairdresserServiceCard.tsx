"use client";

import Image from "next/image";
import { HairdresserServiceType } from "../../models/HairdresserServiceTypes";
import BookingButton from "../ui/BookingButton";

interface HairdresserServiceCardProps {
  service: HairdresserServiceType;
}

const HairdresserServiceCard: React.FC<HairdresserServiceCardProps> = ({ service }) => {
  return (
    <div className="relative flex flex-col rounded-lg bg-[#2A2723] p-4 shadow-lg transition-transform duration-300 sm:p-6 md:flex-row md:p-8">
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

        {/* Кнопка бронирования */}
        <div className="mt-6 flex justify-center md:justify-start">
          <BookingButton />
        </div>
      </div>
    </div>
  );
};

export default HairdresserServiceCard;
