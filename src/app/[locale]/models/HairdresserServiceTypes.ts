export interface HairdresserServicePrice {
  time: string;
  cost: number | string;
  /** Старая цена — показывается зачёркнутой рядом с новой (для акций) */
  oldCost?: number;
  /** Текст перед ценой, например «от» */
  prefix?: string;
  alignLeft?: boolean;
}

export interface HairdresserServiceType {
  image: string;
  title: string;
  description: string;
  prices: HairdresserServicePrice[];
  /** Значок на фото, например «−40%» */
  badge?: string;
}
