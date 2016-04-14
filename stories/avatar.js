import React from 'react';
import Avatar from '../src/Avatar/Avatar';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Avatar', module)
.add('should display no Avatar', () => {
  return (
    <div>
      <Avatar />
    </div>
  );
}).add('should display Avatar on the left', () => {
  return (
    <div>
      <Avatar src={'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif'}
        from={'left'}/>
    </div>
  );
}).add('should display Avatar on the right', () => {
  return (
    <div>
      <Avatar src={'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif'}
        from={'right'}/>
    </div>
  );
});
