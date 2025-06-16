// models/MassageType.ts
export interface MassageType {
  image: string;
  title: string;
  description: string;
  prices: {
    time: string;
    cost: number;
  }[];
}
