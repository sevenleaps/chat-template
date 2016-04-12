import React from 'react';
import Conversation from '../src/Conversation/Conversation';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Conversation', module)
  .add('default view', () => {
    return (
      <div>
        <Conversation name={'Paul'}/>
      </div>
    );
  });
