import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ShoppingAction } from './actions';
import App from './components/App';
import { shop } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { IStoreState } from './types';


const store = createStore<IStoreState, ShoppingAction, any, any>(shop, {
  items: [],
  total: 0
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
