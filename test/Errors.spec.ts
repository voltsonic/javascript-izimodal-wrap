'use strict';

import chai from 'chai';
import 'mocha';
import BodyTagErrorIMW from '../src/Errors/BodyTagErrorIMW';
import ThemeExistsErrorIMW from '../src/Errors/ThemeExistsErrorIMW';

describe('Errors // Basics', () => {
    it('BodyTagErrorIMW', () => {
        const bodyTag = new BodyTagErrorIMW();
        chai.assert.equal(bodyTag.name, 'BodyTagErrorIMW');
        chai.assert.equal(bodyTag.message, 'Body tag not accessible');
    });
    it('ThemeExistsErrorIMW', () => {
        const bodyTag = new ThemeExistsErrorIMW('test_key');
        chai.assert.equal(bodyTag.name, 'ThemeExistsErrorIMW');
        chai.assert.equal(bodyTag.message, 'Attempting to add "test_key" twice for iziModalWrapGlobal.addTheme().');
    });
});
