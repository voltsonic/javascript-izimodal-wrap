"use strict";

import iziWrapMethods from "../iziWrapMethods";
import iziWrapMethodsAbstract from "./iziWrapMethodsAbstract";

export default class iziWrapMethodsHeader extends iziWrapMethodsAbstract {
    color(to: string): iziWrapMethodsHeader {
        this.w.modal.$.iziModal('setHeaderColor', to);
        return this;
    }
    enable(): iziWrapMethodsHeader {
        this.w.modal.$.iziModal('setHeader', true);
        return this;
    }
    disable(): iziWrapMethodsHeader {
        this.w.modal.$.iziModal('setHeader', false);
        return this;
    }
    iconClass(to: string): iziWrapMethodsHeader  {
        this.w.modal.$.iziModal('setIcon', to);
        return this;
    }
    iconText(to: string): iziWrapMethodsHeader  {
        this.w.modal.$.iziModal('setIconText', to);
        return this;
    }
    title(to: string): iziWrapMethodsHeader  {
        this.w.modal.$.iziModal('setTitle', to);
        return this;
    }
    subtitle(to: string): iziWrapMethodsHeader  {
        this.w.modal.$.iziModal('setSubtitle', to ?? '');
        return this;
    }
}
