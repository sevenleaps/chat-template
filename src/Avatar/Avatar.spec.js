import React from 'react';
import {sinon} from 'sinon';
import Avatar from './Avatar';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('<Avatar />', () => {
  it('renders an Avatar element with no src', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('Avatar')).to.have.length(0);
  });

  it('renders an Avatar element with one message', () => {
    const wrapper = shallow(<Avatar src={'test'} from={'left'} />);
    expect(wrapper.find('Avatar')).to.have.length(1);
  });
});
