"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iziModalWrapGlobal = void 0;
const deepmerge_1 = __importDefault(require("deepmerge"));
let iziModalWrapGlobal = /** @class */ (() => {
    class iziModalWrapGlobal {
        static __getRootStyle() {
            if (!this.__rootStyle) {
                this.__rootStyle = getComputedStyle(document.querySelector('body'));
            }
            return this.__rootStyle;
        }
        static getPropVal(key, _default = '#000') {
            const r = this.__getRootStyle().getPropertyValue("--" + key);
            if (r.length > 0)
                return r;
            return _default;
        }
        static init(merge = {}) {
            if (this.globalSettings)
                throw new Error("Not allowed to trigger iziModalWrapGlobal.init() twice. These settings are meant to be shared between modal instances.");
            const baseSettings = {
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
                theme: {
                    colors: {
                        add: "#2C5937",
                        edit: "#2364AA",
                        delete: "#930119",
                        primary: this.getPropVal("--primary", "#007bff"),
                        secondary: this.getPropVal("--secondary", "#6c757d"),
                        success: this.getPropVal("--success", "#28a745"),
                        danger: this.getPropVal("--danger", "#dc3545"),
                        warning: this.getPropVal("--warning", "#ffc107"),
                        info: this.getPropVal("--info", "#17a2b8"),
                        light: this.getPropVal("--light", "#f8f9fa"),
                        dark: this.getPropVal("--dark", "#343a40"),
                    },
                    icons: {
                        add: "",
                        edit: "",
                        delete: "",
                        primary: "",
                        secondary: "",
                        success: "",
                        danger: "",
                        warning: "",
                        info: "",
                        light: "",
                        dark: "",
                    },
                    widths: {
                        a_xs: 350,
                        b_sm: 467,
                        c_md: 603,
                        d_lg: 730,
                        e_xl: 882,
                    }
                },
            };
            // @ts-ignore.
            this.globalSettings = deepmerge_1.default(baseSettings, merge);
            const meRoot = this;
            return {
                addTheme: function (key, color, icon) {
                    if (meRoot.globalSettings.theme.colors.hasOwnProperty(key)) {
                        throw new Error(`Attempting to add "${key}" twice for iziModalWrapGlobal.customize.addTheme();`);
                    }
                    meRoot.globalSettings.theme.colors[key] = color;
                    meRoot.globalSettings.theme.icons[key] = icon;
                    return this;
                },
                end: () => meRoot,
            };
        }
        static getSettings() {
            return this.globalSettings;
        }
    }
    iziModalWrapGlobal.globalSettings = null;
    iziModalWrapGlobal.__rootStyle = false;
    return iziModalWrapGlobal;
})();
exports.iziModalWrapGlobal = iziModalWrapGlobal;
