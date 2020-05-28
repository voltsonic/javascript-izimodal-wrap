"use strict";

const util = require('util');

export default class InvalidModeIMW extends Error {
    public static DEFAULT_MESSAGE = 'Invalid Theme Mode: %s';

    constructor(public message: string) {
        super(util.format(InvalidModeIMW.DEFAULT_MESSAGE, message));
        this.name = "InvalidModeIMW";
        this.stack = (<any> new Error()).stack;
    }
}
