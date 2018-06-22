import * as constants from '../constants';
import { IProduct } from "../types";

export interface IAddProduct {
    product: IProduct,
    type: constants.ADD_PRODUCT
}

export interface IRemoveProduct {
    product: IProduct,
    type: constants.REMOVE_PRODUCT
}

export type ShoppingAction = IAddProduct | IRemoveProduct;

export function addProduct(product: IProduct): IAddProduct {
    return {
        product,
        type: constants.ADD_PRODUCT
    };
}

export function removeProduct(product: IProduct): IRemoveProduct {
    window.console.log(product);
    return {
        product,
        type: constants.REMOVE_PRODUCT
    };
}