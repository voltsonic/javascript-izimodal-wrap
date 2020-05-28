"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require('util');
let InvalidModeIMW = /** @class */ (() => {
    class InvalidModeIMW extends Error {
        constructor(message) {
            super(util.format(InvalidModeIMW.DEFAULT_MESSAGE, message));
            this.message = message;
            this.name = "InvalidModeIMW";
            this.stack = new Error().stack;
        }
    }
    InvalidModeIMW.DEFAULT_MESSAGE = 'Invalid Theme Mode: %s';
    return InvalidModeIMW;
})();
exports.default = InvalidModeIMW;
