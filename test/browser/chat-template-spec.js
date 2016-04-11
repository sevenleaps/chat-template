import React from 'react';
import Conversation from 'Conversation';
import TestUtils from 'react-addons-test-utils';

describe('Conversation', () => {
  it('should display default text by default', () => {
    const render = TestUtils.renderIntoDocument(<Conversation />);
    const p = TestUtils.scryRenderedDOMComponentsWithTag(render, 'p');
    expect(p[0].textContent).to.equal('Hello World!');
  });
});
