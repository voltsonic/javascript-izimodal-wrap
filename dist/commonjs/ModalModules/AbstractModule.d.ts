import { iziModalWrap } from "../iziModalWrap";
import { iziModalWrapInterfaces } from "../Interfaces/iziModalWrapInterfaces";
export declare abstract class AbstractModule {
    protected modal: iziModalWrap.Modal;
    protected globalSettings: iziModalWrapInterfaces.Globals.Settings.All;
    constructor(modal: iziModalWrap.Modal, globalSettings: iziModalWrapInterfaces.Globals.Settings.All);
    end(): iziModalWrap.Modal;
}
