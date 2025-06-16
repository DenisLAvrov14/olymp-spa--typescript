"use client";

import { useTranslations } from "next-intl";
import HairdresserServicesList from "../hairdresserServicesList/HairdresserServicesList";

const HairdresserServicesBlock = () => {
  const t = useTranslations("hairServices");

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
      image: "/hairdress/suhieibrashing.jpg",
      title: t("services.1.title"),
      description: t("services.1.description"),
      prices: [
        { time: t("services.1.options.short"), cost: 800 },
        { time: t("services.1.options.shortComplex"), cost: 1300 },
        { time: t("services.1.options.medium"), cost: 1100 },
        { time: t("services.1.options.mediumComplex"), cost: 1500 },
        { time: t("services.1.options.long"), cost: 1500 },
        { time: t("services.1.options.longComplex"), cost: 2000 },
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
      prices: [{ time: t("services.4.options.all"), cost: 1200 }],
    },
  ];

  return (
    <section className="bg-[#1F1D1A] py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-[#C8A96A]">{t("title")}</h2>
        <HairdresserServicesList services={services} />
      </div>
    </section>
  );
};

export default HairdresserServicesBlock;
