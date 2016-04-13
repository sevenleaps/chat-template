import React from 'react';
import Message from './Message';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('<Message />', () => { // eslint-disable-line no-undef
  it('renders a Message element with no message', () => { // eslint-disable-line no-undef
    const wrapper = shallow(<Message message={{}} />);
    expect(wrapper.find('Avatar')).to.have.length(1);
    expect(wrapper.find('MessageContent')).to.have.length(1);
  });

  it('renders a Message element with one message', () => { // eslint-disable-line no-undef
    const messageUsed = {
      message: 'Test',
      from: 'right',
      backColor: 'lightgreen',
      src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
    };

    const wrapper = shallow(<Message height={300} message={messageUsed} />);
    expect(wrapper.find('Avatar')).to.have.length(1);
    expect(wrapper.find('MessageContent')).to.have.length(1);
  });
});
