'use strict';

import {ModMethod} from '../ModMethod';
import {AbstractMethods} from './AbstractMethods';

export class Progress extends AbstractMethods {
    start(): ModMethod {
        this.w.modal.$.iziModal('startProgress');
        return this.up();
    }
    pause(): ModMethod {
        this.w.modal.$.iziModal('pauseProgress');
        return this.up();
    }
    resume(): ModMethod {
        this.w.modal.$.iziModal('resumeProgress');
        return this.up();
    }
    reset(): Progress {
        this.w.modal.$.iziModal('resetProgress');
        return this;
    }
}
