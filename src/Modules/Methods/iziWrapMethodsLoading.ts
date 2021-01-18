"use strict";

import iziWrapMethods from "../iziWrapMethods";
import iziWrapMethodsAbstract from "./iziWrapMethodsAbstract";

export default class iziWrapMethodsLoading extends iziWrapMethodsAbstract {
    start(): iziWrapMethods {
        this.w.modal.$.iziModal('startLoading');
        return this.up();
    }
    stop(): iziWrapMethods {
        this.w.modal.$.iziModal('stopLoading');
        return this.up();
    }
}
