"use strict";

// const iziModalWrapGlobalInner = require('./iziModalWrapGlobal');
import iziWrapMethods from "./Modules/iziWrapMethods";
import MergeDeep from "./Utils/MergeDeep";
import iziModalWrapGlobal, {TThemeTypesAll} from "./iziModalWrapGlobal";
import iziWrapTheme from "./Modules/iziWrapTheme";

// Hacky way of importing iziModal
// Looking for suggestions.
// This relies on src/@types-internal
$.fn.iziModal = require("izimodal-1.6.0");

interface IModalTheme {
    title?: string | (() => string),
    subtitle?: string | (() => string),
    icon?: string | (() => (string | undefined)), // This value should be setup in iziModalWrapGlobal.themeAdd(); but can be dynamically overwritten here (returning undefined uses the fallback icon).
}
interface IModalWrapConfigInternal {
    modalId: string,
    layerUp: number,
    themes: {
        [themeKey in TThemeTypesAll]: IModalTheme
    },
    fullscreen: {
        ifMobile: boolean,
        forced: boolean
    },
    openRightAway: boolean,
    iziModalSettings: IziModalSettings,
}

type TModalId = string;


export type TModalWrapConfigMerge = TModalId | {
    modalId: TModalId,
    layerUp?: number,
    events?: {
        [event in TModalEventStrings]: TModalEvents
    },
    themes?: {
        [themeKey in TThemeTypesAll]: IModalTheme
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
    $: JQuery<HTMLElement>
}

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
    public config: IModalWrapConfigInternal;
    public methods: iziWrapMethods;
    public theme: iziWrapTheme;

    protected setupClass(classTemplate: string): string {
        const globalSettings = iziModalWrapGlobal.getSettings();
        return classTemplate
            .replace('{prefixId}', globalSettings.statics.prefixId)
            .replace('{modalId}', this.config.modalId);
    }

    constructor(config: TModalWrapConfigMerge){
        const globalSettings = iziModalWrapGlobal.getSettings();

        // Setup: Configs
        if(typeof config === 'string')
            config = { modalId: config };

        this.modal.id = (
                globalSettings.statics.prefixId.length > 0
                    ? (globalSettings.statics.prefixId+'-')
                    : ''
            ) +
            config.modalId;
        this.modal.idSel = '#'+this.modal.id;

        if($(this.modal.idSel).length === 0){
            const e = document.createElement('div');
            e.classList.add('iziModal');
            e.id = this.modal.id;
            document.getElementsByTagName('body')[0].appendChild(e);
        }
        this.modal.$ = $(this.modal.idSel);

        this.methods = new iziWrapMethods(this);
        this.theme = new iziWrapTheme(this);

        this.config = MergeDeep.combine({
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
        const modalOpenClass = this.setupClass(globalSettings.classes.modal.open);
        const modalOpenedClass = this.setupClass(globalSettings.classes.modal.opened);

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
                    .addClass(this.setupClass(globalSettings.classes.modals.open))
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
                this.modal.$.removeClass(modalOpenedClass);

                const visibleAfterClose = ($(".iziModal:visible").length - 1);

                if(visibleAfterClose === 0)
                    $b.removeClass(this.setupClass(globalSettings.classes.modals.open));

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
                    $b.removeClass(this.setupClass(globalSettings.classes.modals.open));

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

        this.modal.$.iziModal(configIzi);
        this.modal.$.addClass(this.setupClass(globalSettings.classes.modal.setup));

        if(
            this.config.fullscreen.forced ||
            this.config.fullscreen.ifMobile && (
                typeof globalSettings.statics.isMobileDevice === 'function' && globalSettings.statics.isMobileDevice() ||
                globalSettings.statics.isMobileDevice
            ))
            this.modal.$.iziModal("setFullscreen", true);

        if(this.config.openRightAway)
            this.modal.$.iziModal("open");

        if(config.events)
            for(let eventKey in config.events)
                if(config.events.hasOwnProperty(eventKey)){
                    // @ts-ignore.
                    this.on(eventKey, config.events[eventKey]);
                }
    }

    // Event Wrappers.
    on(listen: TOnFullScreenEvent, callback: TOnFullScreenCallback): iziModalWrap;
    on(listen: TOnResizeEvent, callback: TOnResizeCallback): iziModalWrap;
    on(listen: TOnOpeningEvent, callback: TOnOpeningCallback): iziModalWrap;
    on(listen: TOnOpenedEvent, callback: TOnOpenedCallback): iziModalWrap;
    on(listen: TOnClosingEvent, callback: TOnClosingCallback): iziModalWrap;
    on(listen: TOnClosedEvent, callback: TOnClosedCallback): iziModalWrap;
    on(listen: TAfterRenderEvent, callback: TAfterRenderCallback): iziModalWrap;
    on(listen: TModalEventStrings, cb: TModalEvents, toFront: boolean = false): iziModalWrap {
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
    public applyMethodRaw(method: string, options?: any): any {
        return this.modal.$.iziModal(method, options);
    }
    public applyMethodsRaw(apply: { [method: string]: any }){
        Object.keys(apply).forEach((method: any) => {
            this.applyMethodRaw(method, apply[method]);
        });
    }
}
