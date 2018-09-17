import React from 'react';
import { mount, shallow, render } from 'enzyme';

import MainNav from './MainNav';

describe('MainNav', () => {
  it('should render', () => {
    const component = render(<MainNav />);

    expect(component).toMatchSnapshot();
  });
});
