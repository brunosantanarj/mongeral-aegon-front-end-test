import { ShoppingAction } from '../actions';
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../constants';
import { IStoreState } from '../types/index';

export function shop(state: IStoreState, action: ShoppingAction): IStoreState {
    switch (action.type) {
        case ADD_PRODUCT:
            const newItems = state.items.concat([action.product]);
            const newTotal = newItems.reduce( 
                (total, item) => total + item.price, 
                0
            );
            return { 
                ...state,
                items: newItems, 
                total: newTotal
                };
        case REMOVE_PRODUCT:
            const firstItem = state.items.find(item =>  
                item.name === action.product.name );
            const filteredItems = state.items.filter(item => item !== firstItem );
            const newFilteredTotal = filteredItems.reduce( 
                (total, item) => total + item.price, 
                0
            );
            return { 
                ...state, 
                items: filteredItems,
                total: newFilteredTotal
            };
        default:
            return state;
    }
}