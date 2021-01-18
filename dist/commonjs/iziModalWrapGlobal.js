"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MergeDeep_1 = __importDefault(require("./Utils/MergeDeep"));
var iziModalWrapGlobalInner = /** @class */ (function () {
    function iziModalWrapGlobalInner() {
        this.__init = false;
        this.__rootStyle = false;
    }
    iziModalWrapGlobalInner.prototype.__getRootStyle = function () {
        if (!this.__rootStyle) {
            this.__rootStyle = getComputedStyle(document.querySelector('body'));
        }
        return this.__rootStyle;
    };
    iziModalWrapGlobalInner.prototype.getPropVal = function (key, _default) {
        if (_default === void 0) { _default = '#000'; }
        var r = this.__getRootStyle().getPropertyValue("--" + key);
        if (r.length > 0)
            return r;
        return _default;
    };
    iziModalWrapGlobalInner.prototype.themeGet = function (key) {
        this.init();
        if (this.globalSettings.themes.hasOwnProperty(key))
            return this.globalSettings.themes[key];
        return undefined;
    };
    iziModalWrapGlobalInner.prototype.themeAdd = function (key, color, icon, title, subtitle) {
        this.init();
        if (this.globalSettings.themes.hasOwnProperty(key))
            throw new Error("Attempting to add \"" + key + "\" twice for iziModalWrapGlobal.customize.addTheme();");
        this.globalSettings.themes[key] = {
            color: color,
            icon: icon,
            title: title,
            subtitle: subtitle,
        };
        return this;
    };
    /**
     *
     * @param merge
     * @param forceReInit used in testing.
     */
    iziModalWrapGlobalInner.prototype.init = function (merge, forceReInit) {
        if (merge === void 0) { merge = {}; }
        if (forceReInit === void 0) { forceReInit = false; }
        if (!this.__init || forceReInit) {
            this.__init = true;
            this.globalSettings = MergeDeep_1.default.combine({
                classes: {
                    modals: {
                        open: "{prefixId}-open"
                    },
                    modal: {
                        open: "{prefixId}-open-{modalId}",
                        opened: "{prefixId}-opened-{modalId}",
                        setup: "{prefixId}-ran-{modalId}"
                    }
                },
                statics: {
                    prefixId: "izimw",
                    isMobileDevice: false,
                    layerUpBase: 1072,
                },
                themes: {
                    add: { color: this.getPropVal("--add", "#2C5937"), icon: this.getPropVal("--add", "") },
                    edit: { color: this.getPropVal("--edit", "#2364AA"), icon: this.getPropVal("--edit", "") },
                    delete: { color: this.getPropVal("--delete", "#930119"), icon: this.getPropVal("--delete", "") },
                    primary: { color: this.getPropVal("--primary", "#007bff"), icon: this.getPropVal("--primary", "") },
                    secondary: { color: this.getPropVal("--secondary", "#6c757d"), icon: this.getPropVal("--secondary", "") },
                    success: { color: this.getPropVal("--success", "#28a745"), icon: this.getPropVal("--success", "") },
                    danger: { color: this.getPropVal("--danger", "#dc3545"), icon: this.getPropVal("--danger", "") },
                    warning: { color: this.getPropVal("--warning", "#ffc107"), icon: this.getPropVal("--warning", "") },
                    info: { color: this.getPropVal("--info", "#17a2b8"), icon: this.getPropVal("--info", "") },
                    light: { color: this.getPropVal("--light", "#f8f9fa"), icon: this.getPropVal("--light", "") },
                    dark: { color: this.getPropVal("--dark", "#343a40"), icon: this.getPropVal("--dark", "") },
                },
                widths: {
                    a_xs: 350,
                    b_sm: 467,
                    c_md: 603,
                    d_lg: 730,
                    e_xl: 882,
                },
            }, merge);
        }
        return this;
    };
    iziModalWrapGlobalInner.prototype.getSettings = function () {
        this.init();
        return this.globalSettings;
    };
    return iziModalWrapGlobalInner;
}());
var iziModalWrapGlobal = new iziModalWrapGlobalInner();
exports.default = iziModalWrapGlobal;
