import React from 'react';
import MessageContent from '../src/MessageContent/MessageContent';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('MessageContent', module)
.add('should display no message', () => {
  var messageUsed = {
    message: '',
    from: 'left',
    backColor: 'white'
  };
  return (
    <div>
      <MessageContent height={300} message={messageUsed}/>
    </div>
  );
}).add('should display on the left', () => {
  var messageUsed = {
    message: 'Test',
    from: 'left',
    backColor: 'white'
  };
  return (
    <div>
      <MessageContent height={300} message={messageUsed}/>
    </div>
  );
}).add('should display on the right', () => {
  var messageUsed = {
    message: 'Test',
    from: 'right',
    backColor: 'lightgreen'
  };
  return (
    <div>
      <MessageContent height={300} message={messageUsed}/>
    </div>
  )
}).add('should display on the left with an image', () => {
  var messageUsed = {
    message: 'Test',
    from: 'left',
    backColor: 'white',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif'
  };
  return (
    <div>
      <MessageContent height={300} message={messageUsed}/>
    </div>
  );
}).add('should display on the right with an image', () => {
  var messageUsed = {
    message: 'Test',
    from: 'right',
    backColor: 'lightgreen',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif'
  };
  return (
    <div>
      <MessageContent height={300} message={messageUsed}/>
    </div>
  )
}).add('should display on the left with an image and a long message', () => {
  var messageUsed = {
    message: `This is a really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    long message!`,
    from: 'left',
    backColor: 'white',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif'
  };
  return (
    <div>
      <MessageContent height={300} message={messageUsed}/>
    </div>
  );
}).add('should display on the right with an image and a long message', () => {
  var messageUsed = {
    message: `This is a really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    long message!`,
    from: 'right',
    backColor: 'lightgreen',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif'
  };
  return (
    <div>
      <MessageContent height={300} message={messageUsed}/>
    </div>
  )
});
