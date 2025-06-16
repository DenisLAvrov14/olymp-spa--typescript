"use client";

import MassageCard from "../massageCard/MassageCard";
import { MassageType } from "../../models/MassageType";

interface MassageTypeListProps {
  massages: MassageType[];
}

const MassageList: React.FC<MassageTypeListProps> = ({ massages }) => {
  return (
    <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
      {massages.map((massage, index) => (
        <MassageCard key={index} massage={massage} />
      ))}
    </div>
  );
};

export default MassageList;
