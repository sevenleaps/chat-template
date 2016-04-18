import React from 'react';
import Message from '../Message';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<Message /> shallow', () => { // eslint-disable-line no-undef
  it('renders a Message element with one message', () => { // eslint-disable-line no-undef
    const message = {
      message: 'Test',
      inbound: false,
      backColor: 'lightgreen',
      src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
    };

    const wrapper = shallow(<Message height={300} message={message} />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('MessageContent')).to.have.length(1);
  });

  it('renders a Message element with one message with an Avatar', () => { // eslint-disable-line no-undef
    const message = {
      avatar: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
      message: 'Test',
      inbound: false,
      backColor: 'lightgreen',
    };

    const wrapper = shallow(<Message height={300} message={message} />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('Avatar')).to.have.length(1);
    expect(wrapper.find('MessageContent')).to.have.length(1);
  });
});
