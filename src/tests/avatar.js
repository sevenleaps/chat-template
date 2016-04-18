import React from 'react';
import Avatar from '../Avatar';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('<Avatar /> shallow', () => { // eslint-disable-line no-undef
  it('renders an Avatar element with one message', () => { // eslint-disable-line no-undef
    const wrapper = shallow(<Avatar src={'test'} order={'1'} />);
    expect(wrapper.find('Avatar')).to.have.length(1);
  });
});

describe('<Avatar /> mount', () => { // eslint-disable-line no-undef
  it('renders an Avatar element with one message', () => { // eslint-disable-line no-undef
    const wrapper = mount(<Avatar src={'test'} order={'1'} />);
    expect(wrapper.find('Avatar')).to.have.length(2);
  });
});
