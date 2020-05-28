"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require('util');
let InvalidThemeKeyIMW = /** @class */ (() => {
    class InvalidThemeKeyIMW extends Error {
        constructor(message) {
            super(util.format(InvalidThemeKeyIMW.DEFAULT_MESSAGE, message));
            this.message = message;
            this.name = "InvalidThemeKeyIMW";
            this.stack = new Error().stack;
        }
    }
    InvalidThemeKeyIMW.DEFAULT_MESSAGE = 'Invalid Theme Key: %s';
    return InvalidThemeKeyIMW;
})();
exports.default = InvalidThemeKeyIMW;
