"use client";

import SpecialOffersList from "../specialOffersList/SpecialOffersList";

const SpecialOffersBlock = () => {
  const offers = [
    {
      image: "/offer1.jpg", // Проверь, что файлы загружены в `public`
      title: "Весенний релакс",
      description:
        "Скидка на массажи весной! Расслабьтесь и восстановите силы.",
      prices: [
        { time: "60 минут", cost: 3500 },
        { time: "90 минут", cost: 5000 },
      ],
    },
    // Добавь ещё карточки
  ];

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-green-900 text-center mb-8">
        Специальные предложения
      </h2>
      <SpecialOffersList offers={offers} />
    </section>
  );
};

export default SpecialOffersBlock;
