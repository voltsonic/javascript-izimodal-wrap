'use strict';

import chai from 'chai';
import 'mocha';
import {MergeDeep} from '../src/Utils/MergeDeep';

describe('MergeDeep // Basics', () => {
    it('Deep', () => {
        const testA = {a: {c: 4}, b: 1};
        const testB = {a: {c: 5}, c: 3};
        const testExp = {a: {c: 5}, b: 1, c: 3};
        const testAct = MergeDeep.combine(testA, testB);
        chai.assert.deepEqual(testAct, testExp, 'Deep merge filed.')
    });
    it('Simple', () => {
        const testA = {a: 1};
        const testB = {b: 1};
        const testExp = {a: 1, b: 1};
        const testAct = MergeDeep.combine(testA, testB);
        chai.assert.deepEqual(testAct, testExp, 'Simple merge filed.')
    });
});
