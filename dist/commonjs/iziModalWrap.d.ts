import iziWrapMethods from "./Modules/iziWrapMethods";
import { TThemeTypesAll } from "./iziModalWrapGlobal";
import iziWrapTheme from "./Modules/iziWrapTheme";
interface IModalTheme {
    title?: string | (() => string);
    subtitle?: string | (() => string);
    icon?: string | (() => (string | undefined));
}
interface IModalWrapConfigInternal {
    modalId: string;
    layerUp: number;
    themes: {
        [themeKey in TThemeTypesAll]: IModalTheme;
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
        [event in TModalEventStrings]: TModalEvents;
    };
    themes?: {
        [themeKey in TThemeTypesAll]: IModalTheme;
    };
    fullscreen?: {
        ifMobile?: boolean;
        forced?: boolean;
    };
    openRightAway?: boolean;
    iziModalSettings?: IziModalSettings;
};
interface IModalSelectors {
    id: string;
    idSel: string;
    $: JQuery<HTMLElement>;
}
export default class iziModalWrap {
    protected listeners: TiziModalListeners;
    modal: IModalSelectors;
    config: IModalWrapConfigInternal;
    methods: iziWrapMethods;
    theme: iziWrapTheme;
    protected setupClass(classTemplate: string): string;
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
