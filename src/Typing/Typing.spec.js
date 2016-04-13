import React from 'react';
import {sinon} from 'sinon';
import Typing from './Typing';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('<Typing />', () => {
  it('renders Typing to have 4 divs', () => {
    const wrapper = shallow(<Typing />);
    expect(wrapper.find('div')).to.have.length(4);
  });
});
