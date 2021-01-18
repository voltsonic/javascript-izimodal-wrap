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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iziWrapMethodsAbstract_1 = __importDefault(require("./iziWrapMethodsAbstract"));
var iziWrapMethodsPosition = /** @class */ (function (_super) {
    __extends(iziWrapMethodsPosition, _super);
    function iziWrapMethodsPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    iziWrapMethodsPosition.prototype.top = function (to) {
        this.w.modal.$.iziModal('setTop', to);
        return this;
    };
    iziWrapMethodsPosition.prototype.bottom = function (to) {
        this.w.modal.$.iziModal('setBottom', 100);
        return this;
    };
    iziWrapMethodsPosition.prototype.width = function (to) {
        this.w.modal.$.iziModal('setWidth', to);
        return this;
    };
    iziWrapMethodsPosition.prototype.zIndex = function (to) {
        this.w.modal.$.iziModal('setZindex', to);
        return this;
    };
    return iziWrapMethodsPosition;
}(iziWrapMethodsAbstract_1.default));
exports.default = iziWrapMethodsPosition;
