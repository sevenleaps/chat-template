import React, { PropTypes } from 'react';
import Messages from './Messages';
import Typing from './Typing';
import ImageLoader from './ImageLoader';
import { StyleSheet, css } from 'aphrodite';
import assignDeep from 'object-assign-deep';

const defaultStyle = {
  conversation: {
    position: 'relative',
    overflow: 'hidden',
    height: '300px',
  },
  noTyping: {
    height: '8%',
  },
  inbound: {
    position: 'absolute',
    left: '4%',
    width: '10%',
    height: '8%',
  },
  outbound: {
    position: 'absolute',
    right: '4%',
    width: '10%',
    height: '8%',
  },
  messages: {
    height: '92%',
    position: 'relative',
  },
};

const typingStyles = {
  dot: {
    borderColor: '#3b5998',
  },
};

class Conversation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      startingDelay: props.delay || 1000,
      messages: props.historicMessages ? props.historicMessages.slice() : [],
      historicMessages: props.historicMessages ? props.historicMessages.slice() : [],
      messagesToBeDisplayed: props.messages.slice(),
      originalMessagesToBeDisplayed: props.messages.slice(),
      isTyping: false,
      inbound: true,
      reset: false,
      turnOffLoop: props.turnOffLoop,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(this.showMessage, this.state.startingDelay);
  }

  componentWillReceiveProps(nextProps) {
    const previousMessagesLength =
    this.state.messagesToBeDisplayed.length + this.state.messages.length - this.state.historicMessages.length;

    if (nextProps.messages.length > previousMessagesLength) {
      clearTimeout(this.timeoutId);
      this.setState(
        {
          messagesToBeDisplayed: this.state.messagesToBeDisplayed.concat(
            nextProps.messages.slice(previousMessagesLength)
          ),
        }
      );

      this.timeoutId = setTimeout(this.showMessage, this.state.startingDelay);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  showMessage = () => {
    const messages = this.state.messages;
    const messagesToBeDisplayed = this.state.messagesToBeDisplayed;
    const reset = this.state.reset;
    if (this.state.messagesToBeDisplayed.length > 0) {
      const message = this.state.messagesToBeDisplayed.shift();
      let isTyping = this.state.isTyping;
      let inbound = this.state.inbound;
      if (message.type === 'typing') {
        isTyping = true;
        inbound = message.inbound;
      } else {
        messages.push(message);
        isTyping = false;
      }
      let onDisplay = undefined;
      if (message.onDisplay) {
        onDisplay = message.onDisplay.bind(null, message.id);
      }
      this.setState({
        ...this.state,
        messages,
        messagesToBeDisplayed,
        isTyping,
        inbound,
        reset,
      }, onDisplay);
      this.timeoutId = setTimeout(this.showMessage, message.duration || 800);
    } else if (!this.state.turnOffLoop) {
      this.setState({
        ...this.state,
        messagesToBeDisplayed: this.state.originalMessagesToBeDisplayed.slice(),
        messages: this.state.historicMessages.slice(),
        isTyping: false,
        inbound: true,
        reset: !reset,
      });
      this.timeoutId = setTimeout(this.showMessage, this.state.startingDelay);
    }
  }

  render() {
    const { isTyping, inbound } = this.state;
    const isInbound = isTyping && inbound;
    const isOutbound = isTyping && !inbound;

    const style = StyleSheet.create(assignDeep({}, defaultStyle, {
      conversation: {
        height: this.props.height || defaultStyle.conversation.height,
      },
    }, this.props.styles || {}));
    return (
      <div className={css(style.conversation)}>
        <ImageLoader messages={this.props.messages} />
        <div className={css(style.messages)}>
          <Messages key={this.state.reset} height={this.props.height} messages={this.state.messages} />
        </div>
        <div className={css(isInbound && style.inbound, isOutbound && style.outbound, !isTyping && style.noTyping)}>
          {isTyping && <Typing styles={typingStyles} />}
        </div>
      </div>
    );
  }
}

Conversation.propTypes = {
  delay: PropTypes.number,
  height: PropTypes.number,
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
  ).isRequired,
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

export default Conversation;
