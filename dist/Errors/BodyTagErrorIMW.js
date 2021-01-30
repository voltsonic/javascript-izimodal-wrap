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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyTagErrorIMW = void 0;
var BodyTagErrorIMW = /** @class */ (function (_super) {
    __extends(BodyTagErrorIMW, _super);
    function BodyTagErrorIMW() {
        var _newTarget = this.constructor;
        var _this = _super.call(this, BodyTagErrorIMW.DEFAULT_MESSAGE) || this;
        _this.name = 'BodyTagErrorIMW';
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    BodyTagErrorIMW.DEFAULT_MESSAGE = 'Body tag not accessible';
    return BodyTagErrorIMW;
}(Error));
exports.BodyTagErrorIMW = BodyTagErrorIMW;
//# sourceMappingURL=BodyTagErrorIMW.js.map