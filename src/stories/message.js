import React from 'react';
import Message from '../Message';
import { storiesOf } from '@kadira/storybook';

storiesOf('Message', module)
.add('Message displays on the left', () => {
  const message = {
    message: 'Test',
    inbound: true,
    backColor: 'white',
  };
  return (
    <div>
      <Message height={300} message={message} />
    </div>
  );
}).add('Message displays on the right', () => {
  const message = {
    message: 'Test',
    inbound: false,
    backColor: 'lightgreen',
  };
  return (
    <div>
      <Message height={300} message={message} />
    </div>
  );
}).add('Message displays on the left with image', () => {
  const message = {
    message: 'Test',
    inbound: true,
    backColor: 'white',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
  };
  return (
    <div>
      <Message height={300} message={message} />
    </div>
  );
}).add('Message displays on the left with an image', () => {
  const message = {
    message: 'Test',
    inbound: false,
    backColor: 'lightgreen',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
  };

  return (
    <div>
      <Message height={300} message={message} />
    </div>
  );
}).add('Message displays on the left with an image and an avatar', () => {
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
  return (
    <div>
      <Message height={300} message={message} />
    </div>
  );
}).add('Message displays on the right with an image and an avatar', () => {
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
    inbound: false,
    backColor: 'lightgreen',
    avatar: 'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
  };
  return (
    <div>
      <Message height={300} message={message} />
    </div>
  );
});
