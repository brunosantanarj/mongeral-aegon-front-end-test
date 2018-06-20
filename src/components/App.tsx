import * as React from 'react';
import '../styles/App.scss';
import ProductList from './ProductsList';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ProductList />
      </div>
    );
  }
}

export default App;
