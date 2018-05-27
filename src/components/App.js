import React, { Fragment, Component } from 'react';

import Header from './Header';
import Hero from './Hero';
import Shoplist from './Shoplist';
import Footer from './Footer';
import Carrinho from './Carrinho';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Shoplist />
        <Footer />
        <Carrinho />
      </Fragment>
    );
  }
}

export default App;
