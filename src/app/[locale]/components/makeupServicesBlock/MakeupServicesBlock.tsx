"use client";

import { useTranslations } from "next-intl";
import HairdresserServicesList from "../hairdresserServicesList/HairdresserServicesList";
import { MAKEUP_DISCOUNT_PERCENT, makeupPromoPrice, useIsPromoActive } from "../../promoDates";

const MakeupServicesBlock = () => {
  const t = useTranslations("makeupServices");
  const promoActive = useIsPromoActive();
  const badge = promoActive ? `−${MAKEUP_DISCOUNT_PERCENT}%` : undefined;

  const items = [
    { image: "/makeup/nude.webp", price: 5200 },
    { image: "/makeup/evening.jpg", price: 6800 },
    { image: "/makeup/lifting.webp", price: 6200 },
    { image: "/makeup/combo.jpg", price: 8500, from: true },
  ];

  const services = items.map((item, i) => ({
    image: item.image,
    title: t(`services.${i}.title`),
    description: t(`services.${i}.description`),
    badge,
    prices: [
      {
        time: "",
        alignLeft: true,
        prefix: item.from ? t("from") : undefined,
        ...makeupPromoPrice(item.price, promoActive),
      },
    ],
  }));

  return (
    <section id="makeup" className="scroll-mt-24 bg-[#1F1D1A] py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-[#C8A96A]">{t("title")}</h2>
        <HairdresserServicesList services={services} />
      </div>
    </section>
  );
};

export default MakeupServicesBlock;
