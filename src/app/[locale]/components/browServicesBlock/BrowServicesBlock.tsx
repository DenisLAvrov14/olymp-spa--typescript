"use client";

import { useTranslations } from "next-intl";
import BrowServicesList from "../browServicesList/BrowServicesList";

const BrowServicesBlock = () => {
  const t = useTranslations("browServices");

  const services = [
    {
      image: "/browCare/okrashivanie.jpg",
      title: t("services.0.title"),
      description: t("services.0.description"),
      prices: [{ time: t("services.0.options.advanced"), cost: 1300 }],
    },
    {
      image: "/browCare/laminirowanie.jpg",
      title: t("services.1.title"),
      description: t("services.1.description"),
      prices: [{ time: t("services.1.options.standard"), cost: 2500 }],
    },
    {
      image: "/browCare/laminirowanie2.jpg",
      title: t("services.2.title"),
      description: t("services.2.description"),
      prices: [{ time: t("services.2.options.double"), cost: 3500 }],
    },
    {
      image: "/browCare/brow.png",
      title: t("services.3.title"),
      description: t("services.3.description"),
      prices: [{ time: t("services.3.options.full"), cost: 1500 }],
    },
    {
      image: "/browCare/borow2.jpg",
      title: t("services.5.title"),
      description: t("services.5.description"),
      prices: [{ time: t("services.5.options.care"), cost: 2500 }],
    },
    {
      image: "/browCare/borow3.jpg",
      title: t("services.6.title"),
      description: t("services.6.description"),
      prices: [{ time: t("services.6.options.noCorrection"), cost: 1000 }],
    },
    {
      image: "/browCare/depi.jpg",
      title: t("services.7.title"),
      description: t("services.7.description"),
      prices: [{ time: t("services.7.options.zone1"), cost: 800 }],
    },
    {
      image: "/browCare/men.jpg",
      title: t("services.4.title"),
      description: t("services.4.description"),
      prices: [{ time: t("services.8.options.full"), cost: 1500 }],
    },
    {
      image: "/browCare/BrowCorrectionOnly.jpg",
      title: t("services.5.title"),
      description: t("services.5.description"),
      prices: [{ time: t("services.9.options.basic"), cost: 1000 }],
    },
  ];

  return (
    <section className="bg-[#1F1D1A] py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-[#C8A96A]">{t("title")}</h2>
        <BrowServicesList services={services} />
      </div>
    </section>
  );
};

export default BrowServicesBlock;
