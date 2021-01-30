export declare type TThemeTypesBuiltIn = 'add' | 'edit' | 'delete' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export declare type TThemeTypesAll = TThemeTypesBuiltIn | string;
declare type IIMWGlobalIconType = string | (() => (string | undefined));
declare type IIMWGlobalTitlesType = string | (() => (string | undefined));
interface IIMWGlobalTheme {
    color?: string;
    icon?: IIMWGlobalIconType;
    title?: IIMWGlobalTitlesType;
    subtitle?: IIMWGlobalTitlesType;
}
export interface IIMWGlobalSettings {
    classes?: {
        modals?: {
            open?: '{prefixId}-open' | string;
        };
        modal?: {
            open?: '{prefixId}-open-{modalId}' | string;
            opened?: '{prefixId}-opened-{modalId}' | string;
            setup?: '{prefixId}-ran-{modalId}' | string;
        };
    };
    statics?: {
        layerUpBase?: number;
        prefixId?: 'izimw' | string;
        mobileMode?: boolean;
        isMobileDevice?: boolean | (() => boolean);
    };
    widths?: {
        a_xs?: number;
        b_sm?: number;
        c_md?: number;
        d_lg?: number;
        e_xl?: number;
    };
    themes?: {
        [themeKey in TThemeTypesAll]?: IIMWGlobalTheme;
    };
}
interface IIMWGlobalThemeStatic {
    color: string;
    icon?: IIMWGlobalIconType;
    title?: IIMWGlobalTitlesType;
    subtitle?: IIMWGlobalTitlesType;
}
interface IIMWGlobalSettingsStatic {
    classes: {
        modals: {
            open: string;
        };
        modal: {
            open: string;
            opened: string;
            setup: string;
        };
    };
    statics: {
        layerUpBase: number;
        prefixId: string;
        mobileMode: boolean;
        isMobileDevice: boolean | (() => boolean);
    };
    widths: {
        a_xs: number;
        b_sm: number;
        c_md: number;
        d_lg: number;
        e_xl: number;
    };
    themes: {
        [themeKey in TThemeTypesAll]?: IIMWGlobalThemeStatic;
    };
}
/**
 * iziModalWrapGlobal class.
 *
 * @internal
 * @summary
 * This is the main way to add/change/update global settings.
 *
 * @example TS // Basic example.
 * ```ts
 * import iziModalWrap from 'izimodal-wrap';
 * iziModalWrap.globals.addTheme();
 * ```
 */
export declare class iziModalWrapGlobalInner {
    /**
     * @hidden
     */
    protected __init: boolean;
    /**
     * @hidden
     */
    protected globalSettings: IIMWGlobalSettingsStatic;
    /**
     * @hidden
     */
    protected __rootStyle: false | CSSStyleDeclaration;
    /**
     * @hidden
     */
    constructor();
    getBodyStyle(reset?: boolean): CSSStyleDeclaration;
    /**
     * @hidden
     */
    protected getPropVal(key: string, _default?: string): string;
    getTheme(key: TThemeTypesAll): undefined | IIMWGlobalThemeStatic;
    addTheme(key: string, color: string, icon?: IIMWGlobalIconType, title?: IIMWGlobalTitlesType, subtitle?: IIMWGlobalTitlesType): iziModalWrapGlobalInner;
    /**
     *
     * @param merge
     * @param forceReInit used in testing.
     */
    init(merge?: IIMWGlobalSettings, forceReInit?: boolean): iziModalWrapGlobalInner;
    getSettings(): IIMWGlobalSettingsStatic;
}
export declare const iziModalWrapGlobal: iziModalWrapGlobalInner;
export {};
