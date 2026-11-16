"use client";

import { useTranslations } from "next-intl";
import HairdresserServicesList from "../hairdresserServicesList/HairdresserServicesList";
import { MAKEUP_DISCOUNT_PERCENT, makeupPromoPrice, useIsPromoActive } from "../../promoDates";

const HairdresserServicesBlock = () => {
  const t = useTranslations("hairServices");
  const promoActive = useIsPromoActive();

  const services = [
    {
      image: "/hairdress/utuzokiploika.jpg",
      title: t("services.0.title"),
      description: t("services.0.description"),
      prices: [
        { time: t("services.0.options.short"), cost: 1500 },
        { time: t("services.0.options.medium"), cost: 1800 },
        { time: t("services.0.options.long"), cost: 2400 },
      ],
    },
    {
      image: "/hairdress/mitioibrashing.jpg",
      title: t("services.2.title"),
      description: t("services.2.description"),
      prices: [
        { time: t("services.2.options.short"), cost: 1500 },
        { time: t("services.2.options.medium"), cost: 2500 },
        { time: t("services.2.options.long"), cost: 2800 },
      ],
    },
    {
      image: "/hairdress/vostanavlenie.jpg",
      title: t("services.3.title"),
      description: t("services.3.description"),
      prices: [
        { time: t("services.3.options.short"), cost: 1500 },
        { time: t("services.3.options.medium"), cost: 2500 },
        { time: t("services.3.options.long"), cost: 2800 },
      ],
    },
    {
      image: "/hairdress/konchiki.jpg",
      title: t("services.4.title"),
      description: t("services.4.description"),
      prices: [
        { time: t("services.4.options.all"), cost: 1200 },
      ],
    },
    {
      image: "/hairdress/mens_haircut.jpg",
      title: t("services.5.title"),
      description: t("services.5.description"),
      prices: [
        { time: "", cost: "1200–1900", alignLeft: true },
      ],
    },
    {
      image: "/hairdress/wemen_haircut.jpg",
      title: t("services.6.title"),
      description: t("services.6.description"),
      prices: [
        { time: "", cost: "1900–3500", alignLeft: true },
      ],
    },
    {
      image: "/hairdress/pricheska.webp",
      title: t("services.7.title"),
      description: t("services.7.description"),
      badge: promoActive ? `−${MAKEUP_DISCOUNT_PERCENT}%` : undefined,
      prices: [
        { time: t("services.7.options.short"), ...makeupPromoPrice(3500, promoActive) },
        { time: t("services.7.options.medium"), ...makeupPromoPrice(4500, promoActive) },
        { time: t("services.7.options.long"), ...makeupPromoPrice(5900, promoActive) },
      ],
    },
  ];

  return (
    <section className="bg-[#1F1D1A] py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-[#C8A96A]">
          {t("title")}
        </h2>

        <HairdresserServicesList services={services} />
      </div>
    </section>
  );
};

export default HairdresserServicesBlock;