import React, {PropTypes} from 'react';
import Message from '../Message/Message';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Messages = ({height, messages}) => {
  const styles = {
    position: 'absolute',
    bottom: '4%',
    width: '100%',
    overflow: 'hidden',
  };

  return (
    <div style={styles}>
      <style>{`
        .__CHAT_TEMPLATE_MESSAGES_TRANSITION_ELEMENT-enter {
          transform: translateY(30px);
          max-height: 1px;
          transition: all 0.8s ease-in-out;
        }
        .__CHAT_TEMPLATE_MESSAGES_TRANSITION_ELEMENT-enter.__CHAT_TEMPLATE_MESSAGES_TRANSITION_ELEMENT-enter-active {
          transform: translateY(0px);
          max-height: 300px;
        }
        `}
      </style>
      <ReactCSSTransitionGroup transitionName="__CHAT_TEMPLATE_MESSAGES_TRANSITION_ELEMENT" transitionEnterTimeout={55000} transitionLeave={false}>
        {messages.map((message, i) => <Message key={i} height={height} message={message} />)}
      </ReactCSSTransitionGroup>
    </div>
  );
};

Messages.propTypes = {
  height: PropTypes.number,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      src: PropTypes.string,
      from: PropTypes.string.isRequired,
      backColor: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    })
  ).isRequired,
};

export default Messages;
