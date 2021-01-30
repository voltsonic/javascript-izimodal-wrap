'use strict';

import {AbstractMethods} from './AbstractMethods';

export class Content extends AbstractMethods {
    backgroundColor(to: string): Content {
        this.w.modal.$.iziModal('setBackground', to);
        return this;
    }
    set(content: string, isDefault: boolean = true): Content {
        this.w.modal.$.iziModal('setContent', {
            content,
            default: isDefault
        });
        return this;
    }
    reset(): Content {
        this.w.modal.$.iziModal('resetContent');
        return this;
    }
}
