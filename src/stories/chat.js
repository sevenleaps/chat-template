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
});
