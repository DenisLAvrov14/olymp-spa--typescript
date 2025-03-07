"use client";

const ReviewsBlock = () => {
  const reviews = [
    {
      author: "Анна П.",
      text: "Отличное место! Всё очень уютно, мастер - профессионал!",
      rating: 5,
    },
    {
      author: "Игорь С.",
      text: "Массаж просто супер! Чувствую себя отдохнувшим и обновлённым.",
      rating: 4,
    },
    // Добавь ещё отзывы
  ];

  return (
    <section className="container mx-auto py-12 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-green-900 text-center mb-8">
        Отзывы
      </h2>

      {/* Виджет отзывов Яндекса */}
      <div className="w-full max-w-3xl mt-12">
        <iframe
          src="https://yandex.ru/maps-reviews-widget/28584245915?comments"
          width="95%"
          height="700"
          style={{
            border: "1px solid #e6e6e6",
            borderRadius: "8px",
            boxSizing: "border-box",
          }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ReviewsBlock;
