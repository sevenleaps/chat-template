import React from 'react';
import {sinon} from 'sinon';
import Avatar from './Avatar';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('<Avatar />', () => {
  it('renders an Avatar element with no src', () => {
    const wrapper = mount(<Avatar />);
    expect(wrapper.find('Avatar')).to.have.length(0);
  });

  it('renders an Avatar element with one message', () => {
    const wrapper = mount(<Avatar src={'test'} from={'left'} />);
    expect(wrapper.find('Avatar')).to.have.length(1);
  });
});
