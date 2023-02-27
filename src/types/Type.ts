export interface IItems {
  accType?: string;
  id: string;
  imageUrl: string[];
  title: string;
  price: number;
  brand: string;
  popular?: boolean;
  news?: boolean;
  wire?: string;
  backlight?: string;
  soldout: string;
  switches?: { id: string; soldout: string }[];
  category: string;
  dest?: string;
  size?: string;
}

export interface ICartItems {
  id: string;
  title: string;
  img: string;
  switch: string;
  price: string;
  count: number;
  category?: string;
}

export interface IrepairItems {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
}
