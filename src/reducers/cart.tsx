import { ShoppingAction } from '../actions';
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../constants';
import { ICartState } from '../types';

const initialState: ICartState = {
  idOnCart: [],
  quantityById: []
}

function idOnCart(state: any = initialState.idOnCart, action: ShoppingAction) {
    const { productId, type } = action;

    switch (type) {
      case ADD_PRODUCT:
        return state.indexOf(productId) !== -1 ? state : [...state, productId];

      case REMOVE_PRODUCT:
        // const index = state.indexOf(productId);

        // return [
        //   ...state.slice(0, index)
        // ]

      default:
        return state;
    }
  }
  
function quantityById (state: number[] = initialState.quantityById, action: ShoppingAction) {
  const { productId } = action;

  switch (action.type) {
    case ADD_PRODUCT:
      return {...state, [productId]: (state[productId] || 0) + 1 };

    case REMOVE_PRODUCT:
      return {...state, [productId]: 0 };

    default:
      return state;
  }
}

export function getQuantity(state: ICartState, productId: number) {
  return state.quantityById[productId] || 0;
}

export function getAddedIds(state: ICartState) {
  return state.idOnCart;
}

export default function cart(state: ICartState = initialState, action: ShoppingAction) {
  return {
    idOnCart: idOnCart(state.idOnCart, action),
    quantityById: quantityById(state.quantityById, action)
  }
}