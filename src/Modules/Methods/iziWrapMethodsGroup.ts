'use strict';

import iziWrapMethods from '../iziWrapMethods';
import iziWrapMethodsAbstract from './iziWrapMethodsAbstract';

// tslint:disable-next-line:class-name
export default class iziWrapMethodsGroup extends iziWrapMethodsAbstract {
    get(){
        return this.w.modal.$.iziModal('getGroup');
    }
    set(to: string): iziWrapMethodsGroup {
        this.w.modal.$.iziModal('setGroup', to);
        return this;
    }
    next(transitionIn?: string, transitionOut?: string): iziWrapMethods {
        this.w.modal.$.iziModal('next', {transitionIn, transitionOut});
        return this.up();
    }
    prev(transitionIn?: string, transitionOut?: string): iziWrapMethods {
        this.w.modal.$.iziModal('prev', {transitionIn, transitionOut});
        return this.up();
    }
}
