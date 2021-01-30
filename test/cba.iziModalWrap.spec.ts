'use strict';

import chai from 'chai';
import 'mocha';
import iziModalWrap from '../src/iziModalWrap';

// tslint:disable-next-line:no-var-requires
const _package = require('../package.json');

describe('iziModalWrap // Basics', () => {
    it('Package Version', () =>
        chai.assert.equal(iziModalWrap.VERSION, _package.version, 'Version match fail'));
    it('Setup Modal', () => {
        // @ts-ignore
        const m = (new iziModalWrap('test'));
        chai.assert.isNotNull(document.querySelector('#izimw-test'), 'Modal not created?');
    });
    it('Events via Config Options.', () => {
        // @ts-ignore
        const m = (new iziModalWrap({
            modalId: 'test2',
            events: {
                opening: () => {
                    // tslint:disable-next-line:no-console
                    console.log('opening');
                },
                opened: () => {
                    // tslint:disable-next-line:no-console
                    console.log('opened');
                },
                after_render: () => {
                    // tslint:disable-next-line:no-console
                    console.log('after_render');
                },
                fullscreen: () => {
                    // tslint:disable-next-line:no-console
                    console.log('fullscreen');
                },
                resize: () => {
                    // tslint:disable-next-line:no-console
                    console.log('resize');
                },
                closing: () => {
                    // tslint:disable-next-line:no-console
                    console.log('closing');
                },
                closed: () => {
                    // tslint:disable-next-line:no-console
                    console.log('closed');
                }
            },
        }));
        chai.assert.isNotNull(document.querySelector('#izimw-test'), 'Modal not created?');
        m.methods.display.open();
    });
});
