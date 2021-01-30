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
exports.Position = void 0;
var AbstractMethods_1 = require("./AbstractMethods");
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Position.prototype.top = function (to) {
        this.w.modal.$.iziModal('setTop', to);
        return this;
    };
    Position.prototype.bottom = function (to) {
        this.w.modal.$.iziModal('setBottom', 100);
        return this;
    };
    Position.prototype.width = function (to) {
        this.w.modal.$.iziModal('setWidth', to);
        return this;
    };
    Position.prototype.zIndex = function (to) {
        this.w.modal.$.iziModal('setZindex', to);
        return this;
    };
    return Position;
}(AbstractMethods_1.AbstractMethods));
exports.Position = Position;
//# sourceMappingURL=Position.js.map