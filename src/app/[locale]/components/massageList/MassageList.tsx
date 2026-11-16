"use client";

import { useEffect, useState } from "react";
import MassageCard from "../massageCard/MassageCard";
import { MassageType } from "../../models/MassageType";

interface MassageTypeListProps {
  massages: MassageType[];
}

const MassageList: React.FC<MassageTypeListProps> = ({ massages }) => {
  const [cols, setCols] = useState(1);

  // определяем количество колонок в сетке по брейкпоинтам Tailwind
  useEffect(() => {
    const checkCols = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        // lg:grid-cols-3
        setCols(3);
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        // md:grid-cols-2
        setCols(2);
      } else {
        // mobile: grid-cols-1
        setCols(1);
      }
    };

    checkCols();
    window.addEventListener("resize", checkCols);

    return () => window.removeEventListener("resize", checkCols);
  }, []);

  // считаем последнюю строку
  const remainder = massages.length % cols;
  const lastRowCount = remainder === 0 ? cols : remainder;

  const fullRowsCount = massages.length - lastRowCount;
  const fullRows = massages.slice(0, fullRowsCount);
  const lastRow = massages.slice(fullRowsCount);

return (
  <div className="w-full px-4 md:px-8">
    {/* обычные строки в grid */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {fullRows.map((massage, index) => (
        <MassageCard key={index} massage={massage} />
      ))}
    </div>

    {/* последняя строка — центрируем */}
    {lastRow.length > 0 && (
      <div className="flex justify-center gap-8 mt-8 flex-wrap">
        {lastRow.map((massage, index) => (
          <div
            key={`last-${index}`}
            className="
              w-full 
              md:w-auto 
              lg:w-[calc((100%-64px)/3)]
            "
          >
            <MassageCard massage={massage} />
          </div>
        ))}
      </div>
    )}
  </div>
);

};

export default MassageList;
