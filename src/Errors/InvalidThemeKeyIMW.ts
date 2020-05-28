"use strict";

const util = require('util');

export default class InvalidThemeKeyIMW extends Error {
    public static DEFAULT_MESSAGE = 'Invalid Theme Key: %s';

    constructor(public message: string) {
        super(util.format(InvalidThemeKeyIMW.DEFAULT_MESSAGE, message));
        this.name = "InvalidThemeKeyIMW";
        this.stack = (<any> new Error()).stack;
    }
}
