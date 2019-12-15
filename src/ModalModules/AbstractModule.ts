"use strict";

import {iziModalWrap} from "../iziModalWrap";
import {iziModalWrapInterfaces} from "../Interfaces/iziModalWrapInterfaces";

export abstract class AbstractModule {
    protected modal: iziModalWrap.Modal;
    protected globalSettings: iziModalWrapInterfaces.Globals.Settings.All;
    constructor(modal: iziModalWrap.Modal, globalSettings: iziModalWrapInterfaces.Globals.Settings.All) {
        this.modal = modal;
        this.globalSettings = globalSettings;
    }
    end(): iziModalWrap.Modal {
        return this.modal;
    }
}
