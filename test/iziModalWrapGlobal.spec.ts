'use strict';

import chai from 'chai';
import chaiFs from 'chai-fs';
import jsDomGlobal from 'jsdom-global';
import 'mocha';
import iziModalWrapGlobal from '../src/iziModalWrapGlobal';
chai.use(chaiFs);
jsDomGlobal();

describe('iziModalWrapGlobalInner // Basics', () => {
    it('default config check.', () => {
        chai.assert.equal(
            JSON.stringify(iziModalWrapGlobal.getSettings()),
            '{"classes":{"modals":{"open":"{prefixId}-open"},"modal":{"open":"{prefixId}-open-{modalId}","opened":"{prefixId}-opened-{modalId}","setup":"{prefixId}-ran-{modalId}"}},"statics":{"prefixId":"izimw","isMobileDevice":false,"layerUpBase":1072},"themes":{"add":{"color":"#2C5937","icon":""},"edit":{"color":"#2364AA","icon":""},"delete":{"color":"#930119","icon":""},"primary":{"color":"#007bff","icon":""},"secondary":{"color":"#6c757d","icon":""},"success":{"color":"#28a745","icon":""},"danger":{"color":"#dc3545","icon":""},"warning":{"color":"#ffc107","icon":""},"info":{"color":"#17a2b8","icon":""},"light":{"color":"#f8f9fa","icon":""},"dark":{"color":"#343a40","icon":""}},"widths":{"a_xs":350,"b_sm":467,"c_md":603,"d_lg":730,"e_xl":882}}',
            'Default settings no longer match.',
        );
    });
    it('modified theme values.', () => {
        iziModalWrapGlobal
            .themeAdd('theme_key', '#000000')
            .themeAdd('theme_key2', '#FFFFFF', 'ico')
        ;
        const s = iziModalWrapGlobal.getSettings();
        chai.assert.isDefined(s.themes.theme_key, 'Missing theme_key.');
        chai.assert.isDefined(s.themes.theme_key.color, 'Missing color theme_key.');
        chai.assert.isUndefined(s.themes.theme_key.icon, 'Has icon theme_key?!?!');
        chai.assert.isDefined(s.themes.theme_key2, 'Missing theme_key2.');
        chai.assert.isDefined(s.themes.theme_key2.color, 'Missing color theme_key2.');
        chai.assert.isDefined(s.themes.theme_key2.icon, 'Missing icon theme_key2.');
    });
});
