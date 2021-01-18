"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util = require('util');
var InvalidThemeKeyIMW = /** @class */ (function (_super) {
    __extends(InvalidThemeKeyIMW, _super);
    function InvalidThemeKeyIMW(message) {
        var _this = _super.call(this, util.format(InvalidThemeKeyIMW.DEFAULT_MESSAGE, message)) || this;
        _this.message = message;
        _this.name = "InvalidModeIMW";
        _this.stack = new Error().stack;
        return _this;
    }
    InvalidThemeKeyIMW.DEFAULT_MESSAGE = 'Invalid Theme Key: %s';
    return InvalidThemeKeyIMW;
}(Error));
exports.default = InvalidThemeKeyIMW;
