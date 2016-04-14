import React, {PropTypes} from 'react';

const MessageContent = ({height, message}) => {
  let divStyle = {
    backgroundColor: message.backColor,
    maxWidth: '60%',
    wordWrap: 'break-word',
    color: '#262626',
    borderRadius: '10px',
    padding: '2%',
    borderColor: 'grey',
    boxShadow: '1px 5px 10px rgba(0,0,0,.13)',
    marginBottom: '2%',
    order: '2',
  };

  if (message.from === 'right') {
    divStyle.marginLeft = 'auto';
  }

  const imageStyles = {
    width: '100%',
  };

  const imageDivStyle = {
    minHeight: '100px',
    height: '100px',
    width: '100%',
    margin: '0px',
  };

  const imageElement = (src, height) => {
    let image = '';
    let heightNeeded = 0;
    if (height > 0) {
      heightNeeded = height / 3;
    }
    if (typeof src === 'string') {
      image = <div style={imageDivStyle}><img src={src} height={`${heightNeeded}px`} style={imageStyles} /></div>;
    }
    return image;
  };

  return (
    <div style={divStyle}>
      <span>{message.message}</span>
      {imageElement(message.src, height)}
    </div>
  );
};

MessageContent.propTypes = {
  height: PropTypes.number,
  message: PropTypes.shape({
    message: PropTypes.string,
    src: PropTypes.string,
    from: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    backColor: PropTypes.string.isRequired,
  }),
};

export default MessageContent;
