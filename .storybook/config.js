import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/conversation');
  // require as many stories as you need.
}

configure(loadStories, module);
