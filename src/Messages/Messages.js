import React, { PropTypes } from 'react';
import Message from '../Message/Message';

const Messages = ({messages}) => {
  let element = messages.map((message, i) => <Message key={i}  message={message} />);

  return (
    <div>
      {element}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      backColor: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Messages;
