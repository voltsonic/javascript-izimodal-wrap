'use strict';

export class BodyTagErrorIMW extends Error {
    constructor() {
        super('Body tag not accessible');
        this.name = 'BodyTagErrorIMW';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
