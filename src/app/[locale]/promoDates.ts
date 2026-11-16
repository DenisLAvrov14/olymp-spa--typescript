"use client";

import { useEffect, useState } from "react";

// Новогодние акции действуют до 14.01 включительно (по Москве).
// После этой даты скидки в прайсе и акции в блоке «Акции» скрываются автоматически.
export const NEW_YEAR_PROMO_END = new Date("2027-01-15T00:00:00+03:00");

export const MAKEUP_DISCOUNT_PERCENT = 40;

export const useIsPromoActive = (end: Date = NEW_YEAR_PROMO_END) => {
  // На сервере считаем акцию активной, на клиенте уточняем по текущей дате.
  const [active, setActive] = useState(true);
  useEffect(() => {
    setActive(Date.now() < end.getTime());
  }, [end]);
  return active;
};

const formatRub = (value: number) => value.toLocaleString("ru-RU").replace(/\u00A0/g, " ");

/**
 * Цена со скидкой на макияж и причёски, пока идёт акция.
 * Возвращает поля для HairdresserServicePrice: cost (+ oldCost во время акции).
 */
export const makeupPromoPrice = (price: number, promoActive: boolean) =>
  promoActive
    ? {
        cost: formatRub(Math.round((price * (100 - MAKEUP_DISCOUNT_PERCENT)) / 100 / 10) * 10),
        oldCost: price,
      }
    : { cost: formatRub(price) };

export { formatRub };
