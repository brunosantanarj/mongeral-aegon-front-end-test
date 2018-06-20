import { ShoppingAction } from '../actions';
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../constants';
import { IShoppingCartState } from '../types/index';

export function shop(state: IShoppingCartState, action: ShoppingAction): IShoppingCartState {
    const { items } = state;
    const { product, type } = action;
    
    switch (type) {
        case ADD_PRODUCT:
            const newItems = items.concat([product]);
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
            const firstItem = items.find( item =>  
                item.name === product.name );
            const filteredItems = items.filter( item => item !== firstItem );
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