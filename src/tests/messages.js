import React from 'react';
import Messages from '../Messages';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<Messages /> shallow', () => { // eslint-disable-line no-undef
  it('renders a Messages element with no messages', () => { // eslint-disable-line no-undef
    const wrapper = shallow(<Messages messages={[]} />);
    expect(wrapper.find('Message')).to.have.length(0);
  });

  it('renders one Messages element with one message', () => { // eslint-disable-line no-undef
    const messages = [
      {
        message: 'Paul',
        inbound: true,
        backColor: 'white',
        duration: 200,
      },
    ];

    const wrapper = shallow(<Messages messages={messages} />);
    expect(wrapper.find('Message')).to.have.length(1);
  });
});
