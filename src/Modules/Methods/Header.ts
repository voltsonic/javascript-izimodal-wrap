'use strict';

import {AbstractMethods} from './AbstractMethods';

export class Header extends AbstractMethods {
    color(to: string): Header {
        this.w.modal.$.iziModal('setHeaderColor', to);
        return this;
    }
    enable(): Header {
        this.w.modal.$.iziModal('setHeader', true);
        return this;
    }
    disable(): Header {
        this.w.modal.$.iziModal('setHeader', false);
        return this;
    }
    iconClass(to: string): Header  {
        this.w.modal.$.iziModal('setIcon', to);
        return this;
    }
    iconText(to: string): Header  {
        this.w.modal.$.iziModal('setIconText', to);
        return this;
    }
    title(to: string): Header  {
        this.w.modal.$.iziModal('setTitle', to);
        return this;
    }
    subtitle(to: string): Header  {
        this.w.modal.$.iziModal('setSubtitle', to ?? '');
        return this;
    }
}
