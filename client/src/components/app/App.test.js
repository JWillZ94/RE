import React from 'react';
import { mount, shallow, render } from 'enzyme';

import App from './App';

describe('App', () => {
  it('should render', () => {
    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });
});
