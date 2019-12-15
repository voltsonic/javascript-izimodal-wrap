"use strict";

import {AbstractModule} from "./AbstractModule";

type CustomSimpleThemeType = (customKey: string) => ThemeModule;
type SimpleThemeType = () => ThemeModule;

interface GenericThemeModule {
    color: (color: string) => ThemeModule,
    titles: (title: string, subtitle?: string) => ThemeModule,
    icons: (icon: string, iconText?: string) => ThemeModule
}

interface SimpleThemeModule {
    custom: CustomSimpleThemeType,
    primary: SimpleThemeType,
    secondary: SimpleThemeType,
    success: SimpleThemeType,
    danger: SimpleThemeType,
    warning: SimpleThemeType,
    info: SimpleThemeType,
    light: SimpleThemeType,
    dark: SimpleThemeType
}

export class ThemeModule extends AbstractModule {
    generic() : GenericThemeModule {
        return {
            color: (color: string): ThemeModule => {
                this.modal.api
                    .ui.header.color(color);
                return this;
            },
            titles: (title: string, subtitle?: string): ThemeModule => {
                this.modal.api
                    .ui.header.title(title)
                    .ui.header.subtitle(subtitle?subtitle:'');
                return this;
            },
            icons: (icon: string, iconText?: string): ThemeModule => {
                this.modal.api
                    .ui.header.icon.class(icon)
                    .ui.header.icon.text(iconText?iconText:'');
                return this;
            }
        };
    }
    protected genericTheme(color: string, icon?: string){
        return this
            .generic().color(color)
            .generic().icons(icon?icon:"");
    }
    simple(): SimpleThemeModule {
        return {
            custom: (customKey: string): ThemeModule => (this.genericTheme(this.globalSettings.theme.colors[customKey], this.globalSettings.theme.icons[customKey])),
            primary: (): ThemeModule => (this.simple().custom("primary")),
            secondary: (): ThemeModule => (this.simple().custom("secondary")),
            success: (): ThemeModule => (this.simple().custom("success")),
            danger: (): ThemeModule => (this.simple().custom("danger")),
            warning: (): ThemeModule => (this.simple().custom("warning")),
            info: (): ThemeModule => (this.simple().custom("info")),
            light: (): ThemeModule => (this.simple().custom("light")),
            dark: (): ThemeModule => (this.simple().custom("dark"))
        }
    }
}
