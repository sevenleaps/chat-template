import React from 'react';
import {sinon} from 'sinon';
import Conversation from './Conversation';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('<Conversation />', () => {
  it('should render ', () => {
    const wrapper = mount(<Conversation />);
    expect(wrapper.find('p')).to.have.length(1);
    expect(wrapper.find('p').text()).to.equal('Hello World!');
  });
});
