import React from 'react';
import Avatar from '../Avatar';
import { storiesOf } from '@kadira/storybook';

storiesOf('Avatar', module)
.add('should display Avatar ', () => {
  return (
    <div>
      <Avatar src={'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif'} />
    </div>
  );
})
.add('should display Avatar in order ', () => {
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
