// // @todo figure why jQuery won't inject into iziModalWrap via jsdom-global, it works inside describe/it but not when the inner class gets setup.
// 'use strict';
//
// import chai from 'chai';
// import 'mocha';
// import iziModalWrap from '../src/iziModalWrap';
// // chai.use(require('chai-fs'));
//
// // Dom + jQuery
// // const jQuery = require('jquery');
// // require('jsdom-global')();
// // const $ = jQuery(window);
// // @ts-ignore.
// // global.$ = $; // make availble to other files if necessary
//
// describe('iziModalWrap // Basics', () => {
//     // $('body').html('<div id="izimw-test" class="iziModal"></div>');
//     // let modal: iziModalWrap;
//     it('Setup Modal', () => {
//         // modal = new iziModalWrap('test');
//         // console.log(document.body.innerHTML);
//         // jsdom.jQueryify(window, "../node_modules/jquery/dist/jquery.min.js", () => {
//         //     // modal = new iziModalWrap('test');
//         // });
//         chai.assert.equal(iziModalWrap.VERSION, '1.0.0', 'Version match fail');
//         // chai.assert.fail('no.test');
//     });
// });
