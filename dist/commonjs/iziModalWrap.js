"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const iziModalWrapGlobalInner = require('./iziModalWrapGlobal');
var iziWrapMethods_1 = __importDefault(require("./Modules/iziWrapMethods"));
var MergeDeep_1 = __importDefault(require("./Utils/MergeDeep"));
var iziModalWrapGlobal_1 = __importDefault(require("./iziModalWrapGlobal"));
var iziWrapTheme_1 = __importDefault(require("./Modules/iziWrapTheme"));
// Hacky way of importing iziModal
// Looking for suggestions.
// This relies on src/@types-internal
$.fn.iziModal = require("izimodal-1.6.0");
var iziModalWrap = /** @class */ (function () {
    function iziModalWrap(config) {
        var _this = this;
        var _a;
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
            $: undefined
        };
        var globalSettings = iziModalWrapGlobal_1.default.getSettings();
        // Setup: Configs
        if (typeof config === 'string')
            config = { modalId: config };
        this.modal.id = (globalSettings.statics.prefixId.length > 0
            ? (globalSettings.statics.prefixId + '-')
            : '') +
            config.modalId;
        this.modal.idSel = '#' + this.modal.id;
        if ($(this.modal.idSel).length === 0) {
            var e = document.createElement('div');
            e.classList.add('iziModal');
            e.id = this.modal.id;
            document.getElementsByTagName('body')[0].appendChild(e);
        }
        this.modal.$ = $(this.modal.idSel);
        this.methods = new iziWrapMethods_1.default(this);
        this.theme = new iziWrapTheme_1.default(this);
        this.config = MergeDeep_1.default.combine({
            layerUp: 0,
            fullscreen: {
                ifMobile: false,
                forced: false,
            },
            openRightAway: false,
        }, config);
        // Setup: Izi Config Base
        var configIzi = (_a = this.config.iziModalSettings) !== null && _a !== void 0 ? _a : {};
        var prefixId = globalSettings.statics.prefixId;
        // Setup: Modal
        var modalOpenClass = this.setupClass(globalSettings.classes.modal.open);
        var modalOpenedClass = this.setupClass(globalSettings.classes.modal.opened);
        var $b = $('body');
        // Wrappers: On Fullscreen
        (function (onFullscreen) {
            configIzi.onFullscreen = function () {
                if (onFullscreen)
                    onFullscreen();
                for (var _i = 0, _a = _this.listeners.onFullscreen; _i < _a.length; _i++) {
                    var cb = _a[_i];
                    cb();
                }
            };
        })(configIzi.onFullscreen);
        // Wrappers: On Resize
        (function (onResize) {
            configIzi.onResize = function () {
                if (onResize)
                    onResize();
                for (var _i = 0, _a = _this.listeners.onResize; _i < _a.length; _i++) {
                    var cb = _a[_i];
                    cb();
                }
            };
        })(configIzi.onResize);
        // Wrappers: On Opening
        (function (onOpening) {
            configIzi.onOpening = function () {
                $b
                    .attr('data-' + prefixId + '-n-opened', ($(".iziModal:visible").length + 1))
                    .addClass(_this.setupClass(globalSettings.classes.modals.open))
                    .addClass(modalOpenClass);
                if (onOpening)
                    onOpening();
                for (var _i = 0, _a = _this.listeners.onOpening; _i < _a.length; _i++) {
                    var cb = _a[_i];
                    cb();
                }
            };
        })(configIzi.onOpening);
        // Wrappers: On Opened
        (function (onOpened) {
            configIzi.onOpened = function () {
                $b.addClass(modalOpenedClass);
                if (onOpened)
                    onOpened();
                for (var _i = 0, _a = _this.listeners.onOpened; _i < _a.length; _i++) {
                    var cb = _a[_i];
                    cb();
                }
            };
        })(configIzi.onOpened);
        // Wrappers: On Closing
        (function (onClosing) {
            configIzi.onClosing = function () {
                _this.modal.$.removeClass(modalOpenedClass);
                var visibleAfterClose = ($(".iziModal:visible").length - 1);
                if (visibleAfterClose === 0)
                    $b.removeClass(_this.setupClass(globalSettings.classes.modals.open));
                $b.removeClass(modalOpenClass);
                if (onClosing)
                    onClosing();
                for (var _i = 0, _a = _this.listeners.onClosing; _i < _a.length; _i++) {
                    var cb = _a[_i];
                    cb();
                }
            };
        })(configIzi.onClosing);
        // Wrappers: On Closed
        (function (onClosed) {
            configIzi.onClosed = function () {
                var visibleAfterClose = $(".iziModal:visible").length;
                if (visibleAfterClose === 0)
                    $b.removeClass(_this.setupClass(globalSettings.classes.modals.open));
                if (onClosed)
                    onClosed();
                for (var _i = 0, _a = _this.listeners.onClosed; _i < _a.length; _i++) {
                    var cb = _a[_i];
                    cb();
                }
            };
        })(configIzi.onClosed);
        // Wrappers: After Render
        (function (afterRender) {
            configIzi.afterRender = function () {
                if (afterRender)
                    afterRender();
                for (var _i = 0, _a = _this.listeners.afterRender; _i < _a.length; _i++) {
                    var cb = _a[_i];
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
            this.modal.$.iziModal("setFullscreen", true);
        if (this.config.openRightAway)
            this.modal.$.iziModal("open");
        if (config.events)
            for (var eventKey in config.events)
                if (config.events.hasOwnProperty(eventKey)) {
                    // @ts-ignore.
                    this.on(eventKey, config.events[eventKey]);
                }
    }
    iziModalWrap.prototype.setupClass = function (classTemplate) {
        var globalSettings = iziModalWrapGlobal_1.default.getSettings();
        return classTemplate
            .replace('{prefixId}', globalSettings.statics.prefixId)
            .replace('{modalId}', this.config.modalId);
    };
    iziModalWrap.prototype.on = function (listen, cb, toFront) {
        if (toFront === void 0) { toFront = false; }
        var key = false;
        switch (listen) {
            case "fullscreen":
                key = 'onFullscreen';
                break;
            case "resize":
                key = 'onResize';
                break;
            case "opening":
                key = 'onOpening';
                break;
            case "opened":
                key = 'onOpened';
                break;
            case "closing":
                key = 'onClosing';
                break;
            case "closed":
                key = 'onClosed';
                break;
            case "after_render":
                key = 'afterRender';
                break;
        }
        if (toFront)
            this.listeners[key].unshift(cb);
        else
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
    return iziModalWrap;
}());
exports.default = iziModalWrap;
