"use client";

import { useTranslations } from "next-intl";
import FaceCareServicesList from "../FaceCareServicesList/FaceCareServicesList";

const FaceCareBlock = () => {
  const t = useTranslations("faceCare");
  const tDuration = useTranslations("duration");

  const services = [
    {
      image: "/faceCare/face.jpg",
      title: t("services.0.title"),
      description: t("services.0.description"),
      prices: [{ time: tDuration("30"), cost: 3500 }],
    },
    {
      image: "/faceCare/massage.jpg",
      title: t("services.1.title"),
      description: t("services.1.description"),
      prices: [{ time: tDuration("30"), cost: 4000 }],
    },
    {
      image: "/faceCare/massage1.jpg",
      title: t("services.2.title"),
      description: t("services.2.description"),
      prices: [{ time: tDuration("60"), cost: 5500 }],
    },
    {
      image: "/faceCare/mask.jpg",
      title: t("services.3.title"),
      description: t("services.3.description"),
      prices: [{ time: tDuration("60"), cost: 5000 }],
    },
    // {
    //   image: "/faceCare/spa.jpg",
    //   title: t("services.4.title"),
    //   description: t("services.4.description"),
    //   prices: [{ time: tDuration("60"), cost: 4000 }],
    // },
    // {
    //   image: "/faceCare/spa.jpg",
    //   title: t("services.5.title"),
    //   description: t("services.5.description"),
    //   prices: [{ time: tDuration("60"), cost: 4000 }],
    // },
    // {
    //   image: "/faceCare/spa.jpg",
    //   title: t("services.6.title"),
    //   description: t("services.6.description"),
    //   prices: [{ time: tDuration("60"), cost: 4000 }],
    // },
  ];

  return (
    <section className="bg-[#1F1D1A] py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-[#C8A96A]">{t("title")}</h2>
        <FaceCareServicesList services={services} />
      </div>
    </section>
  );
};

export default FaceCareBlock;
