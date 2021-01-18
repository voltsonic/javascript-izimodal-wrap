"use strict";

import iziWrapMethods from "../iziWrapMethods";
import iziWrapMethodsAbstract from "./iziWrapMethodsAbstract";

export default class iziWrapMethodsProgress extends iziWrapMethodsAbstract {
    start(): iziWrapMethods {
        this.w.modal.$.iziModal('startProgress');
        return this.up();
    }
    pause(): iziWrapMethods {
        this.w.modal.$.iziModal('pauseProgress');
        return this.up();
    }
    resume(): iziWrapMethods {
        this.w.modal.$.iziModal('resumeProgress');
        return this.up();
    }
    reset(): iziWrapMethodsProgress {
        this.w.modal.$.iziModal('resetProgress');
        return this;
    }
}
