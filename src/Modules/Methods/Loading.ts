'use strict';

import {ModMethod} from '../ModMethod';
import {AbstractMethods} from './AbstractMethods';

export class Loading extends AbstractMethods {
    start(): ModMethod {
        this.w.modal.$.iziModal('startLoading');
        return this.up();
    }
    stop(): ModMethod {
        this.w.modal.$.iziModal('stopLoading');
        return this.up();
    }
}
