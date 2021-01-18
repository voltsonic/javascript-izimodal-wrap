"use strict";

import iziModalWrap from "../iziModalWrap";

export default abstract class iziWrapModuleAbstract {
    protected w: iziModalWrap;
    constructor(modal: iziModalWrap) {
        this.w = modal;
        this.init();
    }

    init(){}

    up(): any | iziModalWrap {
        return this.w;
    }
}
