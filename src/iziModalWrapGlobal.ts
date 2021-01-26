'use strict';

import MergeDeep from './Utils/MergeDeep';

export type TThemeTypesBuiltIn = 'add' | 'edit' | 'delete' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export type TThemeTypesAll = TThemeTypesBuiltIn | string;

type IIMWGlobalIconType = string | (() => (string | undefined));
type IIMWGlobalTitlesType = string | (() => (string | undefined));

interface IIMWGlobalTheme {
    color?: string,
    icon?: IIMWGlobalIconType,
    title?: IIMWGlobalTitlesType,
    subtitle?: IIMWGlobalTitlesType,
}

export interface IIMWGlobalSettings {
    classes?: {
        modals?: {
            open?: '{prefixId}-open' | string
        },
        modal?: {
            open?: '{prefixId}-open-{modalId}' | string,
            opened?: '{prefixId}-opened-{modalId}' | string,
            setup?: '{prefixId}-ran-{modalId}' | string
        }
    },
    statics?: {
        layerUpBase?: number,
        prefixId?: 'izimw' | string,
        mobileMode?: boolean,
        isMobileDevice?: boolean | (() => boolean)
    },
    widths?: {
        a_xs?: number,
        b_sm?: number,
        c_md?: number,
        d_lg?: number,
        e_xl?: number,
    }
    themes?: {
        [themeKey in TThemeTypesAll]?: IIMWGlobalTheme
    },
}

interface IIMWGlobalThemeStatic {
    color: string,
    icon?: IIMWGlobalIconType,
    title?: IIMWGlobalTitlesType,
    subtitle?: IIMWGlobalTitlesType,
}

interface IIMWGlobalSettingsStatic {
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
        mobileMode: boolean,
        isMobileDevice: boolean | (() => boolean)
    },
    widths: {
        a_xs: number,
        b_sm: number,
        c_md: number,
        d_lg: number,
        e_xl: number,
    }
    themes: {
        [themeKey in TThemeTypesAll]?: IIMWGlobalThemeStatic
    },
}

// tslint:disable-next-line:class-name
class iziModalWrapGlobalInner {
    protected __init = false;
    // @ts-ignore
    protected globalSettings: IIMWGlobalSettingsStatic;
    protected __rootStyle: false | CSSStyleDeclaration = false;

    protected __getRootStyle(): CSSStyleDeclaration {
        if(!this.__rootStyle){
            const body = document.querySelector('body');
            if(body){
                this.__rootStyle = getComputedStyle(body);
            }else{
                throw new Error('Body tag not accessible.');
            }
        }
        return this.__rootStyle;
    }
    protected getPropVal(key: string, _default: string = '#000'): string {
        const r = this.__getRootStyle().getPropertyValue('--'+key);
        if(r.length > 0)
            return r;
        return _default;
    }

    public themeGet(key: TThemeTypesAll): undefined | IIMWGlobalThemeStatic {
        this.init();
        if(this.globalSettings.themes.hasOwnProperty(key))
            return this.globalSettings.themes[key];
        return undefined;
    }

    public themeAdd(
        key: string,
        color: string,
        icon?: IIMWGlobalIconType,
        title?: IIMWGlobalTitlesType,
        subtitle?: IIMWGlobalTitlesType
    ): iziModalWrapGlobalInner {
        this.init();
        if(this.globalSettings.themes.hasOwnProperty(key))
            throw new Error(`Attempting to add "${key}" twice for iziModalWrapGlobal.customize.addTheme();`);

        this.globalSettings.themes[key] = {
            color,
            icon,
            title,
            subtitle,
        };

        return this;
    }

    /**
     *
     * @param merge
     * @param forceReInit used in testing.
     */
    public init(merge: IIMWGlobalSettings = {}, forceReInit: boolean = false): iziModalWrapGlobalInner {
        if(!this.__init || forceReInit){
            this.__init = true;
            this.globalSettings = MergeDeep.combine(({
                classes: {
                    modals: {
                        open: '{prefixId}-open'
                    },
                    modal: {
                        open: '{prefixId}-open-{modalId}',
                        opened: '{prefixId}-opened-{modalId}',
                        setup: '{prefixId}-ran-{modalId}'
                    }
                },
                statics: {
                    prefixId: 'izimw',
                    isMobileDevice: false,
                    layerUpBase: 1072,
                },
                themes: {
                    add: {          color: this.getPropVal('--add', '#2C5937'),         icon: this.getPropVal('--add',  '') },
                    edit: {         color: this.getPropVal('--edit', '#2364AA'),        icon: this.getPropVal('--edit',  '') },
                    delete: {       color: this.getPropVal('--delete', '#930119'),      icon: this.getPropVal('--delete',  '') },
                    primary: {      color: this.getPropVal('--primary',  '#007bff'),    icon: this.getPropVal('--primary',  '') },
                    secondary: {    color: this.getPropVal('--secondary','#6c757d'),    icon: this.getPropVal('--secondary',  '') },
                    success: {      color: this.getPropVal('--success',  '#28a745'),    icon: this.getPropVal('--success',  '') },
                    danger: {       color: this.getPropVal('--danger',   '#dc3545'),    icon: this.getPropVal('--danger',  '') },
                    warning: {      color: this.getPropVal('--warning',  '#ffc107'),    icon: this.getPropVal('--warning',  '') },
                    info: {         color: this.getPropVal('--info',     '#17a2b8'),    icon: this.getPropVal('--info',  '') },
                    light: {        color: this.getPropVal('--light',    '#f8f9fa'),    icon: this.getPropVal('--light',  '') },
                    dark: {         color: this.getPropVal('--dark',     '#343a40'),    icon: this.getPropVal('--dark',  '') },
                },
                widths: {
                    a_xs: 350,
                    b_sm: 467,
                    c_md: 603,
                    d_lg: 730,
                    e_xl: 882,
                },
            } as IIMWGlobalSettings), merge);
        }
        return this;
    }

    public getSettings(): IIMWGlobalSettingsStatic {
        this.init();
        return this.globalSettings;
    }
}

const iziModalWrapGlobal = new iziModalWrapGlobalInner();
export default iziModalWrapGlobal;
