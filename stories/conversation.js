import React from 'react';
import Conversation from '../src/Conversation/Conversation';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Conversation', module)
.add('should display no messages', () => {
  return (
    <div>
      <Conversation messages={[]}/>
    </div>
  );
}).add('should display all messages', () => {
  return (
    <div>
      <Conversation messages={[
        {
          message:'Paul',
          from: 'left',
          backColor: 'white',
          duration: 1000
        },
        {
          message:'Conor',
          from: 'left',
          backColor: 'white',
          duration: 2000
        },
        {
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'left',
          backColor: 'white',
          duration: 3000
        },
        {
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'right',
          backColor: '#dcf8c6',
          duration: 1000
        },
        {
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'right',
          backColor: '#dcf8c6',
          duration: 500
        },
        {
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'right',
          backColor: '#dcf8c6',
          duration: 500
        }
      ]}/>
    </div>
  )
});
