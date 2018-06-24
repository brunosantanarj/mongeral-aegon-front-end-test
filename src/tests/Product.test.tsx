import { shallow } from 'enzyme';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Product from '../components/Product';

Enzyme.configure({ adapter: new Adapter() });

const product = {
    "id": 3,
    "image": "http://rockntech.com.br/wp-content/uploads/2013/11/ideias-alternativas-de-produtos_6.jpg",
    "inventory": 2,
    "name": "Buzina para acordar criança", 
    "price": 15.46
};

it('check if Product component has class product', () => {
  const component = shallow(
    <Product 
        image={product.image}
        inventory={product.inventory}
        name={product.name}
        price={product.price}
        onAddProduct={() => window.console.log('add product')}
    />
  );
  expect(component.props().className).toEqual('product');
});