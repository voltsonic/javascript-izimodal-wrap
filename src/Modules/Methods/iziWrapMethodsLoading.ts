'use strict';

import iziWrapMethods from '../iziWrapMethods';
import iziWrapMethodsAbstract from './iziWrapMethodsAbstract';

// tslint:disable-next-line:class-name
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
