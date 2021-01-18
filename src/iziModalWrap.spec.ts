// @todo figure why jQuery won't inject into iziModalWrap via jsdom-global, it works inside describe/it but not when the inner class gets setup.
// 'use strict';
//
// import chai from 'chai';
// import 'mocha';
// import iziModalWrap from "./iziModalWrap";
// chai.use(require('chai-fs'));
//
// // Dom + jQuery
// let jQuery = require('jquery');
// require('jsdom-global')();
// let $ = jQuery(window);
// // @ts-ignore.
// global.$ = $; // make availble to other files if necessary
//
// describe('iziModalWrap // Basics', () => {
//     $('body').html('<div id="izimw-test" class="iziModal"></div>');
//     let modal: iziModalWrap;
//     it('Setup Modal', () => {
//         modal = new iziModalWrap('test');
//         console.log(document.body.innerHTML);
//         // jsdom.jQueryify(window, "../node_modules/jquery/dist/jquery.min.js", () => {
//         //     // modal = new iziModalWrap('test');
//         // });
//     });
// });
