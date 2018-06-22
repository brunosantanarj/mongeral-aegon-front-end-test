export interface IProduct {
  id: number,
  image: string,
  inventory: number,
  name: string,
  price: number
}

export interface IStoreState {
  items: IProduct[],
  total: number
}