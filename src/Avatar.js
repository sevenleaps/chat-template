import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import assignDeep from 'object-assign-deep';
import AvatarUI from 'material-ui/lib/avatar';

const defaultStyle = {
  container: {
    marginLeft: '1%',
    marginRight: '1%',
    order: 3,
  },
};

const Avatar = ({ styles, src }) => {
  const override = StyleSheet.create(assignDeep({}, defaultStyle, styles));

  return (
    <div className={css(override.container)}>
      <AvatarUI src={src} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  styles: PropTypes.object,
};

export default Avatar;
