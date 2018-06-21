export interface IProduct {
  id: number,
  name: string,
  price: number
}

export interface IStoreState {
  items: IProduct[],
  total: number
}