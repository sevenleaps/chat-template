import React, { PropTypes } from 'react';
import Messages from '../Messages/Messages';

class Conversation extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        messages: [],
        messagesToBeDisplayed: props.messages
      };
    }

    componentDidMount() {
      setTimeout(this.showMessage, 1000);
    }

    showMessage = () => {
      // has duration passed
       // dispatch show message
      var messages = this.state.messages;
      var messagesToBeDisplayed = this.state.messagesToBeDisplayed;

      if (this.state.messagesToBeDisplayed.length > 0) {
        const message = this.state.messagesToBeDisplayed.pop();
        messages.push(message);
        this.setState({
          messages,
          messagesToBeDisplayed
        });
        setTimeout(this.showMessage, message.duration || 800);
      }

    }

    render() {
      return (
        <div style={styles}>
          <Messages messages={this.state.messages} />
        </div>
      );
    }
}

const styles = {
  position: 'relative',
  overflow: 'hidden',
  height: '300px'
}

Conversation.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      backColor: PropTypes.string.isRequired,
      duration: PropTypes.number
    })
  ).isRequired
}

export default Conversation;
