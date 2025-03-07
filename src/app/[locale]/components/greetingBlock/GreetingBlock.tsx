"use client";

import Image from "next/image";

const GreetingBlock = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url(/GreetingBlockBG.png)",
        backgroundPosition: "center center", // Центрирование
        backgroundRepeat: "no-repeat", // Отключение повторения
      }}
    >
      {/* Контейнер для контента */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Верхний заголовок */}
        <h2 className="text-lg md:text-2xl italic text-gray-900 mb-4">
          Вершина удовольствия
        </h2>

        {/* Блоки видео */}
        <div className="flex justify-center items-end space-x-8 w-full max-w-6xl relative">
          <div className="w-1/4 h-[33.5rem] bg-red-500 relative top-32"></div>{" "}
          {/* Левый вертикальный, выровнен с центральным */}
          <div className="w-2/4 h-[22rem] bg-red-500 relative -top-14"></div>{" "}
          {/* Центральный горизонтальный, поднят на 20px */}
          <div className="w-1/4 h-[33.5rem] bg-red-500 relative -top-14"></div>{" "}
          {/* Правый вертикальный */}
        </div>

        {/* Нижний заголовок */}
        <h3 className="text-md md:text-lg italic text-gray-900 mt-6">
          Выбери свое
        </h3>
      </div>
    </section>
  );
};

export default GreetingBlock;
