'use strict';

import util from 'util';

export class InvalidThemeKeyIMW extends Error {
    public static DEFAULT_MESSAGE = 'Invalid Theme Key: %s';

    constructor(public themeKey: string) {
        super(util.format(InvalidThemeKeyIMW.DEFAULT_MESSAGE, themeKey));
        this.name = 'InvalidThemeKeyIMW';
        this.stack = (new Error() as any).stack;
    }
}
