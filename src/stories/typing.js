import React from 'react';
import Typing from '../Typing';
import { storiesOf } from '@kadira/storybook';

storiesOf('Typing', module)
.add('Typing displays with blue dots', () => <Typing />)
.add('Typing displays with black dots', () => <Typing styles={ { dot: { borderColor: 'black' } } } />);
