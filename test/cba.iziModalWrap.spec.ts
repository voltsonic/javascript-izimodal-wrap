// @todo figure out testing for actual changes from css styles (they are not triggering even with the css included).
// 'use strict';
//
// import chai from 'chai';
// import 'mocha';
// import iziModalWrap from '../src/iziModalWrap';
//
// // tslint:disable-next-line:no-var-requires
// const _package = require('../package.json');
//
// const sleep = (ms: number): Promise<void> => (new Promise<void>(resolve => setTimeout(() => resolve(), ms)));
//
// describe('iziModalWrap // Basics', () => {
//     it('Package Version', () =>
//         chai.assert.equal(iziModalWrap.VERSION, _package.version, 'Version match fail'));
//     it('Setup Modal', () => {
//         // @ts-ignore
//         const m = (new iziModalWrap('test'));
//         chai.assert.isNotNull(document.querySelector('#izimw-test'), 'Modal not created?');
//     });
//     it('Events via Config Options.', (done) => {
//         let testCounts = 7;
//         const testEnd = () => {
//             if(--testCounts <= 0){
//                 done();
//             }
//         };
//         chai.assert.isNotNull(document.querySelector('#izimw-test'), 'Modal not created?');
//         // @ts-ignore
//         const m = (new iziModalWrap({
//             modalId: 'test2',
//             events: {
//                 opening: () => {
//                     testEnd();
//                     setTimeout(() => {
//                         // console.log(document.body.innerHTML);
//                     }, 750);
//                 },
//                 opened: () => {
//                     // tslint:disable-next-line:no-console
//                     console.log('opened');
//                     testEnd();
//                 },
//                 after_render: () => {
//                     testEnd();
//                 },
//                 fullscreen: () => {
//                     // tslint:disable-next-line:no-console
//                     console.log('fullscreen');
//                     testEnd();
//                 },
//                 resize: () => {
//                     // tslint:disable-next-line:no-console
//                     console.log('resize');
//                     testEnd();
//                 },
//                 closing: () => {
//                     // tslint:disable-next-line:no-console
//                     console.log('closing');
//                     testEnd();
//                 },
//                 closed: () => {
//                     // tslint:disable-next-line:no-console
//                     console.log('closed');
//                     testEnd();
//                 }
//             },
//         }));
//         m.methods.display.open();
//     });
// });
