"use strict";

// Hacky way of importing iziModal
// Looking for suggestions.
// This relies on src/@types-internal
import deepmerge from "deepmerge";
import {iziModalWrapGlobal} from "./Modules/iziModalWrapGlobal";
import InvalidModeIMW from "./Errors/InvalidModeIMW";
import InvalidThemeKeyIMW from "./Errors/InvalidThemeKeyIMW";

$.fn.iziModal = require("izimodal-1.6.0");

interface IModalWrapConfigInternal {
    modalId: string,
    layerUp: number,
    modes: {
        [mode: string]: {
            themeKey: string,
            title?: string | (() => string),
            subtitle?: string | (() => string),
            /**
             * This value should be setup in iziModalWrapGlobal.init().addTheme(); but can be dynamically overwritten here.
             */
            iconOverwrite?: string | (() => string),
        },
    },
    fullscreen: {
        ifMobile: boolean,
        forced: boolean
    },
    openRightAway: boolean,
    iziModalSettings: IziModalSettings,
}
export type TModalWrapConfigMerge = string | {
    modalId: string,
    layerUp?: number,
    modes?: {
        [mode: string]: {
            themeKey: string,
            title?: string | (() => string),
            subtitle?: string | (() => string),
            /**
             * This value should be setup in iziModalWrapGlobal.init().addTheme(); but can be dynamically overwritten here.
             */
            iconOverwrite?: string | (() => string),
        },
    },
    fullscreen?: {
        ifMobile?: boolean,
        forced?: boolean
    },
    openRightAway?: boolean,
    iziModalSettings?: IziModalSettings,
}

interface IModalSelectors {
    id: string,
    idSel: string,
    $?: JQuery<HTMLElement>
}

export {iziModalWrapGlobal} from "./Modules/iziModalWrapGlobal";

export default class iziModalWrap {
    protected listeners: TiziModalListeners = {
        onFullscreen: [],
        onResize: [],
        onOpening: [],
        onOpened: [],
        onClosing: [],
        onClosed: [],
        afterRender: []
    };

    public modal: IModalSelectors = {
        id: '',
        idSel: '',
        $: undefined
    };
    protected config: IModalWrapConfigInternal;

    constructor(config: TModalWrapConfigMerge){
        const globalSettings = iziModalWrapGlobal.getSettings();

        // Setup: Configs
        if(typeof config === 'string')
            config = { modalId: config };

        this.modal.id = config.modalId;
        this.modal.idSel = '#'+this.modal.id;
        if($(this.modal.idSel).length === 0)
            $('<body>')
                .append($('<div class="iziModal">').attr("id", this.modal.id));
        this.modal.$ = $(this.modal.idSel);

        // TODO: needs more thorough approach to merging into the internal config so we can drop deepmerge.
        // @ts-ignore.
        this.config = deepmerge({
            layerUp: 0,
            fullscreen: {
                ifMobile: false,
                forced: false,
            },
            openRightAway: false,
        }, config);

        // Setup: Izi Config Base
        const configIzi: IziModalSettings = this.config.iziModalSettings ?? {};
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
        ((onFullscreen?: TOnFullScreenCallback) => {
            configIzi.onFullscreen = () => {
                if(onFullscreen) onFullscreen();
                for(let cb of this.listeners.onFullscreen) cb();
            };
        })(configIzi.onFullscreen);

        // Wrappers: On Resize
        ((onResize?: TOnResizeCallback) => {
            configIzi.onResize = () => {
                if(onResize) onResize();
                for(let cb of this.listeners.onResize) cb();
            };
        })(configIzi.onResize);

        // Wrappers: On Opening
        ((onOpening?: TOnOpeningCallback) => {
            configIzi.onOpening = () => {
                $b
                    .attr('data-'+prefixId+'-n-opened', ($(".iziModal:visible").length + 1))
                    .addClass(globalSettings.classes.modals.open)
                    .addClass(modalOpenClass);
                if(onOpening) onOpening();
                for(let cb of this.listeners.onOpening) cb();
            };
        })(configIzi.onOpening);

        // Wrappers: On Opened
        ((onOpened?: TOnOpenedCallback) => {
            configIzi.onOpened = () => {
                $b.addClass(modalOpenedClass);
                if(onOpened) onOpened();
                for(let cb of this.listeners.onOpened) cb();
            };
        })(configIzi.onOpened);

        // Wrappers: On Closing
        ((onClosing?: TOnClosingCallback) => {
            configIzi.onClosing = () => {
                this.modal.$.removeClass(globalSettings.classes.modal.opened);

                const visibleAfterClose = ($(".iziModal:visible").length - 1);
                
                if(visibleAfterClose === 0)
                    $b.removeClass(globalSettings.classes.modals.open);

                $b.removeClass(modalOpenClass);

                if(onClosing) onClosing();
                for(let cb of this.listeners.onClosing) cb();
            };
        })(configIzi.onClosing);

        // Wrappers: On Closed
        ((onClosed: TOnClosedCallback) => {
            configIzi.onClosed = () => {
                const visibleAfterClose = $(".iziModal:visible").length;

                if (visibleAfterClose === 0)
                    $b.removeClass(globalSettings.classes.modals.open);

                if (onClosed) onClosed();
                for (let cb of this.listeners.onClosed) cb();
            };
        })(configIzi.onClosed);

        // Wrappers: After Render
        ((afterRender?: TAfterRenderCallback) => {
            configIzi.afterRender = () => {
                if(afterRender) afterRender();
                for(let cb of this.listeners.afterRender) cb();
            };
        })(configIzi.afterRender);

        configIzi.zindex = (globalSettings.statics.layerUpBase + this.config.layerUp);

        this.modal.$.iziModal(config);
        this.modal.$.addClass(globalSettings.classes.modal.setup);

        if(
            this.config.fullscreen.forced ||
            this.config.fullscreen.ifMobile && (
                typeof globalSettings.statics.isMobileDevice === 'function' && globalSettings.statics.isMobileDevice() ||
                globalSettings.statics.isMobileDevice
            ))
            this.modal.$.iziModal("setFullscreen", true);

        if(this.config.openRightAway)
            this.modal.$.iziModal("open");
    }

