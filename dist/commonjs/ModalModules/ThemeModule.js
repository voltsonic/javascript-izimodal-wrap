"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractModule_1 = require("./AbstractModule");
var ThemeModule = /** @class */ (function (_super) {
    __extends(ThemeModule, _super);
    function ThemeModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeModule.prototype.generic = function () {
        var _this = this;
        return {
            color: function (color) {
                _this.modal.api
                    .ui.header.color(color);
                return _this;
            },
            titles: function (title, subtitle) {
                _this.modal.api
                    .ui.header.title(title)
                    .ui.header.subtitle(subtitle ? subtitle : '');
                return _this;
            },
            icons: function (icon, iconText) {
                _this.modal.api
                    .ui.header.icon.class(icon)
                    .ui.header.icon.text(iconText ? iconText : '');
                return _this;
            }
        };
    };
    ThemeModule.prototype.genericTheme = function (color, icon) {
        return this
            .generic().color(color)
            .generic().icons(icon ? icon : "");
    };
    ThemeModule.prototype.simple = function () {
        var _this = this;
        return {
            custom: function (customKey) { return (_this.genericTheme(_this.globalSettings.theme.colors[customKey], _this.globalSettings.theme.icons[customKey])); },
            primary: function () { return (_this.simple().custom("primary")); },
            secondary: function () { return (_this.simple().custom("secondary")); },
            success: function () { return (_this.simple().custom("success")); },
            danger: function () { return (_this.simple().custom("danger")); },
            warning: function () { return (_this.simple().custom("warning")); },
            info: function () { return (_this.simple().custom("info")); },
            light: function () { return (_this.simple().custom("light")); },
            dark: function () { return (_this.simple().custom("dark")); }
        };
    };
    return ThemeModule;
}(AbstractModule_1.AbstractModule));
exports.ThemeModule = ThemeModule;
