import { connect } from 'react-redux';
import { removeProduct } from '../actions';
import Cart from '../components/Cart';
import { getCartProducts, getTotal } from '../reducers';
import { IStoreState } from '../types';


export function mapStateToProps(state: IStoreState) {
    return {
        products: getCartProducts(state),
        total: getTotal(state)
    };
}

export default connect(mapStateToProps, { removeProduct })(Cart);
