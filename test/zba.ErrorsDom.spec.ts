'use strict';

import chai from 'chai';
import 'mocha';
import {BodyTagErrorIMW} from '../src/Errors/BodyTagErrorIMW';
import {iziModalWrapGlobal} from '../src/iziModalWrapGlobal';

const deleteBody = () => document.querySelector('body')?.remove();

describe('Errors // Missing Dom', () => {
    it('iziModalWrapGlobal.__getRootStyle()', () => {
        chai.expect(
            () => {
                deleteBody();
                iziModalWrapGlobal.getBodyStyle(true);
            }
        ).to.throw(
            BodyTagErrorIMW,
            /Body tag not accessible/,
            'Body tag was there?');
    });
});
