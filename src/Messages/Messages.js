import React, { PropTypes } from 'react';
import Message from '../Message/Message';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Messages = ({messages}) => {
  const styles = {
      position: 'absolute',
      bottom: '4%',
      width: '100%',
      overflow: 'hidden'
  }

  return (
    <div style={styles}>
      <style>{`
        .__CHAT_TEMPLATE_MESSAGES_TRANSITION_ELEMENT-enter {
          max-height: 0px;
          transition: all 0.8s ease-in-out;
        }
        .__CHAT_TEMPLATE_MESSAGES_TRANSITION_ELEMENT-enter.__CHAT_TEMPLATE_MESSAGES_TRANSITION_ELEMENT-enter-active {
          max-height: 500px;
        }
        `}
      </style>
      <ReactCSSTransitionGroup transitionName="__CHAT_TEMPLATE_MESSAGES_TRANSITION_ELEMENT" component="div" transitionEnterTimeout={10000} transitionLeaveTimeout={10000} >
        {messages.map((message, i)  => <Message key={i} message={message} />)}
      </ReactCSSTransitionGroup>
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
