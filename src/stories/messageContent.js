import React from 'react';
import MessageContent from '../MessageContent';
import { storiesOf } from '@kadira/storybook';

storiesOf('MessageContent', module)
.add('MessageContent displays on the left', () => {
  const message = {
    message: 'Test',
    inbound: true,
    backColor: 'white',
  };
  return (
    <div>
      <MessageContent height={300} message={message} />
    </div>
  );
})
.add('MessageContent displays on the right', () => {
  const message = {
    message: 'Test',
    inbound: false,
    backColor: 'lightgreen',
  };
  return (
    <div>
      <MessageContent height={300} message={message} />
    </div>
  );
})
.add('MessageContent displays on the left with an image', () => {
  const message = {
    message: 'Test',
    inbound: true,
    backColor: 'white',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
  };
  return (
    <div>
      <MessageContent height={300} message={message} />
    </div>
  );
})
.add('MessageContent displays on the right with an image', () => {
  const message = {
    message: 'Test',
    inbound: false,
    backColor: 'lightgreen',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
  };
  return (
    <div>
      <MessageContent height={300} message={message} />
    </div>
  );
})
.add('MessageContent displays on the left with an image and a long message', () => {
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
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
  };
  return (
    <div>
      <MessageContent height={300} message={message} />
    </div>
  );
})
.add('MessageContent displays on the right with an image and a long message', () => {
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
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
  };
  return (
    <div>
      <MessageContent height={300} message={message} />
    </div>
  );
})
.add('MessageContent displays with white text', () => {
  const message = {
    message: 'I should be white',
    inbound: false,
    backColor: 'lightgreen',
    textColor: 'white',
  };
  return (
    <div>
      <MessageContent height={300} message={message} />
    </div>
  );
});
