import React, {PropTypes} from 'react';
import Message from '../Message/Message';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Messages = ({height, messages}) => {
  const styles = {
    position: 'absolute',
    bottom: '4%',
    width: '100%',
    overflow: 'hidden',
    transisitionDelay: '2s',
  };

  return (
    <div style={styles}>
      <style>{`
        .__CHAT_TEMPLATE_MESSAGES_TRANSITION_ELEMENT-enter {
          max-height: 1px;
          min-height: 1px;
          transition: all 0.8s ease-in-out;
        }
        .__CHAT_TEMPLATE_MESSAGES_TRANSITION_ELEMENT-enter.__CHAT_TEMPLATE_MESSAGES_TRANSITION_ELEMENT-enter-active {
          max-height: 500px;
        }
        `}
      </style>
      <ReactCSSTransitionGroup transitionName="__CHAT_TEMPLATE_MESSAGES_TRANSITION_ELEMENT" component="div" transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
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
    })
  ).isRequired,
};

export default Messages;
