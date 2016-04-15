import React from 'react';
import Conversation from 'chat-template/Conversation';

const messages = [
      {
        type: 'typing',
        inbound: true,
        duration: 2000
      },
      {
        message:'Hey, how are you getting on?',
        from: 'left',
        backColor: 'whitergb(250, 250, 250)',
        avatar: 'https://landofblogging.files.wordpress.com/2014/01/bitstripavatarprofilepic.jpeg',
        duration: 1000
      },
      {
        type: 'typing',
        inbound: true,
        duration: 1000
      },
      {
        message:'It has been ages since we talked.',
        from: 'left',
        backColor: 'whitergb(250, 250, 250)',
        avatar: 'https://landofblogging.files.wordpress.com/2014/01/bitstripavatarprofilepic.jpeg',
        duration: 2000
      },
      {
        message:'How do I uninstall this messaging app?',
        from: 'right',
        backColor: '#3d83fa',
        textColor: "white",
        avatar: 'https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png',
        duration: 2000
      },
      {
        type: 'typing',
        inbound: true,
        duration: 2000
      },
      {
        src: 'https://media.giphy.com/media/xT1XGLzxTFgIwxcbcY/giphy.gif',
        from: 'left',
        backColor: 'whitergb(250, 250, 250)',
        avatar: 'https://landofblogging.files.wordpress.com/2014/01/bitstripavatarprofilepic.jpeg',
        duration: 2500
        }
    ];

const styles = {
  width: "400px"
}

class Main extends React.Component {
  render() {
    return (
      <div style={styles}>
        <div style={styles}>
        	<Conversation typingColor={"#3d83fa"} height={300} messages={messages}/>
        </div>
      </div>
    );
  }
}

export default Main;
