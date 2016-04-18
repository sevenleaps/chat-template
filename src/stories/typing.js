import React from 'react';
import Typing from '../Typing';
import { storiesOf } from '@kadira/storybook';

storiesOf('Typing', module)
.add('default view', () => <Typing />)
.add('Should show black dots', () => <Typing styles={ { dot: { borderColor: 'black' } } } />);
