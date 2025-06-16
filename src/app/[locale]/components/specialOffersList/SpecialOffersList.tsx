"use client";

import { SpecialOfferType } from "../../models/SpecialOfferTypes";
import SpecialOfferCard from "../specialOfferCard/SpecialOfferCard";

interface SpecialOffersListProps {
  offers: SpecialOfferType[];
}

const SpecialOffersList: React.FC<SpecialOffersListProps> = ({ offers }) => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-8 px-4 md:max-w-4xl md:px-8">
      {offers.map((offer, index) => (
        <SpecialOfferCard key={index} offer={offer} />
      ))}
    </div>
  );
};

export default SpecialOffersList;
