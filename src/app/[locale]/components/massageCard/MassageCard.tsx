"use client";

import Image from "next/image";
import { MassageType } from "../../models/MassageType";

interface MassageCardProps {
  massage: MassageType;
}

const MassageCard: React.FC<MassageCardProps> = ({ massage }) => {
  return (
    <div className="flex flex-col bg-[#F5EDE1] p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      {/* Изображение */}
      <div className="w-full mb-4">
        <Image
          src={massage.image}
          alt={massage.title}
          width={300}
          height={200}
          className="rounded-lg w-full"
        />
      </div>

      {/* Текст и цены */}
      <div className="flex flex-col justify-center text-center">
        <h3 className="text-xl font-semibold text-green-900 mb-2">
          {massage.title}
        </h3>
        <p className="text-gray-700 text-sm mb-4">{massage.description}</p>

        {/* Блок цен */}
        <div className="grid grid-cols-2 gap-x-8 text-green-900 font-medium">
          {massage.prices.map((price, index) => (
            <div key={index} className="flex justify-between">
              <span>{price.time}</span>
              <span>{price.cost}₽</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MassageCard;
