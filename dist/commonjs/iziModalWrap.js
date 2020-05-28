"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Hacky way of importing iziModal
// Looking for suggestions.
// This relies on src/@types-internal
const deepmerge_1 = __importDefault(require("deepmerge"));
const iziModalWrapGlobal_1 = require("./Modules/iziModalWrapGlobal");
const InvalidModeIMW_1 = __importDefault(require("./Errors/InvalidModeIMW"));
const InvalidThemeKeyIMW_1 = __importDefault(require("./Errors/InvalidThemeKeyIMW"));
$.fn.iziModal = require("izimodal-1.6.0");
var iziModalWrapGlobal_2 = require("./Modules/iziModalWrapGlobal");
Object.defineProperty(exports, "iziModalWrapGlobal", { enumerable: true, get: function () { return iziModalWrapGlobal_2.iziModalWrapGlobal; } });
class iziModalWrap {
    constructor(config) {
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
        const globalSettings = iziModalWrapGlobal_1.iziModalWrapGlobal.getSettings();
        // Setup: Configs
        if (typeof config === 'string')
            config = { modalId: config };
        this.modal.id = config.modalId;
        this.modal.idSel = '#' + this.modal.id;
        if ($(this.modal.idSel).length === 0)
            $('<body>')
                .append($('<div class="iziModal">').attr("id", this.modal.id));
        this.modal.$ = $(this.modal.idSel);
        // TODO: needs more thorough approach to merging into the internal config so we can drop deepmerge.
        // @ts-ignore.
        this.config = deepmerge_1.default({
            layerUp: 0,
            fullscreen: {
                ifMobile: false,
                forced: false,
            },
            openRightAway: false,
        }, config);
        // Setup: Izi Config Base
        const configIzi = (_a = this.config.iziModalSettings) !== null && _a !== void 0 ? _a : {};
        const prefixId = globalSettings.statics.prefixId;
        // Setup: Modal
        const modalOpenClass = globalSettings.classes.modal.open
            .replace('{prefixId}', prefixId)
            .replace('{modalId}', this.modal.id);
        const modalOpenedClass = globalSettings.classes.modal.opened
            .replace('{prefixId}', prefixId)
            .replace('{modalId}', this.modal.id);
        const $b = $('body');
        // Wrappers: On Fullscreen
        ((onFullscreen) => {
            configIzi.onFullscreen = () => {
                if (onFullscreen)
                    onFullscreen();
                for (let cb of this.listeners.onFullscreen)
                    cb();
            };
        })(configIzi.onFullscreen);
        // Wrappers: On Resize
        ((onResize) => {
            configIzi.onResize = () => {
                if (onResize)
                    onResize();
                for (let cb of this.listeners.onResize)
                    cb();
            };
        })(configIzi.onResize);
        // Wrappers: On Opening
        ((onOpening) => {
            configIzi.onOpening = () => {
                $b
                    .attr('data-' + prefixId + '-n-opened', ($(".iziModal:visible").length + 1))
                    .addClass(globalSettings.classes.modals.open)
                    .addClass(modalOpenClass);
                if (onOpening)
                    onOpening();
                for (let cb of this.listeners.onOpening)
                    cb();
            };
        })(configIzi.onOpening);
        // Wrappers: On Opened
        ((onOpened) => {
            configIzi.onOpened = () => {
                $b.addClass(modalOpenedClass);
                if (onOpened)
                    onOpened();
                for (let cb of this.listeners.onOpened)
                    cb();
            };
        })(configIzi.onOpened);
        // Wrappers: On Closing
        ((onClosing) => {
            configIzi.onClosing = () => {
                this.modal.$.removeClass(globalSettings.classes.modal.opened);
                const visibleAfterClose = ($(".iziModal:visible").length - 1);
                if (visibleAfterClose === 0)
                    $b.removeClass(globalSettings.classes.modals.open);
                $b.removeClass(modalOpenClass);
                if (onClosing)
                    onClosing();
                for (let cb of this.listeners.onClosing)
                    cb();
            };
        })(configIzi.onClosing);
        // Wrappers: On Closed
        ((onClosed) => {
            configIzi.onClosed = () => {
                const visibleAfterClose = $(".iziModal:visible").length;
                if (visibleAfterClose === 0)
                    $b.removeClass(globalSettings.classes.modals.open);
                if (onClosed)
                    onClosed();
                for (let cb of this.listeners.onClosed)
                    cb();
            };
        })(configIzi.onClosed);
        // Wrappers: After Render
        ((afterRender) => {
            configIzi.afterRender = () => {
                if (afterRender)
                    afterRender();
                for (let cb of this.listeners.afterRender)
                    cb();
            };
        })(configIzi.afterRender);
        configIzi.zindex = (globalSettings.statics.layerUpBase + this.config.layerUp);
        this.modal.$.iziModal(config);
        this.modal.$.addClass(globalSettings.classes.modal.setup);
        if (this.config.fullscreen.forced ||
            this.config.fullscreen.ifMobile && (typeof globalSettings.statics.isMobileDevice === 'function' && globalSettings.statics.isMobileDevice() ||
                globalSettings.statics.isMobileDevice))
            this.modal.$.iziModal("setFullscreen", true);
        if (this.config.openRightAway)
            this.modal.$.iziModal("open");
    }
    theme() {
        const meRoot = this;
        const r = {
            it: (modeKey) => {
                if (!meRoot.config.modes.hasOwnProperty(modeKey))
                    throw new InvalidModeIMW_1.default(modeKey);
                const mode = meRoot.config.modes[modeKey];
                const themes = iziModalWrapGlobal_1.iziModalWrapGlobal.getSettings().theme;
                const themeKey = mode.themeKey;
                if (!themes.colors.hasOwnProperty(themeKey))
                    throw new InvalidThemeKeyIMW_1.default(themeKey);
                meRoot.methods()
                    .header.color(themes.colors[themeKey]);
                r.title(mode.title
                    ? (typeof mode.title === 'function'
                        ? mode.title()
                        : mode.title)
                    : '', typeof mode.subtitle === 'function'
                    ? mode.subtitle()
                    : mode.subtitle);
                let themeIcon = mode.iconOverwrite
                    ? (typeof mode.iconOverwrite === 'function' ? mode.iconOverwrite() : mode.iconOverwrite)
                    : (themes.icons.hasOwnProperty(themeKey)
                        ? themes.icons[themeKey]
                        : false);
                if (themeIcon) {
                    r.icon(themeIcon);
                }
                return r;
            },
            title: (title, subTitle) => {
                meRoot.methods().
                    header.headerTitle(title)
                    .header.headerSubtitle(subTitle);
                return r;
            },
            icon: (icon, iconText) => {
                meRoot.methods().
                    header.iconClass(icon)
                    .header.iconText(iconText !== null && iconText !== void 0 ? iconText : '');
                return r;
            },
            end: () => {
                return meRoot;
            }
        };
        return r;
    }
    methods() {
        const meRoot = this;
        const r = {
            groups: {
                get: () => this.modal.$.iziModal('getGroup'),
                set: (to) => {
                    this.modal.$.iziModal('setGroup', to);
                    return r;
                },
                next: (transitionIn, transitionOut) => {
                    this.modal.$.iziModal('next', { transitionIn, transitionOut });
                    return r;
                },
                prev: (transitionIn, transitionOut) => {
                    this.modal.$.iziModal('prev', { transitionIn, transitionOut });
                    return r;
                },
            },
            loading: {
                start: () => {
                    this.modal.$.iziModal('startLoading');
                    return r;
                },
                stop: () => {
                    this.modal.$.iziModal('stopLoading');
                    return r;
                },
            },
            progress: {
                start: () => {
                    this.modal.$.iziModal('startLoading');
                    return r;
                },
                pause: () => {
                    this.modal.$.iziModal('stopLoading');
                    return r;
                },
                resume: () => {
                    this.modal.$.iziModal('stopLoading');
                    return r;
                },
                reset: () => {
                    this.modal.$.iziModal('stopLoading');
                    return r;
                },
            },
            position: {
                top: (to) => {
                    this.modal.$.iziModal('setTop', to);
                    return r;
                },
                bottom: (to) => {
                    this.modal.$.iziModal('setBottom', 100);
                    return r;
                },
                width: (to) => {
                    this.modal.$.iziModal('setWidth', to);
                    return r;
                },
                zIndex: (to) => {
                    this.modal.$.iziModal('setZindex', to);
                    return r;
                },
            },
            header: {
                color: (to) => {
                    this.modal.$.iziModal('setHeaderColor', to);
                    return r;
                },
                enable: () => {
                    this.modal.$.iziModal('setHeader', true);
                    return r;
                },
                disable: () => {
                    this.modal.$.iziModal('setHeader', false);
                    return r;
                },
                iconClass: to => {
                    this.modal.$.iziModal('setIcon', to);
                    return r;
                },
                iconText: to => {
                    this.modal.$.iziModal('setIconText', to);
                    return r;
                },
                headerTitle: to => {
                    this.modal.$.iziModal('setTitle', to);
                    return r;
                },
                headerSubtitle: to => {
                    this.modal.$.iziModal('setSubtitle', to !== null && to !== void 0 ? to : '');
                    return r;
                },
            },
            content: {
                backgroundColor: (to) => {
                    this.modal.$.iziModal('setBackground', to);
                    return r;
                },
                set: (content, isDefault = true) => {
                    this.modal.$.iziModal('setContent', {
                        content,
                        default: isDefault
                    });
                    return r;
                },
                reset: () => {
                    this.modal.$.iziModal('resetContent');
                    return r;
                }
            },
            animations: {
                transitionIn: to => {
                    this.modal.$.iziModal('setTransitionIn', to);
                    return r;
                },
                transitionOut: to => {
                    this.modal.$.iziModal('setTransitionOut', to);
                    return r;
                },
            },
            display: {
                get: () => this.modal.$.iziModal('getState'),
                fullscreen: (enable = false) => {
                    this.modal.$.iziModal('setFullscreen', enable);
                    return r;
                },
                toggle: () => {
                    this.modal.$.iziModal('toggle');
                    return r;
                },
                open: () => {
                    this.modal.$.iziModal('open');
                    return r;
                },
                close: () => {
                    this.modal.$.iziModal('close');
                    return r;
                }
            },
            end() {
                return meRoot;
            }
        };
        return r;
    }
    on(listen, cb, toFront = false) {
        let key = false;
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
    }
    // Raw Method Applies
    applyMethod(method, options) {
        return this.modal.$.iziModal(method, options);
    }
    applyMethods(apply) {
        Object.keys(apply).forEach((method) => {
            this.applyMethod(method, apply[method]);
        });
    }
}
exports.default = iziModalWrap;
