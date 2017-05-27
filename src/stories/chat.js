import React from 'react';
import Chat from '../Chat';
import { storiesOf } from '@kadira/storybook';

storiesOf('Chat', module)
.add('Chat configured to end at the last message and allows the user to add messages', () => {
  const messagesForConversation = [
    {
      message: 'Press enter to write a message',
      inbound: true,
      backColor: 'white',
      duration: 1000,
    },
  ];
  const historicMessages = [
    {
      message: 'Type in the input box below',
      inbound: true,
      backColor: 'white',
    },
  ];
  return (
    <div>
      <Chat historicMessages={historicMessages} messages={messagesForConversation} turnOffLoop />
    </div>
  );
})
.add('Chat configured styles and ends at the last message and allows the user to add messages', () => {
  const messagesForConversation = [
    {
      message: 'Press enter to write a message',
      inbound: true,
      backColor: 'white',
      duration: 1000,
    },
  ];
  const historicMessages = [
    {
      message: 'Type in the input box below',
      inbound: true,
      backColor: 'white',
    },
  ];
  const styles = {
    chat: {
      height: '480px',
    },
    conversation: {
      height: '400px',
    },
    container: {
      bottom: '1%',
    },
    messages: {
      height: '99%',
    },
    noTyping: {
      height: '2%',
    },
    textInputContainer: {
      height: '80px',
    },
    textInput: {
      fontSize: '2em',
    },
  };
  return (
    <div>
      <Chat historicMessages={historicMessages} messages={messagesForConversation} turnOffLoop styles={styles} />
    </div>
  );
})
.add('Chat configured styles and ends at the last message and allows the user to add and scroll messages', () => {
  const messagesForConversation = [
    {
      type: 'typing',
      duration: 500,
      inbound: true,
    },
    {
      message: 'Press enter to write a message',
      inbound: true,
      backColor: 'white',
      duration: 1000,
    },
  ];
  const historicMessages = [
    {
      message: 'Type in the input box below',
      inbound: true,
      backColor: 'white',
    },
  ];
  return (
    <div>
      <Chat historicMessages={historicMessages} messages={messagesForConversation} turnOffLoop isScrollable />
    </div>
  );
});
