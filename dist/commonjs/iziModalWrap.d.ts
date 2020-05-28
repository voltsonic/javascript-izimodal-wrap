interface IModalWrapConfigInternal {
    modalId: string;
    layerUp: number;
    modes: {
        [mode: string]: {
            themeKey: string;
            title?: string | (() => string);
            subtitle?: string | (() => string);
            /**
             * This value should be setup in iziModalWrapGlobal.init().addTheme(); but can be dynamically overwritten here.
             */
            iconOverwrite?: string | (() => string);
        };
    };
    fullscreen: {
        ifMobile: boolean;
        forced: boolean;
    };
    openRightAway: boolean;
    iziModalSettings: IziModalSettings;
}
export declare type TModalWrapConfigMerge = string | {
    modalId: string;
    layerUp?: number;
    modes?: {
        [mode: string]: {
            themeKey: string;
            title?: string | (() => string);
            subtitle?: string | (() => string);
            /**
             * This value should be setup in iziModalWrapGlobal.init().addTheme(); but can be dynamically overwritten here.
             */
            iconOverwrite?: string | (() => string);
        };
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
    $?: JQuery<HTMLElement>;
}
export { iziModalWrapGlobal } from "./Modules/iziModalWrapGlobal";
export default class iziModalWrap {
    protected listeners: TiziModalListeners;
    modal: IModalSelectors;
    protected config: IModalWrapConfigInternal;
    constructor(config: TModalWrapConfigMerge);
    theme(): iziModalWrapThemeWrap;
    methods(): iziModalWrapMethodWrap;
    on(listen: TOnFullScreenEvent, callback: TOnFullScreenCallback): iziModalWrap;
    on(listen: TOnResizeEvent, callback: TOnResizeCallback): iziModalWrap;
    on(listen: TOnOpeningEvent, callback: TOnOpeningCallback): iziModalWrap;
    on(listen: TOnOpenedEvent, callback: TOnOpenedCallback): iziModalWrap;
    on(listen: TOnClosingEvent, callback: TOnClosingCallback): iziModalWrap;
    on(listen: TOnClosedEvent, callback: TOnClosedCallback): iziModalWrap;
    on(listen: TAfterRenderEvent, callback: TAfterRenderCallback): iziModalWrap;
    applyMethod(method: string, options?: any): any;
    applyMethods(apply: {
        [method: string]: any;
    }): void;
}
