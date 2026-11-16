"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { useIsPromoActive } from "../../promoDates";

const BonusOffer: FC = () => {
  const t = useTranslations("bonusOffer");
  const newYearActive = useIsPromoActive();

  const offers: { key: string; show?: boolean; link?: string }[] = [
    { key: "spaForTwo" },
    { key: "makeupSale", show: newYearActive, link: "#makeup" },
    { key: "offer2" },
    { key: "offer3", show: newYearActive },
    { key: "offer4" },
    { key: "offer7" },
    { key: "offer8" },
  ];

  return (
    <section
      id="bonus-offer"
      className="relative w-full bg-[#1F1D1A] text-white px-6 pb-20 pt-28"
    >
      <div className="container mx-auto text-center bg-[#1F1D1A]">
        <h2 className="mb-8 text-center font-helvetica text-4xl font-bold text-[#C8A96A]">
          🔥 {t("title")}
        </h2>

        <div className="space-y-10 text-center">
          {offers
            .filter((o) => o.show !== false)
            .map(({ key, link }) => (
              <div key={key}>
                <p className="mb-2 text-lg whitespace-pre-line">{t(`${key}.description`)}</p>
                {t(`${key}.note`) && <p className="text-sm italic">{t(`${key}.note`)}</p>}
                {link && (
                  <a
                    href={link}
                    className="text-sm text-[#C8A96A] underline underline-offset-4 hover:text-[#EDEAE4]"
                  >
                    {t(`${key}.link`)}
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BonusOffer;
