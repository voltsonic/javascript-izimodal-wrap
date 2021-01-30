'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.iziModalWrapGlobal = exports.iziModalWrapGlobalInner = void 0;
var MergeDeep_1 = require("./Utils/MergeDeep");
var BodyTagErrorIMW_1 = require("./Errors/BodyTagErrorIMW");
var ThemeExistsErrorIMW_1 = require("./Errors/ThemeExistsErrorIMW");
/**
 * iziModalWrapGlobal class.
 *
 * @internal
 * @summary
 * This is the main way to add/change/update global settings.
 *
 * @example TS // Basic example.
 * ```ts
 * import iziModalWrap from 'izimodal-wrap';
 * iziModalWrap.globals.addTheme();
 * ```
 */
// tslint:disable-next-line:class-name
var iziModalWrapGlobalInner = /** @class */ (function () {
    /**
     * @hidden
     */
    // tslint:disable-next-line:no-empty
    function iziModalWrapGlobalInner() {
        /**
         * @hidden
         */
        this.__init = false;
        /**
         * @hidden
         */
        this.__rootStyle = false;
    }
    iziModalWrapGlobalInner.prototype.getBodyStyle = function (reset) {
        if (reset === void 0) { reset = false; }
        if (!this.__rootStyle || reset) {
            var body = document.querySelector('body');
            if (body !== null && body) {
                this.__rootStyle = getComputedStyle(body);
            }
            else {
                throw new BodyTagErrorIMW_1.BodyTagErrorIMW();
            }
        }
        return this.__rootStyle;
    };
    /**
     * @hidden
     */
    iziModalWrapGlobalInner.prototype.getPropVal = function (key, _default) {
        if (_default === void 0) { _default = '#000'; }
        // console.log(this.__getRootStyle());
        var r = this.getBodyStyle().getPropertyValue('--' + key);
        if (r.length > 0)
            return r;
        return _default;
    };
    iziModalWrapGlobalInner.prototype.getTheme = function (key) {
        this.init();
        if (this.globalSettings.themes.hasOwnProperty(key))
            return this.globalSettings.themes[key];
        return undefined;
    };
    iziModalWrapGlobalInner.prototype.addTheme = function (key, color, icon, title, subtitle) {
        this.init();
        if (this.globalSettings.themes.hasOwnProperty(key))
            throw new ThemeExistsErrorIMW_1.ThemeExistsErrorIMW(key);
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
            this.globalSettings = MergeDeep_1.MergeDeep.combine({
                classes: {
                    modals: {
                        open: '{prefixId}-open'
                    },
                    modal: {
                        open: '{prefixId}-open-{modalId}',
                        opened: '{prefixId}-opened-{modalId}',
                        setup: '{prefixId}-ran-{modalId}'
                    }
                },
                statics: {
                    prefixId: 'izimw',
                    isMobileDevice: false,
                    layerUpBase: 1072,
                },
                themes: {
                    add: { color: this.getPropVal('--add', '#2C5937'), icon: this.getPropVal('--add-ico', '') },
                    edit: { color: this.getPropVal('--edit', '#2364AA'), icon: this.getPropVal('--edit-ico', '') },
                    delete: { color: this.getPropVal('--delete', '#930119'), icon: this.getPropVal('--delete-ico', '') },
                    primary: { color: this.getPropVal('--primary', '#007bff'), icon: this.getPropVal('--primary-ico', '') },
                    secondary: { color: this.getPropVal('--secondary', '#6c757d'), icon: this.getPropVal('--secondary-ico', '') },
                    success: { color: this.getPropVal('--success', '#28a745'), icon: this.getPropVal('--success-ico', '') },
                    danger: { color: this.getPropVal('--danger', '#dc3545'), icon: this.getPropVal('--danger-ico', '') },
                    warning: { color: this.getPropVal('--warning', '#ffc107'), icon: this.getPropVal('--warning-ico', '') },
                    info: { color: this.getPropVal('--info', '#17a2b8'), icon: this.getPropVal('--info-ico', '') },
                    light: { color: this.getPropVal('--light', '#f8f9fa'), icon: this.getPropVal('--light-ico', '') },
                    dark: { color: this.getPropVal('--dark', '#343a40'), icon: this.getPropVal('--dark-ico', '') },
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
exports.iziModalWrapGlobalInner = iziModalWrapGlobalInner;
exports.iziModalWrapGlobal = new iziModalWrapGlobalInner();
//# sourceMappingURL=iziModalWrapGlobal.js.map