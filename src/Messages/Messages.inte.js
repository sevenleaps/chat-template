import React from 'react';
import {sinon} from 'sinon';
import Messages from './Messages';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('<Messages />', () => {
  it('renders a Messages element with no messages', () => {
    const wrapper = mount(<Messages messages={[]} />);
    expect(wrapper.find('Messages')).to.have.length(1);
    expect(wrapper.find('Message')).to.have.length(0);
  });

  it('renders one Messages element with one message', () => {
    const wrapper = mount(<Messages messages={[
      {
        message:'Paul',
        from: 'left',
        backColor: 'white',
        duration: 200
      }
    ]} />);
    expect(wrapper.find('Messages')).to.have.length(1);
    expect(wrapper.find('Message')).to.have.length(1);
  });
});
