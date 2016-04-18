import React, { PropTypes } from 'react';
import Message from './Message';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { StyleSheet, css } from 'aphrodite';
import assignDeep from 'object-assign-deep';

const defaultStyle = {
  container: {
    position: 'absolute',
    bottom: '4%',
    width: '100%',
    overflow: 'hidden',
  },
};

const Messages = ({ height, messages, styles }) => {
  const style = StyleSheet.create(assignDeep({}, defaultStyle, styles));

  return (
    <div className={css(style.container)}>
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
      inbound: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
      backColor: PropTypes.string.isRequired,
      textColor: PropTypes.string,
    })
  ).isRequired,
  styles: PropTypes.object,
};

export default Messages;
