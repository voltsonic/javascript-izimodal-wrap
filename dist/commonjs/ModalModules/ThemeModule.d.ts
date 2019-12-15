import { AbstractModule } from "./AbstractModule";
declare type CustomSimpleThemeType = (customKey: string) => ThemeModule;
declare type SimpleThemeType = () => ThemeModule;
interface GenericThemeModule {
    color: (color: string) => ThemeModule;
    titles: (title: string, subtitle?: string) => ThemeModule;
    icons: (icon: string, iconText?: string) => ThemeModule;
}
interface SimpleThemeModule {
    custom: CustomSimpleThemeType;
    primary: SimpleThemeType;
    secondary: SimpleThemeType;
    success: SimpleThemeType;
    danger: SimpleThemeType;
    warning: SimpleThemeType;
    info: SimpleThemeType;
    light: SimpleThemeType;
    dark: SimpleThemeType;
}
export declare class ThemeModule extends AbstractModule {
    generic(): GenericThemeModule;
    protected genericTheme(color: string, icon?: string): ThemeModule;
    simple(): SimpleThemeModule;
}
export {};
