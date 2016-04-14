import React from 'react';
import Messages from '../src/Messages/Messages';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Messages', module)
.add('should display no messages', () => {
  var messages = [];
  return (
    <div>
      <Messages messages={messages}/>
    </div>
  )
}).add('should display on the left', () => {
  var message = {
    message: 'Test',
    from: 'left',
    backColor: 'white'
  };
  var message2 = {
    message: 'Test the left side',
    from: 'left',
    backColor: 'white'
  };
  var messages = [message, message2];
  return (
    <div>
      <Messages messages={messages}/>
    </div>
  )
}).add('should display conversation on both sides', () => {
  var message = {
    message: 'Test',
    from: 'left',
    backColor: 'white'
  };
  var message2 = {
    message: 'Test the right side',
    from: 'right',
    backColor: 'lightgreen'
  };
  var messages = [message, message2];
  return (
    <div>
      <Messages messages={messages}/>
    </div>
  )
}).add('should display long conversation on both sides', () => {
  var message = {
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
    backColor: 'white'
  };
  var message2 = {
    message: `Why would you write such a really really really really really
    really really really really really really really really really really
    really really really really really long message?!`,
    from: 'right',
    backColor: 'lightgreen'
  };
  var message3 = {
    message: 'I have no idea',
    from: 'left',
    backColor: 'white'
  };
  var messages = [message, message2, message3];
  return (
    <div>
      <Messages height={300} messages={messages}/>
    </div>
  )
}).add('should display long conversation on both sides with images and avatars', () => {
  var message = {
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
    avatar: 'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif'
  };
  var message2 = {
    message: `Why would you write such a really really really really really
    really really really really really really really really really really
    really really really really really long message?!`,
    from: 'right',
    backColor: 'lightgreen',
    avatar: 'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif'
  };
  var message3 = {
    message: 'I have no idea',
    from: 'left',
    backColor: 'white',
    avatar: 'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif'
  };
  var messages = [message, message2, message3];
  return (
    <div>
      <Messages height={300} messages={messages}/>
    </div>
  )
});
