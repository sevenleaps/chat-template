import React from 'react';
import {sinon} from 'sinon';
import Message from './Message';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('<Message />', () => {
  it('renders a Message element with no message', () => {
    const wrapper = shallow(<Message message={{}} />);
    expect(wrapper.find('div')).to.have.length(3);
  });

  it('renders a Message element with one message', () => {
    const wrapper = shallow(<Message message={
      {
        message:'Paul',
        from: 'left',
        backColor: 'white',
        duration: 200
      }
    } />);
    expect(wrapper.find('div')).to.have.length(3);
  });
});
