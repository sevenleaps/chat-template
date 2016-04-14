import React from 'react';
import Avatar from './Avatar';
import {mount} from 'enzyme';
import {expect} from 'chai';

describe('<Avatar />', () => { // eslint-disable-line no-undef
  it('renders an Avatar element with no src', () => { // eslint-disable-line no-undef
    const wrapper = mount(<Avatar />);
    expect(wrapper.find('Avatar')).to.have.length(1);
  });

  it('renders an Avatar element with one message', () => { // eslint-disable-line no-undef
    const wrapper = mount(<Avatar src={'test'} from={'left'} />);
    expect(wrapper.find('Avatar')).to.have.length(2);
  });
});
