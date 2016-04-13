import React from 'react';
import MessageContent from './MessageContent';
import {mount} from 'enzyme';
import {expect} from 'chai';

describe('<MessageContent />', () => { // eslint-disable-line no-undef
  it('renders a MessageContent element with no messages', () => { // eslint-disable-line no-undef
    const wrapper = mount(<MessageContent height={300} message={{}} />);
    expect(wrapper.find('span')).to.have.length(1);
  });

  it('renders one MessageContent element with one message', () => { // eslint-disable-line no-undef
    const messageUsed = {
      message: 'Test',
      from: 'right',
      backColor: 'lightgreen',
      src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
    };

    const wrapper = mount(<MessageContent height={300} message={messageUsed} />);
    expect(wrapper.find('span')).to.have.length(1);
  });
});
