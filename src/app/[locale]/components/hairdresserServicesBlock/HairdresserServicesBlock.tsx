"use client";

import HairdresserServicesList from "../hairdresserServicesList/HairdresserServicesList";

const HairdresserServicesBlock = () => {
  const services = [
    {
      image: "/haircut1.jpg", // Проверь, что файлы загружены в `public`
      title: "Мужская стрижка",
      description: "Классическая и современная стрижка от профессионалов.",
      prices: [
        { time: "30 минут", cost: 1500 },
        { time: "60 минут", cost: 2500 },
      ],
    },
    // Добавь ещё карточки
  ];

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-green-900 text-center mb-8">
        Услуги парикмахера
      </h2>
      <HairdresserServicesList services={services} />
    </section>
  );
};

export default HairdresserServicesBlock;
