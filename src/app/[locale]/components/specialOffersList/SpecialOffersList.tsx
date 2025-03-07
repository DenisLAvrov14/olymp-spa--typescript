"use client";

import { SpecialOfferType } from "../../models/SpecialOfferTypes";
import SpecialOfferCard from "../specialOfferCard/SpecialOfferCard";

interface SpecialOffersListProps {
  offers: SpecialOfferType[];
}

const SpecialOffersList: React.FC<SpecialOffersListProps> = ({ offers }) => {
  return (
    <div className="grid grid-cols-1 gap-8 p-8 md:max-w-4xl mx-auto">
      {offers.map((offer, index) => (
        <SpecialOfferCard key={index} offer={offer} />
      ))}
    </div>
  );
};

export default SpecialOffersList;
