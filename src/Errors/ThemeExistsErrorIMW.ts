'use strict';

import util from 'util';

export class ThemeExistsErrorIMW extends Error {
    public static DEFAULT_MESSAGE = 'Attempting to add "%s" twice for iziModalWrapGlobal.addTheme().';

    constructor(keyOverlap: string) {
        super(util.format(ThemeExistsErrorIMW.DEFAULT_MESSAGE, keyOverlap));
        this.name = 'ThemeExistsErrorIMW';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
