"use strict";

import iziWrapModuleAbstract from "./iziWrapModuleAbstract";
import iziModalWrapGlobal from "../iziModalWrapGlobal";
import InvalidModeIMW from "../Errors/InvalidModeIMW";
import InvalidThemeKeyIMW from "../Errors/InvalidThemeKeyIMW";

export default class iziWrapTheme extends iziWrapModuleAbstract {
    private modes: boolean;

    public mode(modeKey: string): iziWrapTheme {
        if(!this.modes.hasOwnProperty(modeKey))
            throw new InvalidModeIMW(modeKey);
        const mode = this.modes[modeKey];
        const themes = iziModalWrapGlobal.getSettings().theme;
        const themeKey = mode;
        if(!themes.colors.hasOwnProperty(themeKey))
            throw new InvalidThemeKeyIMW(themeKey);

        meRoot.methods()
            .header.color(themes.colors[themeKey])
        ;

        r.title(
            mode.title
                ? (typeof mode.title === 'function'
                    ? mode.title()
                    : mode.title
                )
                : '',
            typeof mode.subtitle === 'function'
                ? mode.subtitle()
                : mode.subtitle
        );
        let themeIcon: false | string = mode.iconOverwrite
            ? (typeof mode.iconOverwrite === 'function' ? mode.iconOverwrite() : mode.iconOverwrite)
            : (themes.icons.hasOwnProperty(themeKey)
                ? themes.icons[themeKey]
                : false)
        ;

        if(themeIcon){
            r.icon(themeIcon)
        }

        return this;
    }
    public init() {
        this.modes = iziModalWrapGlobal.getSettings();
        super.init();
    }

    public title(title: string, subTitle?: string): iziWrapTheme {
        this.w.methods.header().title(title);
        this.subtitle(subTitle);
        return this;
    }
    public subtitle(subTitle?: string): iziWrapTheme {
        this.w.methods.header().subtitle(subTitle ?? '');
        return this;
    }
    public icon(icon: string, iconText?: string): iziWrapTheme {
        this.w.methods
            .header().iconClass(icon)
            .header().iconText(iconText ?? '');
        return this;
    }
}
