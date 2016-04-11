/* eslint-env mocha */
/**
 * Important: This test also serves as a point to
 * import the entire lib for coverage reporting
 */

import {assert} from 'chai';
import * as Conversation from './index';

describe('Conversation', () => it('should have exports', () => assert.ok(Conversation)));
