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
}).add('should display all messages with slow times specified', () => {
  return (
    <div>
      <Conversation messages={[
        {
          message:'Paul',
          from: 'left',
          backColor: 'white',
          duration: 1500
        },
        {
          message:'Conor',
          from: 'left',
          backColor: 'white',
          duration: 1700
        },
        {
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'left',
          backColor: 'white',
          duration: 2500
        },
        {
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'right',
          backColor: '#dcf8c6',
          height: 10,
          duration: 1500
        },
        {
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'right',
          backColor: '#dcf8c6',
          duration: 1500
        },
        {
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'right',
          backColor: '#dcf8c6',
          duration: 1500
        }
      ]}/>
    </div>
  )
}).add('should display all messages', () => {
  return (
    <div>
      <Conversation messages={[
        {
          message:'Paul',
          from: 'left',
          backColor: 'white',
          duration: 500
        },
        {
          message:'Conor',
          from: 'left',
          backColor: 'white',
          duration: 700
        },
        {
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'left',
          backColor: 'white',
          duration: 500
        },
        {
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'right',
          backColor: '#dcf8c6',
          height: 10,
          duration: 500
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
}).add('should display all messages, with quick times specified', () => {
  return (
    <div>
      <Conversation messages={[
        {
          message:'Paul',
          from: 'left',
          backColor: 'white',
          duration: 500
        },
        {
          message:'Conor',
          from: 'left',
          backColor: 'white',
          duration: 1000
        },
        {
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'left',
          backColor: 'white',
          duration: 100
        },
        {
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'right',
          backColor: '#dcf8c6',
          height: 10,
          duration: 500
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
          duration: 200
        }
      ]}/>
    </div>
  )
}).add('should run the onDisplay functions after messages are displayed', () => {
  return (
    <div>
      <Conversation messages={[
        {
          id: 1,
          message:'Paul',
          from: 'left',
          backColor: 'white',
          duration: 1500,
          onDisplay: (id) => {console.log(id)}
        },
        {
          id: 2,
          message:'Conor',
          from: 'left',
          backColor: 'white',
          duration: 1700,
          onDisplay: (id) => {console.log(id)}
        },
        {
          id: 3,
          message:'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
          from: 'left',
          backColor: 'white',
          duration: 2500,
          onDisplay: (id) => {console.log(id)}
        }
      ]}/>
    </div>
  )
});
