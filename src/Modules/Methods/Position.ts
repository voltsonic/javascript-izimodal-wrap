'use strict';

import {AbstractMethods} from './AbstractMethods';

export class Position extends AbstractMethods {
    top(to: string | number): Position {
        this.w.modal.$.iziModal('setTop', to);
        return this;
    }
    bottom(to: string | number): Position {
        this.w.modal.$.iziModal('setBottom', 100);
        return this;
    }
    width(to: string | number): Position {
        this.w.modal.$.iziModal('setWidth', to);
        return this;
    }
    zIndex(to: number): Position {
        this.w.modal.$.iziModal('setZindex', to);
        return this;
    }
}
