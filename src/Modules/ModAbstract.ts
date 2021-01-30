'use strict';

import iziModalWrap from '../iziModalWrap';

export abstract class ModAbstract {
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
