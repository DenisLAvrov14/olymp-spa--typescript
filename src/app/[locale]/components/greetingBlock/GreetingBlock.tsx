"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { FiX, FiVolume2, FiVolumeX } from "react-icons/fi";
import PromoSlider from "../PromoSlider/PromoSlider";

const GreetingBlock = () => {
  const [isIntroPlaying, setIsIntroPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = useTranslations("greeting");

  useEffect(() => {
    if (!isIntroPlaying) {
      document.getElementById("massage-block")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isIntroPlaying]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <>
      {isIntroPlaying ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          {/* Обёртка для вступительного видео */}
          <div className="relative w-full max-w-6xl">
            <video
              ref={videoRef}
              className="h-auto w-full rounded-lg shadow-lg"
              autoPlay
              muted={isMuted}
              onEnded={() => setIsIntroPlaying(false)}
            >
              <source src="/central.mp4" type="video/mp4" />
            </video>

            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsIntroPlaying(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center 
                         rounded-full bg-black/50 text-white shadow-md backdrop-blur 
                         transition hover:scale-110 hover:bg-black/70"
              aria-label="Закрыть видео"
            >
              <FiX size={20} />
            </button>

            {/* Кнопка звука */}
            <button
              onClick={toggleMute}
              className="absolute left-4 bottom-4 flex h-10 w-10 items-center justify-center 
                         rounded-full bg-black/50 text-white shadow-md backdrop-blur 
                         transition hover:scale-110 hover:bg-black/70"
              aria-label={isMuted ? "Включить звук" : "Отключить звук"}
            >
              {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
            </button>
          </div>
        </div>
      ) : (
        <section
          id="about"
          className="relative flex min-h-screen w-full items-center justify-center bg-[#1F1D1A] px-4 pb-20 pt-40"
        >
          <div className="container relative mx-auto flex flex-col items-center justify-center gap-12 rounded-2xl bg-[#2A2723] p-10 pt-28 shadow-2xl lg:flex-row">
            {/* Вместо видео вставляем слайдер */}
            <div className="flex w-full justify-center rounded-xl bg-[#35312D] p-4 shadow-md lg:w-1/2">
              <PromoSlider />
            </div>

            {/* Блок с описанием */}
            <div className="w-full rounded-xl bg-[#2A2723] p-6 text-[#EDEAE4] shadow-md lg:w-1/2">
              <div className="mb-6 text-center sm:text-left">
                <h2 className="font-helvetica text-6xl leading-tight text-[#C8A96A] sm:text-7xl">
                  {t("title")}
                </h2>
                <span
                  className="block text-center font-martina text-5xl text-[#A8C3A0] sm:text-6xl"
                  style={{ position: "relative", top: "-15px" }}
                >
                  {t("subtitle")}
                </span>
                <p className="mt-4 text-sm leading-relaxed">{t("paragraph1")}</p>
                <p className="mt-3 text-sm leading-relaxed">{t("paragraph2")}</p>
                <p className="mt-3 text-sm leading-relaxed">{t("paragraph3")}</p>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-[#A8C3A0]">
                  {t("paragraph4")}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default GreetingBlock;
