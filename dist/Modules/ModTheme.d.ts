import { ModAbstract } from './ModAbstract';
import { TThemeTypesAll } from '../iziModalWrapGlobal';
import iziModalWrap from '../iziModalWrap';
export declare class ModTheme extends ModAbstract {
    mode(themeKey: TThemeTypesAll): iziModalWrap;
    title(title: string, subTitle?: string): ModTheme;
    subtitle(subTitle?: string): ModTheme;
    icon(icon: string, iconText?: string): ModTheme;
}
