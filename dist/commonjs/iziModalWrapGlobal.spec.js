'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importDefault(require("chai"));
require("mocha");
var iziModalWrapGlobal_1 = __importDefault(require("./iziModalWrapGlobal"));
chai_1.default.use(require('chai-fs'));
require('jsdom-global')();
describe('iziModalWrapGlobalInner // Basics', function () {
    it("default config check.", function () {
        chai_1.default.assert.equal(JSON.stringify(iziModalWrapGlobal_1.default.getSettings()), '{"classes":{"modals":{"open":"{prefixId}-open"},"modal":{"open":"{prefixId}-open-{modalId}","opened":"{prefixId}-opened-{modalId}","setup":"{prefixId}-ran-{modalId}"}},"statics":{"prefixId":"izimw","isMobileDevice":false,"layerUpBase":1072},"themes":{"add":{"color":"#2C5937","icon":""},"edit":{"color":"#2364AA","icon":""},"delete":{"color":"#930119","icon":""},"primary":{"color":"#007bff","icon":""},"secondary":{"color":"#6c757d","icon":""},"success":{"color":"#28a745","icon":""},"danger":{"color":"#dc3545","icon":""},"warning":{"color":"#ffc107","icon":""},"info":{"color":"#17a2b8","icon":""},"light":{"color":"#f8f9fa","icon":""},"dark":{"color":"#343a40","icon":""}},"widths":{"a_xs":350,"b_sm":467,"c_md":603,"d_lg":730,"e_xl":882}}', 'Default settings no longer match.');
    });
    it("modified theme values.", function () {
        iziModalWrapGlobal_1.default
            .themeAdd('theme_key', '#000000')
            .themeAdd('theme_key2', '#FFFFFF', 'ico');
        var s = iziModalWrapGlobal_1.default.getSettings();
        chai_1.default.assert.isDefined(s.themes['theme_key'], 'Missing theme_key.');
        chai_1.default.assert.isDefined(s.themes['theme_key'].color, 'Missing color theme_key.');
        chai_1.default.assert.isUndefined(s.themes['theme_key'].icon, 'Has icon theme_key?!?!');
        chai_1.default.assert.isDefined(s.themes['theme_key2'], 'Missing theme_key2.');
        chai_1.default.assert.isDefined(s.themes['theme_key2'].color, 'Missing color theme_key2.');
        chai_1.default.assert.isDefined(s.themes['theme_key2'].icon, 'Missing icon theme_key2.');
    });
});
