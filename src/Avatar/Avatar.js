import React, {PropTypes} from 'react';
import AvatarUI from 'material-ui/lib/avatar';

const Avatar = ({order, src}) => {
  const avatarElement = (src) => {
    let element = '';
    if (typeof src === 'string' && src.length > 0) {
      element = <AvatarUI src={src} />;
    }
    return element;
  };

  const avatarStyle = {
    marginLeft: '1%',
    marginRight: '1%',
    order: order,
  };

  return (
    <div style={avatarStyle}>
      {avatarElement(src)}
    </div>
  );
};

Avatar.propTypes = {
  order: PropTypes.string,
  src: PropTypes.string,
};

export default Avatar;
