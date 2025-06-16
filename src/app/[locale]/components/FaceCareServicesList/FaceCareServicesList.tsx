"use client";

import { FaceCareServiceType } from "../../models/FaceCareServiceType";
import FaceCareCard from "../FaceCareCard/FaceCareCard";

interface FaceCareServicesListProps {
  services: FaceCareServiceType[];
}

const FaceCareServicesList: React.FC<FaceCareServicesListProps> = ({ services }) => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-8 px-4 md:max-w-4xl md:px-8">
      {services.map((service, index) => (
        <FaceCareCard key={index} service={service} />
      ))}
    </div>
  );
};

export default FaceCareServicesList;
