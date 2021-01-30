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
exports.ThemeExistsErrorIMW = void 0;
var util_1 = __importDefault(require("util"));
var ThemeExistsErrorIMW = /** @class */ (function (_super) {
    __extends(ThemeExistsErrorIMW, _super);
    function ThemeExistsErrorIMW(keyOverlap) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, util_1.default.format(ThemeExistsErrorIMW.DEFAULT_MESSAGE, keyOverlap)) || this;
        _this.name = 'ThemeExistsErrorIMW';
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    ThemeExistsErrorIMW.DEFAULT_MESSAGE = 'Attempting to add "%s" twice for iziModalWrapGlobal.addTheme().';
    return ThemeExistsErrorIMW;
}(Error));
exports.ThemeExistsErrorIMW = ThemeExistsErrorIMW;
//# sourceMappingURL=ThemeExistsErrorIMW.js.map