import React from 'react';
import ImageLoader from '../ImageLoader';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<ImageLoader /> shallow', () => { // eslint-disable-line no-undef
  it('renders a ImageLoader element with no images', () => { // eslint-disable-line no-undef
    const wrapper = shallow(<ImageLoader messages={[]} />);
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

    const wrapper = shallow(<ImageLoader messages={messages} />);
    expect(wrapper.find('img')).to.have.length(1);
  });
});
