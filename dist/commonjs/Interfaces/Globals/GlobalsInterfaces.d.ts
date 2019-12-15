import { iziModalWrapTypes } from "../../Types/iziModalWrapTypes";
import { iziModalWrapInterfaces } from "../iziModalWrapInterfaces";
export declare namespace GlobalsInterfaces {
    namespace Settings {
        interface All {
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
            layerUpBase: number;
            mobileMode: boolean;
            modalIdPrefix: string;
            theme: {
                colors: iziModalWrapInterfaces.Themes.Colors.All;
                icons: iziModalWrapInterfaces.Themes.Icons.All;
                widths: iziModalWrapInterfaces.Ui.Widths.All;
            };
            themeBase: iziModalWrapTypes.Themes.All;
        }
        interface Merge {
            classes?: {
                modals?: {
                    open: string;
                };
                modal?: {
                    open?: string;
                    opened?: string;
                    setup?: string;
                };
            };
            layerUpBase?: number;
            mobileMode?: boolean;
            modalIdPrefix?: string;
            theme?: {
                colors: iziModalWrapInterfaces.Themes.Colors.Merge;
                icons: iziModalWrapInterfaces.Themes.Icons.Merge;
                widths: iziModalWrapInterfaces.Ui.Widths.Merge;
            };
            themeBase?: iziModalWrapTypes.Themes.All;
        }
    }
}
