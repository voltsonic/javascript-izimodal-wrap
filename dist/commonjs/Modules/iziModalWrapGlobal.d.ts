export declare type TThemeTypesBuiltIn = "add" | "edit" | "delete" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
export declare type TThemeTypesAll = TThemeTypesBuiltIn | string;
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
    };
    theme?: {
        colors?: {
            add?: string;
            edit?: string;
            delete?: string;
            primary?: string;
            secondary?: string;
            success?: string;
            danger?: string;
            warning?: string;
            info?: string;
            light?: string;
            dark?: string;
            [extras: string]: string;
        };
        icons?: {
            add?: string;
            edit?: string;
            delete?: string;
            primary?: string;
            secondary?: string;
            success?: string;
            danger?: string;
            warning?: string;
            info?: string;
            light?: string;
            dark?: string;
            [extras: string]: string;
        };
        widths?: {
            a_xs?: number;
            b_sm?: number;
            c_md?: number;
            d_lg?: number;
            e_xl?: number;
        };
    };
}
interface IIMWGlobalSettingsInner {
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
        isMobileDevice: boolean | (() => boolean);
    };
    theme: {
        colors: {
            add: string;
            edit: string;
            delete: string;
            primary: string;
            secondary: string;
            success: string;
            danger: string;
            warning: string;
            info: string;
            light: string;
            dark: string;
            [extras: string]: string;
        };
        icons: {
            add?: string;
            edit?: string;
            delete?: string;
            primary?: string;
            secondary?: string;
            success?: string;
            danger?: string;
            warning?: string;
            info?: string;
            light?: string;
            dark?: string;
            [extras: string]: undefined | string;
        };
        widths: {
            a_xs: number;
            b_sm: number;
            c_md: number;
            d_lg: number;
            e_xl: number;
        };
    };
}
export declare class iziModalWrapGlobal {
    protected static globalSettings: null | IIMWGlobalSettingsInner;
    private static __rootStyle;
    private static __getRootStyle;
    private static getPropVal;
    static init(merge?: IIMWGlobalSettings): {
        addTheme: (key: string, color: string, icon?: string) => any;
        end: () => iziModalWrapGlobal;
    };
    static getSettings(): IIMWGlobalSettingsInner;
}
export {};
