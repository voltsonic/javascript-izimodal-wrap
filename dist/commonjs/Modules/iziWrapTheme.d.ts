import iziWrapModuleAbstract from "./iziWrapModuleAbstract";
import { TThemeTypesAll } from "../iziModalWrapGlobal";
import iziModalWrap from "../iziModalWrap";
export default class iziWrapTheme extends iziWrapModuleAbstract {
    mode(themeKey: TThemeTypesAll): iziModalWrap;
    title(title: string, subTitle?: string): iziWrapTheme;
    subtitle(subTitle?: string): iziWrapTheme;
    icon(icon: string, iconText?: string): iziWrapTheme;
}
