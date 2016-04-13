import React from 'react';
import Typing from '../src/Typing/Typing';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Typing', module)
.add('should display 3 dots', () => <Typing />);
