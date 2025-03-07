"use client";

import { BrowServiceType } from "../../models/BrowServiceType";
import BrowServiceCard from "../browServiceCard/BrowServiceCard";

interface BrowServicesListProps {
  services: BrowServiceType[];
}

const BrowServicesList: React.FC<BrowServicesListProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 gap-8 p-8 md:max-w-4xl mx-auto">
      {services.map((service, index) => (
        <BrowServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default BrowServicesList;
