import React from 'react';
import Conversation from '../Conversation';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('<Conversation /> shallow', () => { // eslint-disable-line no-undef
  it('renders a Messages element with no messages', () => { // eslint-disable-line no-undef
    const wrapper = shallow(<Conversation messages={[]} />);
    expect(wrapper.find('Messages')).to.have.length(1);
    expect(wrapper.find('Message')).to.have.length(0);
  });

  it('renders one Messages element with one message', () => { // eslint-disable-line no-undef
    const messages = [
      {
        message: 'Paul',
        from: 'left',
        backColor: 'white',
        duration: 200,
      },
    ];

    const wrapper = shallow(<Conversation messages={messages} />);
    expect(wrapper.find('Messages')).to.have.length(1);
    expect(wrapper.find('Message')).to.have.length(0);
  });
});

describe('<Conversation /> mount', () => { // eslint-disable-line no-undef
  it('renders a Messages element with no messages', () => { // eslint-disable-line no-undef
    const wrapper = mount(<Conversation messages={[]} />, {
      attachTo: document.body,
    });
    expect(wrapper.find('Messages')).to.have.length(1);
    expect(wrapper.find('Message')).to.have.length(0);
    wrapper.detach();
  });

  it('renders one Messages element with one message', () => { // eslint-disable-line no-undef
    const messages = [{
      message: 'Paul',
      from: 'left',
      backColor: 'white',
      duration: 200,
    }];

    const wrapper = mount(<Conversation height={300} messages={messages} />, {
      attachTo: document.body,
    });
    expect(wrapper.find('Messages')).to.have.length(1);
    expect(wrapper.find('Message')).to.have.length(0);
    wrapper.detach();
  });
});
