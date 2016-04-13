import React, { PropTypes } from 'react';
import Messages from '../Messages/Messages';
import Typing from '../Typing/Typing';

const getStyles = ({typingColor, height}) => {
  return {
    conversation: {
      position: 'relative',
      overflow: 'hidden',
      height: height + 'px'
    },
    noTyping: {
      height: '92%'
    },
    inbound: {
      position: 'absolute',
      left: '4%',
      width: '10%',
      height: '8%'
    },
    outbound: {
      position: 'absolute',
      right: '4%',
      width: '10%',
      height: '8%'
    },
    messages: {
      height: '92%',
      position: 'relative'
    },
    typing: {
      color: typingColor || '#3b5998'
    }
  }
}

class Conversation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      messages: [],
      height: props.height,
      messagesToBeDisplayed: props.messages,
      isTyping: false,
      inbound: true
    };
  }

  componentDidMount() {
     this.timeoutId = setTimeout(this.showMessage, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  showMessage = () => {
    let messages = this.state.messages;
    let messagesToBeDisplayed = this.state.messagesToBeDisplayed;
    const height = this.state.height;

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
        messages,
        messagesToBeDisplayed,
        height,
        isTyping,
        inbound,
      }, onDisplay);
      this.timeoutId = setTimeout(this.showMessage, message.duration || 800);
    }
  }

  render () {
    const styles = getStyles(this.props);
    const { isTyping, inbound } = this.state;
    return (
      <div style={styles.conversation}>
        <div style={imageDivStyle}>
          {imageElement(this.state.messagesToBeDisplayed)}
        </div>
        <div style={styles.messages}>
          <Messages height={this.state.height} messages={this.state.messages} />
        </div>
        <div style={(isTyping && inbound && styles.inbound) || (isTyping && !inbound && styles.outbound) || styles.noTyping}>
          {isTyping && <Typing color={styles.typing.color} />}
        </div>
      </div>
    );
  }
}

const imageDivStyle = {
  display: 'none'
}

const imageElement = (messages) => {
  return messages.map((message, i)  => {
    let image = '';
    if(typeof message.src === 'string') {
      image =
        <img src={message.src} width={'1px'} height={'1px'} />;
    }
    return image;
  });
}

Conversation.propTypes = {
  height: PropTypes.number,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      src: PropTypes.string,
      from: PropTypes.string,
      backColor: PropTypes.string,
      duration: PropTypes.number
    })
  ).isRequired
}

export default Conversation;
