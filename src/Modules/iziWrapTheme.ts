"use strict";

import iziWrapModuleAbstract from "./iziWrapModuleAbstract";
import iziModalWrapGlobal, {TThemeTypesAll} from "../iziModalWrapGlobal";
import InvalidThemeKeyIMW from "../Errors/InvalidThemeKeyIMW";
import iziModalWrap from "../iziModalWrap";

const formatItem = (
    itemWrap?: string | (() => string),
    itemGlobal?: string | (() => string),
    returnDefault: any = '',
): string => {
    if(typeof itemWrap === 'string')
        return itemWrap;
    if(typeof itemWrap === 'function')
        return itemWrap();
    if(typeof itemGlobal === 'string')
        return itemGlobal;
    if(typeof itemGlobal === 'function')
        return itemGlobal();
    return returnDefault;
};

export default class iziWrapTheme extends iziWrapModuleAbstract {
    public mode(themeKey: TThemeTypesAll): iziModalWrap {
        const themeWrap = this.w.config.themes[themeKey];
        const themeGlobal = iziModalWrapGlobal.themeGet(themeKey);
        if(!themeGlobal && !themeWrap)
            throw new InvalidThemeKeyIMW(themeKey);

        this.w.methods.header.color(themeGlobal.color);
        this.title(
            formatItem(themeWrap.title, themeGlobal.title),
            formatItem(themeWrap.subtitle, themeGlobal.subtitle, undefined));

        let themeIcon: false | string = formatItem(
            themeWrap.icon,
            themeGlobal.icon,
            false
        );

        if(themeIcon){
            this.icon(themeIcon)
        }

        return this.up();
    }

    public title(title: string, subTitle?: string): iziWrapTheme {
        this.w.methods.header.title(title);
        this.subtitle(subTitle);
        return this;
    }
    public subtitle(subTitle?: string): iziWrapTheme {
        this.w.methods.header.subtitle(subTitle ?? '');
        return this;
    }
    public icon(icon: string, iconText?: string): iziWrapTheme {
        this.w.methods.header
            .iconClass(icon)
            .iconText(iconText ?? '');
        return this;
    }
}
