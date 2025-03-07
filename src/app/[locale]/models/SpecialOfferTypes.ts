export interface SpecialOfferPrice {
  time: string;
  cost: number;
}

export interface SpecialOfferType {
  image: string;
  title: string;
  description: string;
  prices: SpecialOfferPrice[];
}
