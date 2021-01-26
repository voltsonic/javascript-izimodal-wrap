'use strict';

import iziWrapMethodsAbstract from './iziWrapMethodsAbstract';

/**
 * @category Methods
 */
// tslint:disable-next-line:class-name
export default class iziWrapMethodsContent extends iziWrapMethodsAbstract {
    backgroundColor(to: string): iziWrapMethodsContent {
        this.w.modal.$.iziModal('setBackground', to);
        return this;
    }
    set(content: string, isDefault: boolean = true): iziWrapMethodsContent {
        this.w.modal.$.iziModal('setContent', {
            content,
            default: isDefault
        });
        return this;
    }
    reset(): iziWrapMethodsContent {
        this.w.modal.$.iziModal('resetContent');
        return this;
    }
}
