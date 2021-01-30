'use strict';

export class BodyTagErrorIMW extends Error {
    public static DEFAULT_MESSAGE = 'Body tag not accessible';

    constructor() {
        super(BodyTagErrorIMW.DEFAULT_MESSAGE);
        this.name = 'BodyTagErrorIMW';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
