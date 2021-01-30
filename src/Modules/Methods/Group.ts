'use strict';

import {ModMethod} from '../ModMethod';
import {AbstractMethods} from './AbstractMethods';

export class Group extends AbstractMethods {
    get(){
        return this.w.modal.$.iziModal('getGroup');
    }
    set(to: string): Group {
        this.w.modal.$.iziModal('setGroup', to);
        return this;
    }
    next(transitionIn?: string, transitionOut?: string): ModMethod {
        this.w.modal.$.iziModal('next', {transitionIn, transitionOut});
        return this.up();
    }
    prev(transitionIn?: string, transitionOut?: string): ModMethod {
        this.w.modal.$.iziModal('prev', {transitionIn, transitionOut});
        return this.up();
    }
}
