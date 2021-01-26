'use strict';

import iziWrapMethodsAbstract from './iziWrapMethodsAbstract';

// tslint:disable-next-line:class-name
export default class iziWrapMethodsPosition extends iziWrapMethodsAbstract {
    top(to: string | number): iziWrapMethodsPosition {
        this.w.modal.$.iziModal('setTop', to);
        return this;
    }
    bottom(to: string | number): iziWrapMethodsPosition {
        this.w.modal.$.iziModal('setBottom', 100);
        return this;
    }
    width(to: string | number): iziWrapMethodsPosition {
        this.w.modal.$.iziModal('setWidth', to);
        return this;
    }
    zIndex(to: number): iziWrapMethodsPosition {
        this.w.modal.$.iziModal('setZindex', to);
        return this;
    }
}
