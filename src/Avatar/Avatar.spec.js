import React from 'react';
import Avatar from './Avatar';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('<Avatar />', () => { // eslint-disable-line no-undef
  it('renders an Avatar element with no src', () => { // eslint-disable-line no-undef
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('Avatar')).to.have.length(0);
  });

  it('renders an Avatar element with one message', () => { // eslint-disable-line no-undef
    const wrapper = shallow(<Avatar src={'test'} order={'1'} />);
    expect(wrapper.find('Avatar')).to.have.length(1);
  });
});
