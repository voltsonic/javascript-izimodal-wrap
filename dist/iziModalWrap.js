'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var ModMethod_1 = require("./Modules/ModMethod");
var MergeDeep_1 = require("./Utils/MergeDeep");
var iziModalWrapGlobal_1 = require("./iziModalWrapGlobal");
var ModTheme_1 = require("./Modules/ModTheme");
// Hacky way of importing iziModal
// Looking for suggestions.
// This relies on src/@types-internal
// @ts-ignore
var izimodal_1_6_0_1 = __importDefault(require("izimodal-1.6.0"));
jquery_1.default.fn.extend({ iziModal: izimodal_1_6_0_1.default });
/**
 * iziModalWrap constructor.
 *
 * @summary
 * This is the main entrypoint class for wrapping around modals.
 *
 * @example TS // Basic example.
 * ```ts
 * import iziModalWrap from 'izimodal-wrap';
 * const modal = new iziModalWrap('modal-id');
 * ```
 */
// tslint:disable-next-line:class-name
var iziModalWrap = /** @class */ (function () {
    function iziModalWrap(config) {
        var _this = this;
        var _a, _b, _c;
        /**
         * @hidden
         */
        this.listeners = {
            onFullscreen: [],
            onResize: [],
            onOpening: [],
            onOpened: [],
            onClosing: [],
            onClosed: [],
            afterRender: []
        };
        this.modal = {
            id: '',
            idSel: '',
            // @ts-ignore
            $: undefined
        };
        var globalSettings = iziModalWrapGlobal_1.iziModalWrapGlobal.getSettings();
        // Setup: Configs
        if (typeof config === 'string')
            config = { modalId: config };
        var prefixId = iziModalWrapGlobal_1.iziModalWrapGlobal.getSettings().statics.prefixId;
        this.modal.id = (prefixId.length > 0
            ? (prefixId + '-')
            : '') +
            config.modalId;
        this.modal.idSel = '#' + this.modal.id;
        if (jquery_1.default(this.modal.idSel).length === 0) {
            var e = document.createElement('div');
            e.classList.add('iziModal');
            e.id = this.modal.id;
            document.getElementsByTagName('body')[0].appendChild(e);
        }
        this.modal.$ = jquery_1.default(this.modal.idSel);
        this.methods = new ModMethod_1.ModMethod(this);
        this.theme = new ModTheme_1.ModTheme(this);
        this.config = MergeDeep_1.MergeDeep.combine({
            layerUp: 0,
            fullscreen: {
                ifMobile: false,
                forced: false,
            },
            openRightAway: false,
        }, config);
        // Setup: Izi Config Base
        var configIzi = (_a = this.config.iziModalSettings) !== null && _a !== void 0 ? _a : {};
        // Setup: Modal
        var modalOpenClass = this.setupClass((_c = (_b = globalSettings.classes) === null || _b === void 0 ? void 0 : _b.modal) === null || _c === void 0 ? void 0 : _c.open);
        var modalOpenedClass = this.setupClass(globalSettings.classes.modal.opened);
        var $b = jquery_1.default('body');
        // Wrappers: On Fullscreen
        (function (onFullscreen) {
            configIzi.onFullscreen = function () {
                var _a;
                if (onFullscreen)
                    onFullscreen();
                if ((_a = _this.config.events) === null || _a === void 0 ? void 0 : _a.fullscreen)
                    _this.config.events.fullscreen();
                if (_this.listeners.onFullscreen)
                    for (var _i = 0, _b = _this.listeners.onFullscreen; _i < _b.length; _i++) {
                        var cb = _b[_i];
                        cb();
                    }
            };
        })(configIzi.onFullscreen);
        // Wrappers: On Resize
        (function (onResize) {
            configIzi.onResize = function () {
                var _a;
                if (onResize)
                    onResize();
                if ((_a = _this.config.events) === null || _a === void 0 ? void 0 : _a.resize)
                    _this.config.events.resize();
                if (_this.listeners.onResize)
                    for (var _i = 0, _b = _this.listeners.onResize; _i < _b.length; _i++) {
                        var cb = _b[_i];
                        cb();
                    }
            };
        })(configIzi.onResize);
        // Wrappers: On Opening
        (function (onOpening) {
            configIzi.onOpening = function () {
                var _a;
                $b
                    .attr('data-' + prefixId + '-n-opened', (jquery_1.default('.iziModal:visible').length + 1))
                    .addClass(_this.setupClass(globalSettings.classes.modals.open))
                    .addClass(modalOpenClass);
                if (onOpening)
                    onOpening();
                if ((_a = _this.config.events) === null || _a === void 0 ? void 0 : _a.opening)
                    _this.config.events.opening();
                if (_this.listeners.onOpening)
                    for (var _i = 0, _b = _this.listeners.onOpening; _i < _b.length; _i++) {
                        var cb = _b[_i];
                        cb();
                    }
            };
        })(configIzi.onOpening);
        // Wrappers: On Opened
        (function (onOpened) {
            configIzi.onOpened = function () {
                var _a;
                $b.addClass(modalOpenedClass);
                if (onOpened)
                    onOpened();
                if ((_a = _this.config.events) === null || _a === void 0 ? void 0 : _a.opened)
                    _this.config.events.opened();
                if (_this.listeners.onOpened)
                    for (var _i = 0, _b = _this.listeners.onOpened; _i < _b.length; _i++) {
                        var cb = _b[_i];
                        cb();
                    }
            };
        })(configIzi.onOpened);
        // Wrappers: On Closing
        (function (onClosing) {
            configIzi.onClosing = function () {
                var _a;
                _this.modal.$.removeClass(modalOpenedClass);
                var visibleAfterClose = (jquery_1.default('.iziModal:visible').length - 1);
                if (visibleAfterClose === 0)
                    $b.removeClass(_this.setupClass(globalSettings.classes.modals.open));
                $b.removeClass(modalOpenClass);
                if (onClosing)
                    onClosing();
                if ((_a = _this.config.events) === null || _a === void 0 ? void 0 : _a.closing)
                    _this.config.events.closing();
                if (_this.listeners.onClosing)
                    for (var _i = 0, _b = _this.listeners.onClosing; _i < _b.length; _i++) {
                        var cb = _b[_i];
                        cb();
                    }
            };
        })(configIzi.onClosing);
        // Wrappers: On Closed
        (function (onClosed) {
            configIzi.onClosed = function () {
                var _a;
                var visibleAfterClose = jquery_1.default('.iziModal:visible').length;
                if (visibleAfterClose === 0)
                    $b.removeClass(_this.setupClass(globalSettings.classes.modals.open));
                if (onClosed)
                    onClosed();
                if ((_a = _this.config.events) === null || _a === void 0 ? void 0 : _a.closed)
                    _this.config.events.closed();
                if (_this.listeners.onClosed)
                    for (var _i = 0, _b = _this.listeners.onClosed; _i < _b.length; _i++) {
                        var cb = _b[_i];
                        cb();
                    }
            };
        })(configIzi.onClosed);
        // Wrappers: After Render
        (function (afterRender) {
            configIzi.afterRender = function () {
                var _a;
                if (afterRender)
                    afterRender();
                if ((_a = _this.config.events) === null || _a === void 0 ? void 0 : _a.after_render)
                    _this.config.events.after_render();
                if (_this.listeners.afterRender)
                    for (var _i = 0, _b = _this.listeners.afterRender; _i < _b.length; _i++) {
                        var cb = _b[_i];
                        cb();
                    }
            };
        })(configIzi.afterRender);
        configIzi.zindex = (globalSettings.statics.layerUpBase + this.config.layerUp);
        this.modal.$.iziModal(configIzi);
        this.modal.$.addClass(this.setupClass(globalSettings.classes.modal.setup));
        if (this.config.fullscreen.forced ||
            this.config.fullscreen.ifMobile && (typeof globalSettings.statics.isMobileDevice === 'function' && globalSettings.statics.isMobileDevice() ||
                globalSettings.statics.isMobileDevice))
            this.modal.$.iziModal('setFullscreen', true);
        if (this.config.openRightAway)
            this.modal.$.iziModal('open');
    }
    /**
     * @hidden
     */
    iziModalWrap.prototype.setupClass = function (classTemplate) {
        return classTemplate
            .replace('{prefixId}', iziModalWrapGlobal_1.iziModalWrapGlobal.getSettings().statics.prefixId)
            .replace('{modalId}', this.config.modalId);
    };
    iziModalWrap.prototype.on = function (listen, cb, toFront) {
        if (toFront === void 0) { toFront = false; }
        var key = false;
        switch (listen) {
            case 'fullscreen':
                key = 'onFullscreen';
                break;
            case 'resize':
                key = 'onResize';
                break;
            case 'opening':
                key = 'onOpening';
                break;
            case 'opened':
                key = 'onOpened';
                break;
            case 'closing':
                key = 'onClosing';
                break;
            case 'closed':
                key = 'onClosed';
                break;
            case 'after_render':
                key = 'afterRender';
                break;
        }
        if (toFront)
            // @ts-ignore
            this.listeners[key].unshift(cb);
        else
            // @ts-ignore
            this.listeners[key].push(cb);
        return this;
    };
    // Raw Method Applies
    iziModalWrap.prototype.applyMethodRaw = function (method, options) {
        return this.modal.$.iziModal(method, options);
    };
    iziModalWrap.prototype.applyMethodsRaw = function (apply) {
        var _this = this;
        Object.keys(apply).forEach(function (method) {
            _this.applyMethodRaw(method, apply[method]);
        });
    };
    iziModalWrap.VERSION = '1.0.1-1';
    iziModalWrap.globals = iziModalWrapGlobal_1.iziModalWrapGlobal;
    return iziModalWrap;
}());
exports.default = iziModalWrap;
//# sourceMappingURL=iziModalWrap.js.map