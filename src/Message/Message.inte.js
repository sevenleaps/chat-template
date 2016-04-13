import React from 'react';
import Message from './Message';
import {mount} from 'enzyme';
import {expect} from 'chai';

describe('<Message />', () => { // eslint-disable-line no-undef
  it('renders a Message element with no message', () => { // eslint-disable-line no-undef
    const wrapper = mount(<Message message={{}} />);
    expect(wrapper.find('Message')).to.have.length(1);
  });

  it('renders a Message element with one message', () => { // eslint-disable-line no-undef
    const message = {
      message: 'Paul',
      from: 'left',
      backColor: 'white',
      duration: 200,
    };

    const wrapper = mount(<Message message={message} />);
    expect(wrapper.find('Message')).to.have.length(1);
  });
});
