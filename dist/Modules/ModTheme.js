'use strict';
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModTheme = void 0;
var ModAbstract_1 = require("./ModAbstract");
var iziModalWrapGlobal_1 = require("../iziModalWrapGlobal");
var InvalidThemeKeyIMW_1 = require("../Errors/InvalidThemeKeyIMW");
var formatItem = function (itemWrap, itemGlobal, returnDefault) {
    var _a, _b;
    if (returnDefault === void 0) { returnDefault = ''; }
    if (typeof itemWrap === 'string')
        return itemWrap;
    if (typeof itemWrap === 'function')
        return (_a = itemWrap()) !== null && _a !== void 0 ? _a : returnDefault;
    if (typeof itemGlobal === 'string')
        return itemGlobal;
    if (typeof itemGlobal === 'function')
        return (_b = itemGlobal()) !== null && _b !== void 0 ? _b : returnDefault;
    return returnDefault;
};
var ModTheme = /** @class */ (function (_super) {
    __extends(ModTheme, _super);
    function ModTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModTheme.prototype.mode = function (themeKey) {
        var themeWrap = this.w.config.themes[themeKey];
        var themeGlobal = iziModalWrapGlobal_1.iziModalWrapGlobal.getTheme(themeKey);
        if (!themeGlobal)
            throw new InvalidThemeKeyIMW_1.InvalidThemeKeyIMW(themeKey);
        if (!themeWrap)
            throw new InvalidThemeKeyIMW_1.InvalidThemeKeyIMW(themeKey);
        this.w.methods.header.color(themeGlobal.color);
        this.title(formatItem(themeWrap.title, themeGlobal.title), formatItem(themeWrap.subtitle, themeGlobal.subtitle, undefined));
        var themeIcon = formatItem(themeWrap.icon, themeGlobal.icon, false);
        if (themeIcon) {
            this.icon(themeIcon);
        }
        return this.up();
    };
    ModTheme.prototype.title = function (title, subTitle) {
        this.w.methods.header.title(title);
        this.subtitle(subTitle);
        return this;
    };
    ModTheme.prototype.subtitle = function (subTitle) {
        this.w.methods.header.subtitle(subTitle !== null && subTitle !== void 0 ? subTitle : '');
        return this;
    };
    ModTheme.prototype.icon = function (icon, iconText) {
        this.w.methods.header
            .iconClass(icon)
            .iconText(iconText !== null && iconText !== void 0 ? iconText : '');
        return this;
    };
    return ModTheme;
}(ModAbstract_1.ModAbstract));
exports.ModTheme = ModTheme;
//# sourceMappingURL=ModTheme.js.map