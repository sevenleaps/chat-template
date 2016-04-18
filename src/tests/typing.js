import React from 'react';
import Typing from '../Typing';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<Typing /> shalllow', () => { // eslint-disable-line no-undef
  it('renders Typing to have 4 divs', () => { // eslint-disable-line no-undef
    const wrapper = shallow(<Typing />);
    expect(wrapper.find('div')).to.have.length(4);
  });
});
