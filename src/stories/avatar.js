import React from 'react';
import Avatar from '../Avatar';
import { storiesOf } from '@kadira/storybook';

storiesOf('Avatar', module)
.add('Avatar displayed', () => {
  return (
    <div>
      <Avatar src={'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif'} />
    </div>
  );
})
.add('Avatar configured with an order in a Flexbox', () => {
  const styles = {
    container: {
      order: 1,
    },
  };

  return (
    <div>
      <Avatar src={'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif'} styles={styles} />
    </div>
  );
});
