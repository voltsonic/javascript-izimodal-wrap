import { ThemeModule } from "./ModalModules/ThemeModule";
import { ApiModule } from "./ModalModules/ApiModule";
import { iziModalWrapInterfaces } from "./Interfaces/iziModalWrapInterfaces";
export declare namespace iziModalWrap {
    class GlobalConfigure {
        protected static updateModals(): void;
        static any(to: iziModalWrapInterfaces.Globals.Settings.Merge): GlobalConfigure;
        static addTheme(key: string, color?: string, icon?: string): GlobalConfigure;
        static izi(to: IziModalSettings): GlobalConfigure;
    }
    class Modal {
        protected config: iziModalWrapInterfaces.Modal.Settings.All;
        protected modalIdKey: string;
        protected modalIdSel: string;
        protected modalOpenClass: string;
        api: ApiModule;
        theme: ThemeModule;
        constructor(config: iziModalWrapInterfaces.Modal.Settings.Merge, iziModalSettings?: IziModalSettings);
        protected _setupModal(): void;
        protected _setup(iziModalSettings: IziModalSettings): void;
        applyMethod(method: string, options?: any): any;
        applyMethods(apply: {
            [method: string]: any;
        }): void;
    }
    const Get: (modalId: string) => Modal;
}