    theme(): iziModalWrapThemeWrap {
        const meRoot = this;
        const r: iziModalWrapThemeWrap = {
            it: (modeKey: string): iziModalWrapThemeWrap => {
                if(!meRoot.config.modes.hasOwnProperty(modeKey))
                    throw new InvalidModeIMW(modeKey);
                const mode = meRoot.config.modes[modeKey];
                const themes = iziModalWrapGlobal.getSettings().theme;
                const themeKey = mode.themeKey;
                if(!themes.colors.hasOwnProperty(themeKey))
                    throw new InvalidThemeKeyIMW(themeKey);

                meRoot.methods()
                    .header.color(themes.colors[themeKey])
                ;

                r.title(
                    mode.title
                        ? (typeof mode.title === 'function'
                            ? mode.title()
                            : mode.title
                        )
                        : '',
                    typeof mode.subtitle === 'function'
                        ? mode.subtitle()
                        : mode.subtitle
                );
                let themeIcon: false | string = mode.iconOverwrite
                    ? (typeof mode.iconOverwrite === 'function' ? mode.iconOverwrite() : mode.iconOverwrite)
                    : (themes.icons.hasOwnProperty(themeKey)
                        ? themes.icons[themeKey]
                        : false)
                ;

                if(themeIcon){
                    r.icon(themeIcon)
                }

                return r;
            },
            title: (title: string, subTitle?: string): iziModalWrapThemeWrap => {
                meRoot.methods().
                    header.headerTitle(title)
                    .header.headerSubtitle(subTitle)
                return r;
            },
            icon: (icon: string, iconText?: string): iziModalWrapThemeWrap => {
                meRoot.methods().
                header.iconClass(icon)
                    .header.iconText(iconText ?? '')
                return r;
            },
            end: (): iziModalWrap => {
                return meRoot;
            }
        };
        return r;
    }

