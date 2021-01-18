export declare type TThemeTypesBuiltIn = "add" | "edit" | "delete" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
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
            open?: string;
        };
        modal?: {
            open?: string;
            opened?: string;
            setup?: string;
        };
    };
    statics?: {
        layerUpBase?: number;
        prefixId?: string;
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
        [themeKey in TThemeTypesAll]: IIMWGlobalTheme;
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
        [themeKey in TThemeTypesAll]: IIMWGlobalThemeStatic;
    };
}
declare class iziModalWrapGlobalInner {
    protected __init: boolean;
    protected globalSettings: IIMWGlobalSettingsStatic;
    protected __rootStyle: false | CSSStyleDeclaration;
    protected __getRootStyle(): CSSStyleDeclaration;
    protected getPropVal(key: string, _default?: string): string;
    themeGet(key: TThemeTypesAll): undefined | IIMWGlobalThemeStatic;
    themeAdd(key: string, color: string, icon?: IIMWGlobalIconType, title?: IIMWGlobalTitlesType, subtitle?: IIMWGlobalTitlesType): iziModalWrapGlobalInner;
    /**
     *
     * @param merge
     * @param forceReInit used in testing.
     */
    init(merge?: IIMWGlobalSettings, forceReInit?: boolean): iziModalWrapGlobalInner;
    getSettings(): IIMWGlobalSettings;
}
declare const iziModalWrapGlobal: iziModalWrapGlobalInner;
export default iziModalWrapGlobal;
