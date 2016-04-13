import React, { PropTypes } from 'react';
import Message from '../Message/Message';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Messages = ({messages}) => {
  const styles = {
      position: 'absolute',
      bottom: '4%',
      maxWidth: '100%',
      overflow: 'hidden'
      // transition: 'all 1500ms cubic-bezier(0.17, 0.84, 0.44, 1) 200ms'
  }

  return (
    <div style={styles}>
      <style>{`
        .example-enter {
          max-height: 0px;
          transition: all 2.0s ease-in-out;
        }
        .example-enter.example-enter-active {
          max-height: 500px;
        }
        `}
      </style>
      <ReactCSSTransitionGroup transitionName="example" component="div">
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
