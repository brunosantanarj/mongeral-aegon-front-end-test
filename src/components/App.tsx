import * as React from 'react';
import ProductsList from '../containers/ProductsList';
import '../styles/App.scss';
import Header from './Header';

class App extends React.Component {
  public render() {
    return (
      <div className="wrapper">
        <Header />
        <ProductsList />
      </div>
    );
  }
}

export default App;
