import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions';
import ProductsList from '../components/ProductsList';
import { IProduct, IStoreState } from '../types';

export function mapStateToProps({ items, total }: IStoreState) {
    return {
        items,
        total
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ShoppingAction>) {
    return {
        addProduct: (product: IProduct) => dispatch(actions.addProduct(product)),
        removeProduct: (product: IProduct) => dispatch(actions.removeProduct(product))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);