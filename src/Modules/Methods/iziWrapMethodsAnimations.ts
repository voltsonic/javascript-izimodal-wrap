"use strict";

import iziWrapMethods from "../iziWrapMethods";
import iziWrapMethodsAbstract from "./iziWrapMethodsAbstract";

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
