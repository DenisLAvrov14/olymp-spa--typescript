"use client";

import BrowServicesList from "../browServicesList/BrowServicesList";

const BrowServicesBlock = () => {
  const services = [
    {
      image: "/brow1.jpg", // Проверь, что файлы загружены в `public`
      title: "Коррекция бровей",
      description: "Идеальная форма бровей с учётом особенностей лица.",
      prices: [
        { time: "30 минут", cost: 1200 },
        { time: "60 минут", cost: 2000 },
      ],
    },
    // Добавь ещё карточки
  ];

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-green-900 text-center mb-8">
        Услуги бровиста
      </h2>
      <BrowServicesList services={services} />
    </section>
  );
};

export default BrowServicesBlock;
