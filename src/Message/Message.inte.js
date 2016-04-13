import React from 'react';
import {sinon} from 'sinon';
import Message from './Message';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('<Message />', () => {
  it('renders a Message element with no message', () => {
    const wrapper = mount(<Message message={{}} />);
    expect(wrapper.find('Message')).to.have.length(1);
  });

  it('renders a Message element with one message', () => {
    const wrapper = mount(<Message message={
      {
        message:'Paul',
        from: 'left',
        backColor: 'white',
        duration: 200
      }
    } />);
    expect(wrapper.find('Message')).to.have.length(1);
  });
});
