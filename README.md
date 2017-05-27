Chat-Template is a React component that enables quick prototyping of bot conversations. [Click here to see it in action](http://www.mrwgame.com/)

[![dependencies up to date](https://david-dm.org/sevenleaps/chat-template.svg)](https://david-dm.org/sevenleaps/chat-template)

[![npm version](https://badge.fury.io/js/chat-template.svg)](https://badge.fury.io/js/chat-template)

[![Build Status](https://travis-ci.org/sevenleaps/chat-template.svg?branch=develop)](https://travis-ci.org/sevenleaps/chat-template)
#[chat-template](http://github.com/sevenleaps/chat-template)

## Installation

Chat-Template is available as an [npm package](https://www.npmjs.org/package/chat-template).
```sh
npm install chat-template
```
You also need to install the peer dependencies in your project.
```sh
npm install react
```


## Usage

Once chat-template is included in your project, you can use the component this way.

```js
import React from 'react';
import Conversation from 'chat-template/dist/Conversation';

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

### Turning off the loop of messages
Messages loop by default.

To turn this off, add a turnOffLoop attribute to Coversation.

This parameter is optional.
```
   <Conversation height={300} messages={messages} turnOffLoop />
```

### Turning on scrollable conversation (Temporary fix - v1 release will have a more supported scrollable conversation)
The conversation is not scrollable by default.

To enable scrolling, add a isScrollable attribute to Conversation.

This parameter is optional.
```
   <Conversation height={300} messages={messages} turnOffLoop isScrollable />
```

## Storybook examples

Live stories are displayed [here](http://sevenleaps.github.io/chat-template/).
We are using [react-storybook](https://github.com/kadirahq/react-storybook) to develop chat-template and all the stories code can be found in the [stories folder](https://github.com/sevenleaps/chat-template/tree/master/src/stories).

This is the best place to see all the capabilities of chat-template.

To run storybook locally, run the following commands from the root project folder:

```sh
npm install
npm run storybook
```

Then in your browser, go to `localhost:9010`

## Contribute

chat-template came about from our love of
[React](http://facebook.github.io/react/) and [Telegram bots](https://telegram.org/blog/bot-revolution).

We're currently using it on the website: [MyReactionWhen](http://www.mrwgame.com/).

We welcome contributions! If you're looking to start go to [CONTRIBUTING.md](https://github.com/sevenleaps/chat-template/tree/master/CONTRIBUTING.md) for more information!

## License
This project is licensed under the terms of the
[MIT license](https://github.com/sevenleaps/chat-template/tree/master/LICENSE).
