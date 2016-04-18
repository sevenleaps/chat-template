import React from 'react';
import Messages from '../Messages';
import { storiesOf } from '@kadira/storybook';

storiesOf('Messages', module)
.add('Messages display on the left', () => {
  const message = {
    message: 'Test',
    inbound: true,
    backColor: 'white',
  };
  const message2 = {
    message: 'Test the left side',
    inbound: true,
    backColor: 'white',
  };
  const messages = [message, message2];
  return (
    <div>
      <Messages messages={messages} />
    </div>
  );
}).add('Messages display messages on both sides', () => {
  const message = {
    message: 'Test',
    inbound: true,
    backColor: 'white',
  };
  const message2 = {
    message: 'Test the right side',
    inbound: false,
    backColor: 'lightgreen',
  };
  const messages = [message, message2];
  return (
    <div>
      <Messages messages={messages} />
    </div>
  );
}).add('Messages display long messages on both sides', () => {
  const message = {
    message: `This is a really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    long message!`,
    inbound: true,
    backColor: 'white',
  };
  const message2 = {
    message: `Why would you write such a really really really really really
    really really really really really really really really really really
    really really really really really long message?!`,
    inbound: false,
    backColor: 'lightgreen',
  };
  const message3 = {
    message: 'I have no idea',
    inbound: true,
    backColor: 'white',
  };
  const messages = [message, message2, message3];
  return (
    <div>
      <Messages height={300} messages={messages} />
    </div>
  );
}).add('Messages display long messages on both sides with images and avatars', () => {
  const message = {
    message: `This is a really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    long message!`,
    inbound: true,
    backColor: 'white',
    avatar: 'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
  };
  const message2 = {
    message: `Why would you write such a really really really really really
    really really really really really really really really really really
    really really really really really long message?!`,
    inbound: false,
    backColor: 'lightgreen',
    avatar: 'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
  };
  const message3 = {
    message: 'I have no idea',
    inbound: true,
    backColor: 'white',
    avatar: 'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
  };
  const messages = [message, message2, message3];
  return (
    <div>
      <Messages height={300} messages={messages} />
    </div>
  );
});
