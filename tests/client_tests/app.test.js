import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import App from '../../app/client/src/components/app';

configure({ adapter: new Adapter() });

test('Hello World component renders properly', () => {
  const app = shallow(<App />);
  expect(app.text()).toEqual('Hello World!');
});