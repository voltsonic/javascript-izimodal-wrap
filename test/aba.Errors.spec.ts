'use strict';

import chai from 'chai';
import 'mocha';
import {BodyTagErrorIMW} from '../src/Errors/BodyTagErrorIMW';
import {ThemeExistsErrorIMW} from '../src/Errors/ThemeExistsErrorIMW';
import {InvalidThemeKeyIMW} from '../src/Errors/InvalidThemeKeyIMW';

describe('Errors // Basics', () => {
    it('BodyTagErrorIMW', () => {
        const bodyTag = new BodyTagErrorIMW();
        chai.assert.equal(bodyTag.name, 'BodyTagErrorIMW');
        chai.assert.equal(bodyTag.message, 'Body tag not accessible');
        chai.assert.equal(bodyTag.message, 'Body tag not accessible');
    });
    it('ThemeExistsErrorIMW', () => {
        const bodyTag = new ThemeExistsErrorIMW('test_key');
        chai.assert.equal(bodyTag.name, 'ThemeExistsErrorIMW');
        chai.assert.equal(bodyTag.message, 'Attempting to add "test_key" twice for iziModalWrapGlobal.addTheme().');
    });
    it('InvalidThemeKeyIMW', () => {
        const invalidThemeKey = new InvalidThemeKeyIMW('test_key');
        chai.assert.equal(invalidThemeKey.name, 'InvalidThemeKeyIMW');
        chai.assert.equal(invalidThemeKey.message, 'Invalid Theme Key: test_key');
    });
});
