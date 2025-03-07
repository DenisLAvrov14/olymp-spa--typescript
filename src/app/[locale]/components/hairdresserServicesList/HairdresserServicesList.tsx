"use client";

import { HairdresserServiceType } from "../../models/HairdresserServiceTypes";
import HairdresserServiceCard from "../hairdresserServiceCard/HairdresserServiceCard";

interface HairdresserServicesListProps {
  services: HairdresserServiceType[];
}

const HairdresserServicesList: React.FC<HairdresserServicesListProps> = ({
  services,
}) => {
  return (
    <div className="grid grid-cols-1 gap-8 p-8 md:max-w-4xl mx-auto">
      {services.map((service, index) => (
        <HairdresserServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default HairdresserServicesList;
