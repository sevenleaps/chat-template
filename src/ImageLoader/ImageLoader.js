import React, {PropTypes} from 'react';

class ImageLoader extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div style={imageDivStyle}>
        {imageElement(this.props.messages)}
      </div>
    );
  }
}

const imageDivStyle = {
  display: 'none',
};

const imageElement = (messages) => {
  return messages.map((message) => {
    let image = '';
    if (typeof message.src === 'string') {
      image =
        <img src={message.src} width={'1px'} height={'1px'} />;
    }
    return image;
  });
};

ImageLoader.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    }),
  ).isRequired,
};

export default ImageLoader;
