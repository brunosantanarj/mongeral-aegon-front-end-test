export interface IProduct {
  id: number,
  image: string,
  inventory: number,
  name: string,
  price: number
}

export interface ICartState {
  idOnCart: number[],
  quantityById: number[]
}

export interface IProductState {
  byId: IProduct[],
  visibleIds: number[]
}

export interface IStoreState {
  cart: ICartState,
  products: IProductState
}