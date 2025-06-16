"use client";

import { HairdresserServiceType } from "../../models/HairdresserServiceTypes";
import HairdresserServiceCard from "../hairdresserServiceCard/HairdresserServiceCard";

interface HairdresserServicesListProps {
  services: HairdresserServiceType[];
}

const HairdresserServicesList: React.FC<HairdresserServicesListProps> = ({ services }) => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-8 px-4 md:max-w-4xl md:px-8">
      {services.map((service, index) => (
        <HairdresserServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default HairdresserServicesList;
