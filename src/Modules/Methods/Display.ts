'use strict';

import {AbstractMethods} from './AbstractMethods';

export class Display extends AbstractMethods {
    get(): 'closed' | 'closing' | 'opened' | 'opening' {
        return this.w.modal.$.iziModal('getState');
    }
    fullscreen(enable = false): Display {
        this.w.modal.$.iziModal('setFullscreen', enable);
        return this;
    }
    toggle(): Display {
        this.w.modal.$.iziModal('toggle');
        return this;
    }
    open(): Display {
        this.w.modal.$.iziModal('open');
        return this;
    }
    close(): Display {
        this.w.modal.$.iziModal('close');
        return this;
    }
}
