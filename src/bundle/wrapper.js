import {Conversation} from '../index';
import ReactDOM from 'react-dom';
import React from 'react';

const ShowChatTemplate = (messages, element, delay=1, height=300) => {
  ReactDOM.render(<Conversation delay={delay} height={height} messages={messages} />,
    element);
};

module.exports = ShowChatTemplate;
