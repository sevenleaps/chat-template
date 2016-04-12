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
      this.timer = setInterval(this.showMessage, 1000);
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
        messages.push(this.state.messagesToBeDisplayed.pop());
        this.setState({
          messages,
          messagesToBeDisplayed
        });

      }

    }

    componentDidUpdate() {
      console.log('DID UPDATE')
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
      backColor: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Conversation;
