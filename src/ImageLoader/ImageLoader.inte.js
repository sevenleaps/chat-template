import React from 'react';
import ImageLoader from './ImageLoader';
import {mount} from 'enzyme';
import {expect} from 'chai';

describe('<ImageLoader />', () => { // eslint-disable-line no-undef
  it('renders a ImageLoader element with no images', () => { // eslint-disable-line no-undef
    const wrapper = mount(<ImageLoader messages={[]} />);
    expect(wrapper.find('img')).to.have.length(0);
  });

  it('renders one ImageLoader element with one image', () => { // eslint-disable-line no-undef
    const messages = [
      {
        message: 'Paul',
        src: 'test',
        from: 'left',
        backColor: 'white',
        duration: 200,
      },
    ];

    const wrapper = mount(<ImageLoader messages={messages} />);
    expect(wrapper.find('img')).to.have.length(1);
  });
});
