"use client";

import { BrowServiceType } from "../../models/BrowServiceType";
import BrowServiceCard from "../browServiceCard/BrowServiceCard";

interface BrowServicesListProps {
  services: BrowServiceType[];
}

const BrowServicesList: React.FC<BrowServicesListProps> = ({ services }) => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-8 px-4 md:max-w-4xl md:px-8">
      {services.map((service, index) => (
        <BrowServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default BrowServicesList;
