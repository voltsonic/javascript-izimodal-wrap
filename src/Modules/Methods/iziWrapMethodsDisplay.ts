'use strict';

import iziWrapMethodsAbstract from './iziWrapMethodsAbstract';

// tslint:disable-next-line:class-name
export default class iziWrapMethodsDisplay extends iziWrapMethodsAbstract {
    get(): 'closed' | 'closing' | 'opened' | 'opening' {
        return this.w.modal.$.iziModal('getState');
    }
    fullscreen(enable = false): iziWrapMethodsDisplay {
        this.w.modal.$.iziModal('setFullscreen', enable);
        return this;
    }
    toggle(): iziWrapMethodsDisplay {
        this.w.modal.$.iziModal('toggle');
        return this;
    }
    open(): iziWrapMethodsDisplay {
        this.w.modal.$.iziModal('open');
        return this;
    }
    close(): iziWrapMethodsDisplay {
        this.w.modal.$.iziModal('close');
        return this;
    }
}
