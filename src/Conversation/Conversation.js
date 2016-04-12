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

    componentWillUnMount() {
      clearInterval(this.timer);
    }

    showMessage = () => {
      // has duration passed
       // dispatch show message
      var messages = this.state.messages;
      var messagesToBeDisplayed = this.state.messagesToBeDisplayed;

      if (this.state.messagesToBeDisplayed.length === 0) {
        clearInterval(this.timer);
      } else {
        const message = this.state.messagesToBeDisplayed.pop();
        messages.push(message);
        this.setState({
          messages,
          messagesToBeDisplayed
        });
        setTimeout(this.showMessage, message.duration || 1000);
      }

    }

    render() {
      return (
        <div>
          <Messages messages={this.state.messages} />
        </div>
      );
    }
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
