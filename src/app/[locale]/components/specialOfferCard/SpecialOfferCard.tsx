"use client";

import Image from "next/image";
import { SpecialOfferType } from "../../models/SpecialOfferTypes";

interface SpecialOfferCardProps {
  offer: SpecialOfferType;
}

const SpecialOfferCard: React.FC<SpecialOfferCardProps> = ({ offer }) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#F5EDE1] p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      {/* Изображение */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <Image
          src={offer.image}
          alt={offer.title}
          width={300}
          height={200}
          className="rounded-lg w-full"
        />
      </div>

      {/* Текст и цены */}
      <div className="w-full md:w-2/3 md:pl-6 flex flex-col justify-center text-center md:text-left">
        <h3 className="text-xl font-semibold text-green-900 mb-2">
          {offer.title}
        </h3>
        <p className="text-gray-700 text-sm mb-4">{offer.description}</p>

        {/* Блок цен */}
        <div className="grid grid-cols-2 gap-x-8 text-green-900 font-medium">
          {offer.prices.map((price, index) => (
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

export default SpecialOfferCard;
