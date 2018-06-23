import * as React from 'react';
import Cart from '../containers/Cart';
import ProductsList from '../containers/ProductsList';
import '../styles/App.scss';
import Header from './Header';

class App extends React.Component {
  public render() {
    return (
      <div className="wrapper">
        <Header />
        <ProductsList />
        <Cart />
      </div>
    );
  }
}

export default App;
