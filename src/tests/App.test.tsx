import { shallow } from 'enzyme';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import App from '../components/App';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component).toBeDefined();
});