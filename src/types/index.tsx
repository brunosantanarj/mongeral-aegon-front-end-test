export interface IProduct {
  name: string,
  price: number
}

export type ShoppingItem = IProduct & { totalPerItem: number }

export interface IShoppingCart {
  [key: string]: ShoppingItem;
}

export interface IShoppingCartState {
  availableItems: IProduct[];
  items: IProduct[];
  total: number;
}