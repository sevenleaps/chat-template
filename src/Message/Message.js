import React, {PropTypes} from 'react';
import Avatar from '../Avatar/Avatar';
import MessageContent from '../MessageContent/MessageContent';

const Message = ({height, message}) => {
  const divContainerStyle = {
    width: '100%',
    clear: 'both',
    display: 'flex',
  };

  const orderOfAvatar = (from) => {
    let order = '1';
    if (from === 'right') {
      order = '3';
    }
    return order;
  };

  return (
    <div style={divContainerStyle}>
      <Avatar order={orderOfAvatar(message.from)} src={message.avatar} />
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
    textColor: PropTypes.string,
  }),
};

export default Message;
