"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iziWrapModuleAbstract_1 = __importDefault(require("./iziWrapModuleAbstract"));
var iziModalWrapGlobal_1 = __importDefault(require("../iziModalWrapGlobal"));
var InvalidThemeKeyIMW_1 = __importDefault(require("../Errors/InvalidThemeKeyIMW"));
var formatItem = function (itemWrap, itemGlobal, returnDefault) {
    if (returnDefault === void 0) { returnDefault = ''; }
    if (typeof itemWrap === 'string')
        return itemWrap;
    if (typeof itemWrap === 'function')
        return itemWrap();
    if (typeof itemGlobal === 'string')
        return itemGlobal;
    if (typeof itemGlobal === 'function')
        return itemGlobal();
    return returnDefault;
};
var iziWrapTheme = /** @class */ (function (_super) {
    __extends(iziWrapTheme, _super);
    function iziWrapTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    iziWrapTheme.prototype.mode = function (themeKey) {
        var themeWrap = this.w.config.themes[themeKey];
        var themeGlobal = iziModalWrapGlobal_1.default.themeGet(themeKey);
        if (!themeGlobal && !themeWrap)
            throw new InvalidThemeKeyIMW_1.default(themeKey);
        this.w.methods.header.color(themeGlobal.color);
        this.title(formatItem(themeWrap.title, themeGlobal.title), formatItem(themeWrap.subtitle, themeGlobal.subtitle, undefined));
        var themeIcon = formatItem(themeWrap.icon, themeGlobal.icon, false);
        if (themeIcon) {
            this.icon(themeIcon);
        }
        return this.up();
    };
    iziWrapTheme.prototype.title = function (title, subTitle) {
        this.w.methods.header.title(title);
        this.subtitle(subTitle);
        return this;
    };
    iziWrapTheme.prototype.subtitle = function (subTitle) {
        this.w.methods.header.subtitle(subTitle !== null && subTitle !== void 0 ? subTitle : '');
        return this;
    };
    iziWrapTheme.prototype.icon = function (icon, iconText) {
        this.w.methods.header
            .iconClass(icon)
            .iconText(iconText !== null && iconText !== void 0 ? iconText : '');
        return this;
    };
    return iziWrapTheme;
}(iziWrapModuleAbstract_1.default));
exports.default = iziWrapTheme;
