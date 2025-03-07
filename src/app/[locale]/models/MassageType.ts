import { MassagePrice } from "./MassagePrice";

export interface MassageType {
  image: string;
  title: string;
  description: string;
  prices: MassagePrice[];
}
