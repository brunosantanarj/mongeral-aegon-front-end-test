export interface IProduct {
  id: number,
  image: string,
  name: string,
  price: number
}

export interface IStoreState {
  items: IProduct[],
  total: number
}