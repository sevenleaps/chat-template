import React from 'react';
import {sinon} from 'sinon';
import MessageContent from './MessageContent';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('<Messages />', () => {
  it('renders a Messages element with no messages', () => {
    const wrapper = shallow(<MessageContent height={300} messages={[]} />);
    expect(wrapper.find('MessageContent')).to.have.length(1);
  });

  it('renders one Messages element with one message', () => {
    const wrapper = shallow(<MessageContent height={300} messages={[
      {
        message:'Paul',
        from: 'left',
        backColor: 'white',
        duration: 200
      }
    ]} />);
    expect(wrapper.find('MessageContent')).to.have.length(1);
  });
});
