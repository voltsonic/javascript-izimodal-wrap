'use strict';

import iziWrapMethodsAbstract from './iziWrapMethodsAbstract';

/**
 * @category ASDF
 */
// tslint:disable-next-line:class-name
export default class iziWrapMethodsAnimations extends iziWrapMethodsAbstract {
    transitionIn(to: string): iziWrapMethodsAnimations {
        this.w.modal.$.iziModal('setTransitionIn', to);
        return this;
    }
    transitionOut(to: string): iziWrapMethodsAnimations {
        this.w.modal.$.iziModal('setTransitionOut', to);
        return this;
    }
}
