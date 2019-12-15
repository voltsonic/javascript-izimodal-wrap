"use strict";

/// <reference path="../typings/iziModal.d.ts" />

import {ThemeModule} from "./ModalModules/ThemeModule";

/* tslint:disable */
// @ts-ignore
const iziModal = require("izimodal-1.6.0");
/* tslint:enable */
$.fn.iziModal = iziModal;

import {ApiModule} from "./ModalModules/ApiModule";
import deepmerge = require("deepmerge");
import {iziModalWrapTypes} from "./Types/iziModalWrapTypes";
import {iziModalWrapInterfaces} from "./Interfaces/iziModalWrapInterfaces";

export namespace iziModalWrap {
    class BodyStyles {
        protected static bodyStyle: any = false;

        static getStyle(which: string, fallbackColor: string) {
            if(this.bodyStyle === false)
                this.bodyStyle = getComputedStyle(document.body);
            let test = this.bodyStyle.getPropertyValue(which);
            return(test.length > 0)?test:fallbackColor;
        }
    }

    const ThemesCore: iziModalWrapTypes.Themes.All[] = ["add", "edit", "delete", "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];

    const TemplateKeys = {
        modalIdKey: '{modalIdKey}'
    };

    /**
     * @access from class wrapper in @see
     * @see GlobalSettings|GlobalConfigure
     */
    let globalSettings: iziModalWrapInterfaces.Globals.Settings.All = {
        classes: {
            modals: {
                open: "modal-izi-open"
            },
            modal: {
                open: "modal-izi-open-"+TemplateKeys.modalIdKey,
                opened: "modal-izi-has-opened",
                setup: "modal-izi-ran"
            }
        },
        layerUpBase: 1072,
        mobileMode: false,
        modalIdPrefix: "modal-izi-"+TemplateKeys.modalIdKey,
        theme: {
            colors: {
                add         : "#2C5937",
                edit        : "#2364AA",
                delete      : "#930119",
                primary     : BodyStyles.getStyle("--primary",     "#007bff"),
                secondary   : BodyStyles.getStyle("--secondary",   "#6c757d"),
                success     : BodyStyles.getStyle("--success",     "#28a745"),
                danger      : BodyStyles.getStyle("--danger",      "#dc3545"),
                warning     : BodyStyles.getStyle("--warning",     "#ffc107"),
                info        : BodyStyles.getStyle("--info",        "#17a2b8"),
                light       : BodyStyles.getStyle("--light",       "#f8f9fa"),
                dark        : BodyStyles.getStyle("--dark",        "#343a40"),
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
        themeBase: "add"
    };

    let iziModalSettings: IziModalSettings = {
        focusInput: false,
        transitionIn: "fadeInUp",
        transitionOut: "fadeOutDown"
    };


    class GlobalSettings {
        static classes = {
            modal: {
                open: (modalIdKey: string) => globalSettings.classes.modal.open.replace(TemplateKeys.modalIdKey, modalIdKey),
            }
        };
        static modalIdPrefix = (modalIdKey: string): string => globalSettings.modalIdPrefix.replace(TemplateKeys.modalIdKey, modalIdKey);
    }

    export class GlobalConfigure {
        protected static updateModals(): void {}

        static any(to: iziModalWrapInterfaces.Globals.Settings.Merge): GlobalConfigure {
            // @ts-ignore
            globalSettings = deepmerge(globalSettings, to);
            this.updateModals();
            return this;
        }
        static addTheme(key: string, color?: string, icon?: string): GlobalConfigure {
            if(!color && !icon)
                throw new Error("Either color or icon is required.");
            if(ThemesCore.filter(v => (key === v)).length > 0)
                throw new Error(`Key ${key} already exists.`);

            if(color)
                globalSettings.theme.colors[key] = color;
            if(icon)
                globalSettings.theme.icons[key] = icon;

            this.updateModals();

            return this;
        }
        static izi(to: IziModalSettings): GlobalConfigure {
            iziModalSettings = deepmerge(iziModalSettings, to);
            return this;
        }
    }

    let ModalMaps: { [modalId: string]: Modal } = {};

    export class Modal {
        protected config: iziModalWrapInterfaces.Modal.Settings.All;
        protected modalIdKey: string;
        protected modalIdSel: string;
        protected modalOpenClass: string;

        public api: ApiModule;
        public theme: ThemeModule;

        constructor(config: iziModalWrapInterfaces.Modal.Settings.Merge, iziModalSettings?: IziModalSettings){
            if(!iziModalSettings) iziModalSettings = {};
            this.config = deepmerge({
                layerUp: 0,
                fullscreenIfMobile: false,
                fullscreenForced: false,
                openRightAway: false,
            }, config);
            this.modalIdKey = GlobalSettings.modalIdPrefix(this.config.modalId);
            this.modalIdSel = '#'+this.modalIdKey;
            this.modalOpenClass = GlobalSettings.classes.modal.open(this.config.modalId);
            this._setupModal();
            this._setup(iziModalSettings);
            ModalMaps[config.modalId] = this;
            this.api = new ApiModule(this, globalSettings);
            this.theme = new ThemeModule(this, globalSettings);
        }

        // Setup: Modal UI
        protected _setupModal(): void {
            if($(this.modalIdSel).length === 0)
                $('<body>')
                    .append(
                        $('<div class="iziModal">').attr("id", this.modalIdKey)
                    );
        }

        // Setup: iziModal
        protected _setup(iziModalSettings: IziModalSettings): void {
            let ConfigMaster: IziModalSettings = deepmerge(iziModalSettings, iziModalSettings);
            $(this.modalIdSel).addClass(globalSettings.classes.modal.setup);

            // Wrappers: On Opening
            ((onOpening: any) => {
                ConfigMaster.onOpening = () => {
                    $('body')
                        .addClass(globalSettings.classes.modals.open)
                        .addClass(this.modalOpenClass);
                    if(typeof onOpening === "function") onOpening();
                };
            })(ConfigMaster.onOpening);

            // Wrappers: On Closing
            ((onClosing: any) => {
                ConfigMaster.onClosing = () => {
                    $(this.modalIdSel).addClass(globalSettings.classes.modal.opened);
                    let $b = $("<body>");
                    if($(".iziModal:visible").length === 1)
                        $b.removeClass(globalSettings.classes.modals.open);
                    $b.removeClass(this.modalOpenClass);

                    $('body')
                        .addClass(globalSettings.classes.modals.open)
                        .addClass(this.modalOpenClass);

                    if(typeof onClosing === "function") onClosing();
                };
            })(ConfigMaster.onClosing);

            ConfigMaster.zindex = (globalSettings.layerUpBase + this.config.layerUp);

            $(this.modalIdSel).iziModal(ConfigMaster);

            if(this.config.fullscreenForced || this.config.fullscreenIfMobile && globalSettings.mobileMode)
                $(this.modalIdSel).iziModal("setFullscreen", true);

            if(this.config.openRightAway)
                $(this.modalIdSel).iziModal("open");
        }

        public applyMethod(method: string, options?: any): any {
            return $(this.modalIdSel).iziModal(method, options);
        }
        public applyMethods(apply: { [method: string]: any }){
            Object.keys(apply).forEach((method: any) => {
                this.applyMethod(method, apply[method]);
            });
        }
    }

    export const Get = (modalId: string): Modal => {
        if(!ModalMaps.hasOwnProperty(modalId))
            throw new Error(`${modalId} not loaded, please Init() modal.`);
        return ModalMaps[modalId];
    };
}
