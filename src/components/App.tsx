import * as React from 'react';
import '../styles/App.scss';
import Header from './Header';
import ProductList from './ProductsList';

class App extends React.Component {
  public render() {
    return (
      <div className="wrapper">
        <Header />
        <ProductList />
      </div>
    );
  }
}

export default App;
