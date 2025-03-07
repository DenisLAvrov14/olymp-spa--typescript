export interface BrowServicePrice {
  time: string;
  cost: number;
}

export interface BrowServiceType {
  image: string;
  title: string;
  description: string;
  prices: BrowServicePrice[];
}
