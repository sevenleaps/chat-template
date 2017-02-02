import React, { PropTypes } from 'react';
import Conversation from './Conversation';
import { StyleSheet, css } from 'aphrodite';
import assignDeep from 'object-assign-deep';

const defaultStyle = {
  chat: {
    position: 'relative',
    overflow: 'hidden',
    height: '340px',
  },
  inputDiv: {
    height: '40px',
    width: '100%',
    backgroundColor: '#efefef',
    borderRadius: '5px',
  },
  input: {
    margin: '8px',
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 20px)',
    borderRadius: '5px',
  },
};

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: props.messages ? props.messages.slice() : [],
      historicMessages: props.historicMessages ? props.historicMessages.slice() : [],
    };
    this.keyPress = this.keyPress.bind(this);
  }
  addMessage(value) {
    const message = {
      message: value,
      inbound: false,
      backColor: '#dcf8c6',
      duration: 800,
    };
    this.state.messages.push(message);
    this.setState({ messages: this.state.messages });
  }
  keyPress(e) {
    if (e.key === 'Enter' && e.target.value) {
      this.addMessage(e.target.value);
      e.target.value = ''; // eslint-disable-line no-param-reassign
    }
  }
  render() {
    const style = StyleSheet.create(assignDeep({}, defaultStyle, this.props.styles || {}));
    return (
      <div className={css(style.chat)}>
        <Conversation height={300} historicMessages={this.state.historicMessages} messages={this.state.messages} turnOffLoop />
        <div className={css(style.inputDiv)}>
          <input type="text" onKeyPress={this.keyPress} className={css(style.input)} placeholder="Type your message here..." />
        </div>
      </div>
    );
  }
}
Chat.propTypes = {
  turnOffLoop: PropTypes.bool,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      src: PropTypes.string,
      inbound: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
      duration: PropTypes.number,
      backColor: PropTypes.string,
      textColor: PropTypes.string,
    }),
  ),
  historicMessages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      src: PropTypes.string,
      inbound: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
      duration: PropTypes.number,
      backColor: PropTypes.string,
      textColor: PropTypes.string,
    }),
  ),
  styles: PropTypes.object,
};

export default Chat;
