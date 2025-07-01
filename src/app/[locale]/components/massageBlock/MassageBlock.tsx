"use client";

import { useTranslations } from "next-intl";
import MassageList from "../massageList/MassageList";
import { MassageType } from "../../models/MassageType";

const MassageBlock = () => {
  const t = useTranslations("massages");
  const d = useTranslations("duration"); // для "30", "60", "90", "120", "150"

  const massages: MassageType[] = [
    {
      image: "/massages/classic.png",
      title: t("classic.title"),
      description: t("classic.description"),
      prices: [
        { time: d("60"), cost: 4000 },
        { time: d("90"), cost: 6000 },
      ],
    },
    {
      image: "/massages/lymph.jpg",
      title: t("lymph.title"),
      description: t("lymph.description"),
      prices: [
        { time: d("60"), cost: 4000 },

        { time: d("90"), cost: 6000 },
      ],
    },
    {
      image: "/massages/sport.jpg",
      title: t("sport.title"),
      description: t("sport.description"),
      prices: [
        { time: d("60"), cost: 5500 },
        { time: d("90"), cost: 6500 },
      ],
    },
    {
      image: "/massages/sultan.jpeg",
      title: t("sultan.title"),
      description: t("sultan.description"),
      prices: [{ time: d("60"), cost: 10000 }],
    },
    {
      image: "/massages/spaprogramm.jpg",
      title: t("spa.title"),
      description: t("spa.description"),
      prices: [
        { time: d("120"), cost: 9500 },
        { time: d("150"), cost: 14800 },
      ],
    },
    {
      image: "/massages/drenazh.jpg",
      title: t("author.title"),
      description: t("author.description"),
      prices: [{ time: d("60"), cost: 5500 }],
    },
    {
      image: "/massages/shvz.jpg",
      title: t("shvz.title"),
      description: t("shvz.description"),
      prices: [
        { time: d("30"), cost: 3000 },
        { time: d("60"), cost: 4500 },
      ],
    },
    {
      image: "/massages/aroma.jpg",
      title: t("aroma.title"),
      description: t("aroma.description"),
      prices: [{ time: d("60"), cost: 4500 }],
    },
    {
      image: "/massages/spa.jpg",
      title: t("stone.title"),
      description: t("stone.description"),
      prices: [{ time: d("60"), cost: 4500 }],
    },
    {
      image: "/massages/local2.JPG",
      title: t("focused.title"),
      description: t("focused.description"),
      prices: [
        { time: d("30"), cost: 2200 },
        { time: d("60"), cost: 3500 },
      ],
    },
    {
      image: "/massages/scrab.jpg",
      title: t("scrub.title"),
      description: t("scrub.description"),
      prices: [{ time: d("30"), cost: 3500 }],
    },
    {
      image: "/massages/obertovanie.jpg",
      title: t("wrap.title"),
      description: t("wrap.description"),
      prices: [{ time: d("30"), cost: 3500 }],
    },
  ];

  return (
    <section id="services" className="bg-[#1F1D1A] py-12">
      <div className="container mx-auto px-4">
        <h2 id="massage-block" className="mb-8 text-center text-2xl font-bold text-[#C8A96A]">
          {t("title")}
        </h2>
        <MassageList massages={massages} />
      </div>
    </section>
  );
};

export default MassageBlock;