    methods(): iziModalWrapMethodWrap {
        const meRoot = this;
        const r: iziModalWrapMethodWrap = {
            groups: {
                get: () => this.modal.$.iziModal('getGroup'),
                set: (to: string): iziModalWrapMethodWrap => {
                    this.modal.$.iziModal('setGroup', to);
                    return r;
                },
                next: (transitionIn?: string, transitionOut?: string) => {
                    this.modal.$.iziModal('next', {transitionIn, transitionOut});
                    return r;
                },
                prev: (transitionIn?: string, transitionOut?: string) => {
                    this.modal.$.iziModal('prev', {transitionIn, transitionOut});
                    return r;
                },
            },
            loading: {
                start: () => {
                    this.modal.$.iziModal('startLoading')
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
                top: (to: string | number) => {
                    this.modal.$.iziModal('setTop', to);
                    return r;
                },
                bottom: (to: string | number) => {
                    this.modal.$.iziModal('setBottom', 100);
                    return r;
                },
                width: (to: string | number) => {
                    this.modal.$.iziModal('setWidth', to);
                    return r;
                },
                zIndex: (to: number) => {
                    this.modal.$.iziModal('setZindex', to);
                    return r;
                },
            },
            header: {
                color: (to: string) => {
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
                iconClass: to =>  {
                    this.modal.$.iziModal('setIcon', to);
                    return r;
                },
                iconText: to =>  {
                    this.modal.$.iziModal('setIconText', to);
                    return r;
                },
                headerTitle: to =>  {
                    this.modal.$.iziModal('setTitle', to);
                    return r;
                },
                headerSubtitle: to =>  {
                    this.modal.$.iziModal('setSubtitle', to ?? '');
                    return r;
                },
            },
            content: {
                backgroundColor: (to: string) => {
                    this.modal.$.iziModal('setBackground', to);
                    return r;
                },
                set: (content: string, isDefault: boolean = true) => {
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
                transitionIn: to =>  {
                    this.modal.$.iziModal('setTransitionIn', to);
                    return r;
                },
                transitionOut: to =>  {
                    this.modal.$.iziModal('setTransitionOut', to);
                    return r;
                },
            },
            display: {
                get: (): 'closed' | 'closing' | 'opened' | 'opening' => this.modal.$.iziModal('getState'),
                fullscreen: (enable = false) =>  {
                    this.modal.$.iziModal('setFullscreen', enable);
                    return r;
                },
                toggle: (): iziModalWrapMethodWrap => {
                    this.modal.$.iziModal('toggle');
                    return r;
                },
                open: (): iziModalWrapMethodWrap => {
                    this.modal.$.iziModal('open');
                    return r;
                },
                close: (): iziModalWrapMethodWrap => {
                    this.modal.$.iziModal('close');
                    return r;
                }
            },
            end(): iziModalWrap {
                return meRoot;
            }
        };
        return r;
    }

    // Event Wrappers.
    on(listen: TOnFullScreenEvent, callback: TOnFullScreenCallback): iziModalWrap;
    on(listen: TOnResizeEvent, callback: TOnResizeCallback): iziModalWrap;
    on(listen: TOnOpeningEvent, callback: TOnOpeningCallback): iziModalWrap;
    on(listen: TOnOpenedEvent, callback: TOnOpenedCallback): iziModalWrap;
    on(listen: TOnClosingEvent, callback: TOnClosingCallback): iziModalWrap;
    on(listen: TOnClosedEvent, callback: TOnClosedCallback): iziModalWrap;
    on(listen: TAfterRenderEvent, callback: TAfterRenderCallback): iziModalWrap;
    on(listen: TModalEventStrings, cb: TModalEvents, toFront: boolean = false) {
        let key: false | TiziModalKeys = false;
        switch(listen){
            case "fullscreen": key = 'onFullscreen'; break;
            case "resize": key = 'onResize'; break;
            case "opening": key = 'onOpening'; break;
            case "opened": key = 'onOpened'; break;
            case "closing": key = 'onClosing'; break;
            case "closed": key = 'onClosed'; break;
            case "after_render": key = 'afterRender'; break;
        }

        if(toFront)
            this.listeners[key].unshift(cb);
        else
            this.listeners[key].push(cb);

        return this;
    }

    // Raw Method Applies
    public applyMethod(method: string, options?: any): any {
        return this.modal.$.iziModal(method, options);
    }
    public applyMethods(apply: { [method: string]: any }){
        Object.keys(apply).forEach((method: any) => {
            this.applyMethod(method, apply[method]);
        });
    }
}

