#[chat-template](http://bitbucket.org/seven-leaps/chat-template)

[![wercker status](https://app.wercker.com/status/6e1e49eb6d11cdb42c3f2aba01d7c2e9/m "wercker status")](https://app.wercker.com/project/bykey/6e1e49eb6d11cdb42c3f2aba01d7c2e9)

Chat-Template is a React component that enables quick prototyping of bot conversations. [Click here to see it in action](http://www.mrwgame.com/)

## Prerequisites

Knowledge of:
- [React](http://facebook.github.io/react/)
- [Node](http://material-ui.com/#/get-started/prerequisites)
- [Single Page Applications (SPAs)](http://material-ui.com/#/get-started/prerequisites)

If you're not familiar with the above, please click on the links above for more of an introduction

## Installation

Chat-Template is available as an [npm package](https://www.npmjs.org/package/chat-template).
```sh
npm install chat-template
```
You also need to install the peer dependencies in your project.
```sh
npm install react
npm install react-dom
```


## Usage

Once chat-template is included in your project, you can use the component this way.

```js
import React from 'react';
import Conversation from 'chat-template/Conversation';

var messages = [{
  message:'How do I use this messaging app?',
  from: 'right',
  backColor: '#3d83fa',
  textColor: "white",
  avatar: 'https://www.seeklogo.net/wp-content/uploads/2015/09/google-plus-new-icon-logo.png',
  duration: 2000,
}];

const MyAwesomeConversation = () =>  
  <Conversation height={300} messages={messages}/>
```

## Examples

Check out this
[example project](https://bitbucket.org/seven-leaps/chat-template/src/master/examples/webpack-example/).


This is a basic example that show how to consume the Conversation component
in your own project. It uses [webpack](http://webpack.github.io/) for module bundling and building.

Run these commands from the example project folder:
```sh
npm install
npm run start
```

Then in your browser, go to `localhost:3000`

## Storybook examples

We are using [react-storybook](https://github.com/kadirahq/react-storybook) to develop chat-template and all the stories we have created can be found in the [stories folder](https://bitbucket.org/seven-leaps/chat-template/src/master/stories/).

This is the best place to see all the capabilities of chat-template.

To run storybook locally, run the following commands from the root project folder:

```sh
npm install
npm run storybook
```

Then in your browser, go to `localhost:9001`

## Contribute

chat-template came about from our love of
[React](http://facebook.github.io/react/) and [Telegram bots](https://telegram.org/blog/bot-revolution).

We're currently using it on the website: [MyReactionWhen](http://www.mrwgame.com/).

We welcome contributions! If you're looking to start go to [CONTRIBUTING.md](https://bitbucket.org/seven-leaps/chat-template/src/master/CONTRIBUTING.md) for more information!

## License
This project is licensed under the terms of the
[MIT license](https://github.com/callemall/material-ui/blob/master/LICENSE).
