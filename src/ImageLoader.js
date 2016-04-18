import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import assignDeep from 'object-assign-deep';

const defaultStyle = {
  container: {
    display: 'none',
  },
};

const images = (messages) => {
  return messages.map((message, i) => {
    return message.src && <img role="presentation" key={i} src={message.src} width={'1px'} height={'1px'} />;
  });
};

const ImageLoader = ({ messages, styles }) => {
  const style = StyleSheet.create(assignDeep({}, defaultStyle, styles));

  return (
    <div className={css(style.container)}>
      {images(messages)}
    </div>
  );
};


ImageLoader.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    })
  ).isRequired,
  styles: PropTypes.object,
};

export default ImageLoader;
