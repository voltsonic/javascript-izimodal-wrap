import { ModMethod } from './Modules/ModMethod';
import { TThemeTypesAll } from './iziModalWrapGlobal';
import { ModTheme } from './Modules/ModTheme';
export declare type TOnFullScreenCallback = () => void;
export declare type TOnResizeCallback = () => void;
export declare type TOnOpeningCallback = () => void;
export declare type TOnOpenedCallback = () => void;
export declare type TOnClosingCallback = () => void;
export declare type TOnClosedCallback = () => void;
export declare type TAfterRenderCallback = () => void;
export declare type TModalEvents = TOnFullScreenCallback | TOnResizeCallback | TOnOpeningCallback | TOnOpenedCallback | TOnClosingCallback | TOnClosedCallback | TAfterRenderCallback;
declare type TOnFullScreenEvent = 'fullscreen';
declare type TOnResizeEvent = 'resize';
declare type TOnOpeningEvent = 'opening';
declare type TOnOpenedEvent = 'opened';
declare type TOnClosingEvent = 'closing';
declare type TOnClosedEvent = 'closed';
declare type TAfterRenderEvent = 'after_render';
declare type TModalEventStrings = TOnFullScreenEvent | TOnResizeEvent | TOnOpeningEvent | TOnOpenedEvent | TOnClosingEvent | TOnClosedEvent | TAfterRenderEvent;
declare type TiziModalListeners = {
    onFullscreen?: TOnFullScreenCallback[];
    onResize?: TOnResizeCallback[];
    onOpening?: TOnOpeningCallback[];
    onOpened?: TOnOpenedCallback[];
    onClosing?: TOnClosingCallback[];
    onClosed?: TOnClosedCallback[];
    afterRender?: TAfterRenderCallback[];
};
interface IModalTheme {
    title?: string | (() => string);
    subtitle?: string | (() => string);
    icon?: string | (() => (string | undefined));
}
interface IModalWrapConfigInternal {
    modalId: string;
    layerUp: number;
    events?: {
        [event in TModalEventStrings]?: TModalEvents;
    };
    themes: {
        [themeKey in TThemeTypesAll]?: IModalTheme;
    };
    fullscreen: {
        ifMobile: boolean;
        forced: boolean;
    };
    openRightAway: boolean;
    iziModalSettings: IziModalSettings;
}
declare type TModalId = string;
export declare type TModalWrapConfigMerge = TModalId | {
    modalId: TModalId;
    layerUp?: number;
    events?: {
        [event in TModalEventStrings]?: TModalEvents;
    };
    themes?: {
        [themeKey in TThemeTypesAll]?: IModalTheme;
    };
    fullscreen?: {
        ifMobile?: boolean;
        forced?: boolean;
    };
    openRightAway?: boolean;
    iziModalSettings?: IziModalSettings;
};
export interface IModalSelectors {
    id: string;
    idSel: string;
    $: JQuery<HTMLElement, HTMLElement>;
}
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
export default class iziModalWrap {
    static VERSION: string;
    /**
     * @hidden
     */
    protected listeners: TiziModalListeners;
    modal: IModalSelectors;
    /**
     * @hidden
     */
    config: IModalWrapConfigInternal;
    methods: ModMethod;
    theme: ModTheme;
    /**
     * @hidden
     */
    private setupClass;
    static globals: import("./iziModalWrapGlobal").iziModalWrapGlobalInner;
    constructor(config: TModalWrapConfigMerge);
    on(listen: TOnFullScreenEvent, callback: TOnFullScreenCallback): iziModalWrap;
    on(listen: TOnResizeEvent, callback: TOnResizeCallback): iziModalWrap;
    on(listen: TOnOpeningEvent, callback: TOnOpeningCallback): iziModalWrap;
    on(listen: TOnOpenedEvent, callback: TOnOpenedCallback): iziModalWrap;
    on(listen: TOnClosingEvent, callback: TOnClosingCallback): iziModalWrap;
    on(listen: TOnClosedEvent, callback: TOnClosedCallback): iziModalWrap;
    on(listen: TAfterRenderEvent, callback: TAfterRenderCallback): iziModalWrap;
    applyMethodRaw(method: string, options?: any): any;
    applyMethodsRaw(apply: {
        [method: string]: any;
    }): void;
}
export {};
