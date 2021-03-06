import React from 'react';
import MessageContent from '../MessageContent';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<MessageContent /> shallow', () => { // eslint-disable-line no-undef
  it('renders a MessageContent element with no messages', () => { // eslint-disable-line no-undef
    const wrapper = shallow(<MessageContent height={300} message={{}} />);
    expect(wrapper.find('span')).to.have.length(1);
  });

  it('renders one MessageContent element with one message', () => { // eslint-disable-line no-undef
    const message = {
      message: 'Test',
      inbound: false,
      backColor: 'lightgreen',
      src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
    };

    const wrapper = shallow(<MessageContent height={300} message={message} />);
    expect(wrapper.find('span')).to.have.length(1);
  });
});
