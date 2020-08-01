import deepmerge from "deepmerge";

export type TThemeTypesBuiltIn = "add" | "edit" | "delete" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
export type TThemeTypesAll = TThemeTypesBuiltIn | string;

export interface IIMWGlobalSettings {
    classes?: {
        modals?: {
            open?: string
        },
        modal?: {
            open?: string,
            opened?: string,
            setup?: string
        }
    },
    statics?: {
        layerUpBase?: number,
        prefixId?: string,
        mobileMode?: boolean
    },
    theme?: {
        colors?: {
            add?        : string,
            edit?       : string,
            delete?     : string,
            primary?    : string,
            secondary?  : string,
            success?    : string,
            danger?     : string,
            warning?    : string,
            info?       : string,
            light?      : string,
            dark?       : string,
            [extras: string]: string,
        },
        icons?: {
            add?        : string,
            edit?       : string,
            delete?     : string,
            primary?    : string,
            secondary?  : string,
            success?    : string,
            danger?     : string,
            warning?    : string,
            info?       : string,
            light?      : string,
            dark?       : string,
            [extras: string]: string,
        },
        widths?: {
            a_xs?: number,
            b_sm?: number,
            c_md?: number,
            d_lg?: number,
            e_xl?: number,
        }
    },
}
interface IIMWGlobalSettingsInner {
    classes: {
        modals: {
            open: string
        },
        modal: {
            open: string,
            opened: string,
            setup: string
        }
    },
    statics: {
        layerUpBase: number,
        prefixId: string,
        isMobileDevice: boolean | (() => boolean)
    },
    theme: {
        colors: {
            add        : string,
            edit       : string,
            delete     : string,
            primary    : string,
            secondary  : string,
            success    : string,
            danger     : string,
            warning    : string,
            info       : string,
            light      : string,
            dark       : string,
            [extras: string]: string,
        },
        icons: {
            add?        : string,
            edit?       : string,
            delete?     : string,
            primary?    : string,
            secondary?  : string,
            success?    : string,
            danger?     : string,
            warning?    : string,
            info?       : string,
            light?      : string,
            dark?       : string,
            [extras: string]: undefined | string,
        },
        widths: {
            a_xs: number,
            b_sm: number,
            c_md: number,
            d_lg: number,
            e_xl: number,
        }
    },
}

export default class iziModalWrapGlobal {
    protected static globalSettings: null | IIMWGlobalSettingsInner = null;
    private static __rootStyle: false | CSSStyleDeclaration = false;

    private static __getRootStyle(): CSSStyleDeclaration {
        if(!this.__rootStyle){
            this.__rootStyle = getComputedStyle(document.querySelector('body'));
        }
        return this.__rootStyle;
    }
    private static getPropVal(key: string, _default: string = '#000'): string {
        const r = this.__getRootStyle().getPropertyValue("--"+key);
        if(r.length > 0)
            return r;
        return _default;
    }

    public static init(merge: IIMWGlobalSettings = {}){
        if(this.globalSettings)
            throw new Error("Not allowed to trigger iziModalWrapGlobal.init() twice. These settings are meant to be shared between modal instances.");

        const baseSettings: IIMWGlobalSettingsInner = {
            classes: {
                modals: {
                    open: "{prefixId}-open"
                },
                modal: {
                    open: "{prefixId}-open-{modalId}",
                    opened: "{prefixId}-opened-{modalId}",
                    setup: "{prefixId}-ran-{modalId}"
                }
            },
            statics: {
                prefixId: "izimw",
                isMobileDevice: false,
                layerUpBase: 1072,
            },
            theme: {
                colors: {
                    add         : "#2C5937",
                    edit        : "#2364AA",
                    delete      : "#930119",
                    primary     : this.getPropVal("--primary",  "#007bff"),
                    secondary   : this.getPropVal("--secondary","#6c757d"),
                    success     : this.getPropVal("--success",  "#28a745"),
                    danger      : this.getPropVal("--danger",   "#dc3545"),
                    warning     : this.getPropVal("--warning",  "#ffc107"),
                    info        : this.getPropVal("--info",     "#17a2b8"),
                    light       : this.getPropVal("--light",    "#f8f9fa"),
                    dark        : this.getPropVal("--dark",     "#343a40"),
                },
                icons: {
                    add         : "",
                    edit        : "",
                    delete      : "",
                    primary     : "",
                    secondary   : "",
                    success     : "",
                    danger      : "",
                    warning     : "",
                    info        : "",
                    light       : "",
                    dark        : "",
                },
                widths: {
                    a_xs: 350,
                    b_sm: 467,
                    c_md: 603,
                    d_lg: 730,
                    e_xl: 882,
                }
            },
        };
        // @ts-ignore.
        this.globalSettings = deepmerge(baseSettings, merge);

        const meRoot = this;
        return {
            addTheme: function(key: string, color: string, icon?: string){
                if(meRoot.globalSettings.theme.colors.hasOwnProperty(key)){
                    throw new Error(`Attempting to add "${key}" twice for iziModalWrapGlobal.customize.addTheme();`)
                }
                meRoot.globalSettings.theme.colors[key] = color;
                meRoot.globalSettings.theme.icons[key] = icon;
                return this;
            },
            end: (): iziModalWrapGlobal => meRoot,
        };
    }

    public static getSettings(): IIMWGlobalSettingsInner {
        return this.globalSettings;
    }
}
