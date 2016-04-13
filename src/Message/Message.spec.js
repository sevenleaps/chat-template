import React from 'react';
import Message from './Message';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('<Message />', () => { // eslint-disable-line no-undef
  it('renders a Message element with no message', () => { // eslint-disable-line no-undef
    const wrapper = shallow(<Message message={{}} />);
    expect(wrapper.find('div')).to.have.length(3);
  });

  it('renders a Message element with one message', () => { // eslint-disable-line no-undef
    const message = {
      message: 'Paul',
      from: 'left',
      backColor: 'white',
      duration: 200,
    };

    const wrapper = shallow(<Message message={message} />);
    expect(wrapper.find('div')).to.have.length(3);
  });
});
