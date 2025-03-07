export interface HairdresserServicePrice {
  time: string;
  cost: number;
}

export interface HairdresserServiceType {
  image: string;
  title: string;
  description: string;
  prices: HairdresserServicePrice[];
}
