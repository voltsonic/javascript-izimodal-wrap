"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../Typings/iziModal.d.ts" />
var ThemeModule_1 = require("./ModalModules/ThemeModule");
/* tslint:disable */
// @ts-ignore
var iziModal = require("izimodal-1.6.0");
/* tslint:enable */
$.fn.iziModal = iziModal;
var ApiModule_1 = require("./ModalModules/ApiModule");
var deepmerge = require("deepmerge");
var iziModalWrap;
(function (iziModalWrap) {
    var BodyStyles = /** @class */ (function () {
        function BodyStyles() {
        }
        BodyStyles.getStyle = function (which, fallbackColor) {
            if (this.bodyStyle === false)
                this.bodyStyle = getComputedStyle(document.body);
            var test = this.bodyStyle.getPropertyValue(which);
            return (test.length > 0) ? test : fallbackColor;
        };
        BodyStyles.bodyStyle = false;
        return BodyStyles;
    }());
    var ThemesCore = ["add", "edit", "delete", "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
    var TemplateKeys = {
        modalIdKey: '{modalIdKey}'
    };
    /**
     * @access from class wrapper in @see
     * @see GlobalSettings|GlobalConfigure
     */
    var globalSettings = {
        classes: {
            modals: {
                open: "modal-izi-open"
            },
            modal: {
                open: "modal-izi-open-" + TemplateKeys.modalIdKey,
                opened: "modal-izi-has-opened",
                setup: "modal-izi-ran"
            }
        },
        layerUpBase: 1072,
        mobileMode: false,
        modalIdPrefix: "modal-izi-" + TemplateKeys.modalIdKey,
        theme: {
            colors: {
                add: "#2C5937",
                edit: "#2364AA",
                delete: "#930119",
                primary: BodyStyles.getStyle("--primary", "#007bff"),
                secondary: BodyStyles.getStyle("--secondary", "#6c757d"),
                success: BodyStyles.getStyle("--success", "#28a745"),
                danger: BodyStyles.getStyle("--danger", "#dc3545"),
                warning: BodyStyles.getStyle("--warning", "#ffc107"),
                info: BodyStyles.getStyle("--info", "#17a2b8"),
                light: BodyStyles.getStyle("--light", "#f8f9fa"),
                dark: BodyStyles.getStyle("--dark", "#343a40"),
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
        themeBase: "add"
    };
    var iziModalSettings = {
        focusInput: false,
        transitionIn: "fadeInUp",
        transitionOut: "fadeOutDown"
    };
    var GlobalSettings = /** @class */ (function () {
        function GlobalSettings() {
        }
        GlobalSettings.classes = {
            modal: {
                open: function (modalIdKey) { return globalSettings.classes.modal.open.replace(TemplateKeys.modalIdKey, modalIdKey); },
            }
        };
        GlobalSettings.modalIdPrefix = function (modalIdKey) { return globalSettings.modalIdPrefix.replace(TemplateKeys.modalIdKey, modalIdKey); };
        return GlobalSettings;
    }());
    var GlobalConfigure = /** @class */ (function () {
        function GlobalConfigure() {
        }
        GlobalConfigure.updateModals = function () { };
        GlobalConfigure.any = function (to) {
            // @ts-ignore
            globalSettings = deepmerge(globalSettings, to);
            this.updateModals();
            return this;
        };
        GlobalConfigure.addTheme = function (key, color, icon) {
            if (!color && !icon)
                throw new Error("Either color or icon is required.");
            if (ThemesCore.filter(function (v) { return (key === v); }).length > 0)
                throw new Error("Key " + key + " already exists.");
            if (color)
                globalSettings.theme.colors[key] = color;
            if (icon)
                globalSettings.theme.icons[key] = icon;
            this.updateModals();
            return this;
        };
        GlobalConfigure.izi = function (to) {
            iziModalSettings = deepmerge(iziModalSettings, to);
            return this;
        };
        return GlobalConfigure;
    }());
    iziModalWrap.GlobalConfigure = GlobalConfigure;
    var ModalMaps = {};
    var Modal = /** @class */ (function () {
        function Modal(config, iziModalSettings) {
            if (!iziModalSettings)
                iziModalSettings = {};
            this.config = deepmerge({
                layerUp: 0,
                fullscreenIfMobile: false,
                fullscreenForced: false,
                openRightAway: false,
            }, config);
            this.modalIdKey = GlobalSettings.modalIdPrefix(this.config.modalId);
            this.modalIdSel = '#' + this.modalIdKey;
            this.modalOpenClass = GlobalSettings.classes.modal.open(this.config.modalId);
            this._setupModal();
            this._setup(iziModalSettings);
            ModalMaps[config.modalId] = this;
            this.api = new ApiModule_1.ApiModule(this, globalSettings);
            this.theme = new ThemeModule_1.ThemeModule(this, globalSettings);
        }
        // Setup: Modal UI
        Modal.prototype._setupModal = function () {
            if ($(this.modalIdSel).length === 0)
                $('<body>')
                    .append($('<div class="iziModal">').attr("id", this.modalIdKey));
        };
        // Setup: iziModal
        Modal.prototype._setup = function (iziModalSettings) {
            var _this = this;
            var ConfigMaster = deepmerge(iziModalSettings, iziModalSettings);
            $(this.modalIdSel).addClass(globalSettings.classes.modal.setup);
            // Wrappers: On Opening
            (function (onOpening) {
                ConfigMaster.onOpening = function () {
                    $('body')
                        .addClass(globalSettings.classes.modals.open)
                        .addClass(_this.modalOpenClass);
                    if (typeof onOpening === "function")
                        onOpening();
                };
            })(ConfigMaster.onOpening);
            // Wrappers: On Closing
            (function (onClosing) {
                ConfigMaster.onClosing = function () {
                    $(_this.modalIdSel).addClass(globalSettings.classes.modal.opened);
                    var $b = $("<body>");
                    if ($(".iziModal:visible").length === 1)
                        $b.removeClass(globalSettings.classes.modals.open);
                    $b.removeClass(_this.modalOpenClass);
                    $('body')
                        .addClass(globalSettings.classes.modals.open)
                        .addClass(_this.modalOpenClass);
                    if (typeof onClosing === "function")
                        onClosing();
                };
            })(ConfigMaster.onClosing);
            ConfigMaster.zindex = (globalSettings.layerUpBase + this.config.layerUp);
            $(this.modalIdSel).iziModal(ConfigMaster);
            if (this.config.fullscreenForced || this.config.fullscreenIfMobile && globalSettings.mobileMode)
                $(this.modalIdSel).iziModal("setFullscreen", true);
            if (this.config.openRightAway)
                $(this.modalIdSel).iziModal("open");
        };
        Modal.prototype.applyMethod = function (method, options) {
            return $(this.modalIdSel).iziModal(method, options);
        };
        Modal.prototype.applyMethods = function (apply) {
            var _this = this;
            Object.keys(apply).forEach(function (method) {
                _this.applyMethod(method, apply[method]);
            });
        };
        return Modal;
    }());
    iziModalWrap.Modal = Modal;
    iziModalWrap.Get = function (modalId) {
        if (!ModalMaps.hasOwnProperty(modalId))
            throw new Error(modalId + " not loaded, please Init() modal.");
        return ModalMaps[modalId];
    };
})(iziModalWrap = exports.iziModalWrap || (exports.iziModalWrap = {}));
