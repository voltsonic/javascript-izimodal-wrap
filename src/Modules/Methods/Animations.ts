'use strict';

import {AbstractMethods} from './AbstractMethods';

export class Animations extends AbstractMethods {
    transitionIn(to: string): Animations {
        this.w.modal.$.iziModal('setTransitionIn', to);
        return this;
    }
    transitionOut(to: string): Animations {
        this.w.modal.$.iziModal('setTransitionOut', to);
        return this;
    }
}
