import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getProducts } from './actions';
import App from './components/App';
import products from './data/products.json';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ];
const store = createStore(reducers, applyMiddleware(...middleware));

store.dispatch(getProducts(products))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
