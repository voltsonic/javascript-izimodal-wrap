'use strict';

import iziModalWrap from '../iziModalWrap';

// tslint:disable-next-line:class-name
export default abstract class iziWrapModuleAbstract {
    protected w: iziModalWrap;
    constructor(modal: iziModalWrap) {
        this.w = modal;
        this.init();
    }

    // tslint:disable-next-line:no-empty
    init(){}

    up(): any | iziModalWrap {
        return this.w;
    }
}
