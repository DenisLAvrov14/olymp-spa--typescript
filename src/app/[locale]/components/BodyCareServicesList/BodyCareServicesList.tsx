"use client";

import { BodyCareServiceType } from "../../models/BodyCareServiceType";
import BodyCareCard from "../BodyCareCard/BodyCareCard";

interface BodyCareServicesListProps {
  services: BodyCareServiceType[];
}

const BodyCareServicesList: React.FC<BodyCareServicesListProps> = ({ services }) => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-8 px-4 md:max-w-4xl md:px-8">
      {services.map((service, index) => (
        <BodyCareCard key={index} service={service} />
      ))}
    </div>
  );
};

export default BodyCareServicesList;
