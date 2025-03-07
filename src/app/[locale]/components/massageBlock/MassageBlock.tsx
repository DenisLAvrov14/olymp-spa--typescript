"use client";

import MassageList from "../massageList/MassageList";

const MassageBlock = () => {
  const massages = [
    {
      image: "/placeholder.png", // Заменить на реальный путь
      title: "Классический",
      description:
        "Расслабьтесь и позвольте мышцам достигнуть полного спокойствия.",
      prices: [
        { time: "60 минут", cost: 4000 },
        { time: "90 минут", cost: 6000 },
      ],
    },
    // Добавить ещё 5 карточек аналогично
  ];

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-green-900 text-center mb-8">
        Наши массажи
      </h2>
      <MassageList massages={massages} />
    </section>
  );
};

export default MassageBlock;
