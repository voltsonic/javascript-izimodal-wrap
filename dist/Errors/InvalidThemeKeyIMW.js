'use strict';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidThemeKeyIMW = void 0;
var util_1 = __importDefault(require("util"));
var InvalidThemeKeyIMW = /** @class */ (function (_super) {
    __extends(InvalidThemeKeyIMW, _super);
    function InvalidThemeKeyIMW(themeKey) {
        var _this = _super.call(this, util_1.default.format(InvalidThemeKeyIMW.DEFAULT_MESSAGE, themeKey)) || this;
        _this.themeKey = themeKey;
        _this.name = 'InvalidThemeKeyIMW';
        _this.stack = new Error().stack;
        return _this;
    }
    InvalidThemeKeyIMW.DEFAULT_MESSAGE = 'Invalid Theme Key: %s';
    return InvalidThemeKeyIMW;
}(Error));
exports.InvalidThemeKeyIMW = InvalidThemeKeyIMW;
//# sourceMappingURL=InvalidThemeKeyIMW.js.map