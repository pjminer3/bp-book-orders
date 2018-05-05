import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import App from '../../app/client/src/components/app.jsx';
import Header from '../../app/client/src/components/header.jsx';
import Title from '../../app/client/src/components/title';
import Data from '../../app/client/src/components/data';

configure({ adapter: new Adapter() });

// test('Hello World component renders properly', () => {
//   const app = shallow(<App />);
//   expect(app.text()).toEqual('Hello World!');
// });

test('App component renders with proper child components: Header, Title, & Data', () => {
  const app = shallow(<App />);
  expect(app.find(Header).length).toEqual(1);
  expect(app.find(Title).length).toEqual(1);
  expect(app.find(Data).length).toEqual(1);
});

