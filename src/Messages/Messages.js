import React, { PropTypes } from 'react';
import Message from '../Message/Message';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Messages = ({messages}) => {
  const styles = {
      position: 'absolute',
      bottom: '4%',
      maxWidth: '100%'
      // transition: 'all 1500ms cubic-bezier(0.17, 0.84, 0.44, 1) 200ms'
  }

  return (
    <div style={styles}>
      <style>{"\
        .example-enter {\
          opacity: 0.01;\
          transition: opacity .5s ease-in;\
        }\
        .example-enter.example-enter-active {\
          opacity: 1;\
        }\
        "}
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
