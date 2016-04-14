import React, {PropTypes} from 'react';
import AvatarUI from 'material-ui/lib/avatar';

const Avatar = ({from, src}) => {
  const avatarElement = (src) => {
    let element = '';
    if (typeof src === 'string' && src.length > 0) {
      element = <AvatarUI src={src} />;
    }
    return element;
  };

  const avatarStyle = {
    display: 'inline',
    float: from || 'left',
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '2%',
  };

  return (
    <div style={avatarStyle}>
      {avatarElement(src)}
    </div>
  );
};

Avatar.propTypes = {
  from: PropTypes.string,
  src: PropTypes.string,
};

export default Avatar;
