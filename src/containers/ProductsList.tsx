import { connect } from 'react-redux';
import { addToCart } from '../actions';
import ProductsList from '../components/ProductsList';
import { getVisibleProducts } from '../reducers/products';
import { IStoreState } from '../types';

export function mapStateToProps(state: IStoreState) {
    return {
        products: getVisibleProducts(state.products)
    };
}

export default connect(mapStateToProps, { addToCart })(ProductsList);