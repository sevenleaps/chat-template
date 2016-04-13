import React, {PropTypes} from 'react';
import Avatar from '../Avatar/Avatar';
import MessageContent from '../MessageContent/MessageContent';

const Message = ({height, message}) => {
  const divContainerStyle = {
    width: '100%',
    clear: 'both',
  };

  return (
    <div style={divContainerStyle}>
      <Avatar src={message.avatar} from={message.from} />
      <MessageContent height={height} message={message} />
    </div>
  );
};

Message.propTypes = {
  height: PropTypes.number,
  message: PropTypes.shape({
    message: PropTypes.string,
    src: PropTypes.string,
    from: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    backColor: PropTypes.string.isRequired,
  }),
};

export default Message;
