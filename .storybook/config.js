import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/avatar');
  require('../stories/conversation');
  require('../stories/messages');
  require('../stories/message');
  require('../stories/messageContent');
  // require as many stories as you need.
}

configure(loadStories, module);
