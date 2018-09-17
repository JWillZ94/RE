import React from 'react';
import { mount, shallow, render } from 'enzyme';

import Home from './Home';

describe('Home', () => {
  it('should render', () => {
    const component = render(<Home />);

    expect(component).toMatchSnapshot();
  });
});
