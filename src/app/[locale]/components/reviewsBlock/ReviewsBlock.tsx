"use client";

const ReviewsBlock = () => {

  return (
    <section id="reviews" className="flex flex-col items-center bg-[#1F1D1A] px-4 py-12">
      <h2 className="mb-8 text-center text-2xl font-bold text-[#C8A96A]">Отзывы</h2>

      {/* Виджет отзывов Яндекса */}
      <div className="mt-12 w-full max-w-3xl overflow-hidden rounded-lg border border-[#35312D] bg-[#2A2723]">
        <iframe
          src="https://yandex.ru/maps-reviews-widget/28584245915?comments"
          width="100%"
          height="700"
          style={{
            border: "none",
            display: "block",
          }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ReviewsBlock;
