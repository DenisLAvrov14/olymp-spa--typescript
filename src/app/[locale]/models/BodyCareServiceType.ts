export interface BodyCareServicePrice {
  time: string;
  cost: number;
}

export interface BodyCareServiceType {
  image: string;
  title: string;
  description: string;
  prices: BodyCareServicePrice[];
}
