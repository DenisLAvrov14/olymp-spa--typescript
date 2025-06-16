export interface FaceCarePrice {
  time: string;
  cost: number;
}

export interface FaceCareServiceType {
  image: string;
  title: string;
  description: string;
  prices: FaceCarePrice[];
}
