import React from 'react';
import Conversation from 'chat-template/Conversation';

const messages = [{
  message: 'hey how are you',
  duration: 1000,
  from: 'left',
  backColor: 'white'
},
{
  message: 'hey how are you',
  duration: 1000,
  from: 'right',
  backColor: 'lightgreen'
}]

const styles = {
  width: "200px",
  height: "50%"
}

const stylesDuvGeight = {
  height: "50%"
}

class Main extends React.Component {
  render() {
    return (
      <div style={styles}>
        <div style={styles}>
        	<Conversation messages={messages}/>
        </div>
        <div style={stylesDuvGeight}>
          <p> Howdy jvkxhvhalhludhlhsfalduha</p>
        </div>
      </div>
    );
  }
}

export default Main;
