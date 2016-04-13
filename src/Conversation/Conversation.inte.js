import React from 'react';
import Conversation from './Conversation';
import {mount} from 'enzyme';
import {expect} from 'chai';

describe('<Conversation />', () => { // eslint-disable-line no-undef
  it('renders a Messages element with no messages', () => { // eslint-disable-line no-undef
    const wrapper = mount(<Conversation messages={[]} />);
    expect(wrapper.find('Messages')).to.have.length(1);
    expect(wrapper.find('Message')).to.have.length(0);
  });

  it('renders one Messages element with one message', () => { // eslint-disable-line no-undef
    const messages = [{
      message: 'Paul',
      from: 'left',
      backColor: 'white',
      duration: 200,
    }];

    const wrapper = mount(<Conversation messages={messages} />);
    expect(wrapper.find('Messages')).to.have.length(1);
    expect(wrapper.find('Message')).to.have.length(0);
  });
});
