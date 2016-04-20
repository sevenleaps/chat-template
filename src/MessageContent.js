import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import assignDeep from 'object-assign-deep';

const defaultStyle = {
  contentBase: {
    backgroundColor: 'white',
    maxWidth: '60%',
    wordWrap: 'break-word',
    color: '#262626',
    borderRadius: '10px',
    padding: '2%',
    borderColor: 'grey',
    boxShadow: '1px 5px 10px rgba(0,0,0,.13)',
    marginBottom: '2%',
    order: '2',
  },
  contentRight: {
    marginLeft: 'auto',
  },
  image: {
    width: '100%',
  },
  imageContainer: {
    minHeight: '100px',
    height: '100px',
    width: '100%',
    margin: '0px',
  },
};

const MessageContent = ({ height, message, styles }) => {
  const style = StyleSheet.create(assignDeep({}, defaultStyle, {
    contentBase: {
      color: message.textColor || defaultStyle.contentBase.color,
      backgroundColor: message.backColor || defaultStyle.contentBase.backgroundColor,
    },
  }, styles || {}));

  const imageContainer = (src) => {
    const heightNeeded = (height || 0) / 3;
    return src && <div className={css(style.imageContainer)}><img src={src} role="presentation" height={`${heightNeeded}px`} className={css(style.image)} /></div>;
  };

  return (
    <div className={css(style.contentBase, message.inbound && style.contentRight)} >
      <span >{message.message}</span>
      {imageContainer(message.src, height)}
    </div>
  );
};

MessageContent.propTypes = {
  height: PropTypes.number,
  message: PropTypes.shape({
    message: PropTypes.string,
    src: PropTypes.string,
    inbound: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    backColor: PropTypes.string.isRequired,
    textColor: PropTypes.string,
  }).isRequired,
  styles: PropTypes.object,
};

export default MessageContent;
