"use client";

import { useTranslations } from "next-intl";
import BodyCareServicesList from "../BodyCareServicesList/BodyCareServicesList";

const BodyCareBlock = () => {
  const t = useTranslations("bodyCare");
  const tDuration = useTranslations("duration");

  const services = [
    {
      image: "/massages/lymph.jpg",
      title: t("services.0.title"),
      description: t("services.0.description"),
      prices: [
        { time: tDuration("60"), cost: 4000 },
        { time: tDuration("90"), cost: 6000 },
      ],
    },
    {
      image: "/massages/lymph.jpg",
      title: t("services.1.title"),
      description: t("services.1.description"),
      prices: [{ time: tDuration("60"), cost: 4500 }],
    },
    {
      image: "/massages/lymph.jpg",
      title: t("services.2.title"),
      description: t("services.2.description"),
      prices: [{ time: tDuration("60"), cost: 5500 }],
    },
    {
      image: "/massages/lymph.jpg",
      title: t("services.3.title"),
      description: t("services.3.description"),
      prices: [{ time: tDuration("60"), cost: 5500 }],
    },
    {
      image: "/massages/lymph.jpg",
      title: t("services.4.title"),
      description: t("services.4.description"),
      prices: [
        { time: tDuration("30"), cost: 3000 },
        { time: tDuration("60"), cost: 4500 },
      ],
    },
    {
      image: "/bodyCare/aromaoil.jpg",
      title: t("services.5.title"),
      description: t("services.5.description"),
      prices: [{ time: tDuration("60"), cost: 4500 }],
    },
    {
      image: "/massages/lymph.jpg",
      title: t("services.6.title"),
      description: t("services.6.description"),
      prices: [{ time: tDuration("60"), cost: 10000 }],
    },
    {
      image: "/bodyCare/stone.jpg",
      title: t("services.7.title"),
      description: t("services.7.description"),
      prices: [{ time: tDuration("60"), cost: 4500 }],
    },
    {
      image: "/bodyCare/local.jpg",
      title: t("services.8.title"),
      description: t("services.8.description"),
      prices: [
        { time: tDuration("30"), cost: 2200 },
        { time: tDuration("60"), cost: 3500 },
      ],
    },
    {
      image: "/bodyCare/scrab.jpg",
      title: t("services.9.title"),
      description: t("services.9.description"),
      prices: [{ time: tDuration("30"), cost: 3500 }],
    },
    {
      image: "/massages/lymph.jpg",
      title: t("services.10.title"),
      description: t("services.10.description"),
      prices: [{ time: tDuration("30"), cost: 3500 }],
    },
  ];

  return (
    <section className="bg-[#1F1D1A] py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-[#C8A96A]">{t("title")}</h2>
        <BodyCareServicesList services={services} />
      </div>
    </section>
  );
};

export default BodyCareBlock;
