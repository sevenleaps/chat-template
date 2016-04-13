import React from 'react';
import Message from '../src/Message/Message';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Message', module)
.add('should display no message', () => {
  var messageUsed = {
    message: '',
    from: 'left',
    backColor: 'white'
  };
  return (
    <div>
      <Message message={messageUsed}/>
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
      <Message message={messageUsed}/>
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
      <Message message={messageUsed}/>
    </div>
  )
});
