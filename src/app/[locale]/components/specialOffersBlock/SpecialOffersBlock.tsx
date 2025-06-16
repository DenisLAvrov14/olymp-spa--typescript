"use client";

import { useTranslations } from "next-intl";
import SpecialOffersList from "../specialOffersList/SpecialOffersList";

const SpecialOffersBlock = () => {
  const t = useTranslations("specialOffers");
  const d = useTranslations("duration");

  const offers = [
    {
      image: "/specialOffers/kedr2.jpg",
      title: t("offers.0.title"),
      description: t("offers.0.description"),
      prices: [{ time: d("30"), cost: 1800 }],
    },
    {
      image: "/specialOffers/dvebochki.jpg",
      title: t("offers.1.title"),
      description: t("offers.1.description"),
      prices: [{ time: d("30"), cost: 2800 }],
    },
    {
      image: "/specialOffers/kedr1.jpg",
      title: t("offers.2.title"),
      description: t("offers.2.description"),
      prices: [{ time: t("offers.2.durationLabel"), cost: 5800 }],
    },
    {
      image: "/specialOffers/bochka.jpg",
      title: t("offers.3.title"),
      description: t("offers.3.description"),
      prices: [{ time: d("120"), cost: 9500 }],
    },
    {
      image: "/specialOffers/complex.jpg",
      title: t("offers.4.title"),
      description: t("offers.4.description"),
      prices: [{ time: d("150"), cost: 12800 }],
    },
    {
      image: "/specialOffers/anticelulit.jpg",
      title: t("offers.5.title"),
      description: t("offers.5.description"),
      prices: [{ time: d("120"), cost: 11500 }],
    },
    {
      image: "/specialOffers/hudeem.jpg",
      title: t("offers.6.title"),
      description: t("offers.6.description"),
      prices: [{ time: d("200"), cost: 15000 }],
    },
    {
      image: "/specialOffers/rasslab.jpg",
      title: t("offers.7.title"),
      description: t("offers.7.description"),
      prices: [{ time: d("200"), cost: 15000 }],
    },
  ];

  return (
    <section className="bg-[#1F1D1A] py-12">
      <div className="container mx-auto px-4">
        <h2 id="special-offers" className="mb-8 text-center text-2xl font-bold text-[#C8A96A]">
          {t("title")}
        </h2>
        <SpecialOffersList offers={offers} />
      </div>
    </section>
  );
};

export default SpecialOffersBlock;
