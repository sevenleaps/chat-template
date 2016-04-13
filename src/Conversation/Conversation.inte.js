import React from 'react';
import {sinon} from 'sinon';
import Conversation from './Conversation';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('<Conversation />', () => {
  it('renders a Messages element with no messages', () => {
    const wrapper = mount(<Conversation messages={[]} />);
    expect(wrapper.find('Messages')).to.have.length(1);
    expect(wrapper.find('Message')).to.have.length(0);
  });

  it('renders one Messages element with one message', () => {
    const wrapper = mount(<Conversation messages={[
      {
        message:'Paul',
        from: 'left',
        backColor: 'white',
        duration: 200
      }
    ]} />);
    expect(wrapper.find('Messages')).to.have.length(1);
    expect(wrapper.find('Message')).to.have.length(0);
  });
});
