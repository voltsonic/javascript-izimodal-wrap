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
var iziWrapMethodsDisplay = /** @class */ (function (_super) {
    __extends(iziWrapMethodsDisplay, _super);
    function iziWrapMethodsDisplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    iziWrapMethodsDisplay.prototype.get = function () {
        return this.w.modal.$.iziModal('getState');
    };
    iziWrapMethodsDisplay.prototype.fullscreen = function (enable) {
        if (enable === void 0) { enable = false; }
        this.w.modal.$.iziModal('setFullscreen', enable);
        return this;
    };
    iziWrapMethodsDisplay.prototype.toggle = function () {
        this.w.modal.$.iziModal('toggle');
        return this;
    };
    iziWrapMethodsDisplay.prototype.open = function () {
        this.w.modal.$.iziModal('open');
        return this;
    };
    iziWrapMethodsDisplay.prototype.close = function () {
        this.w.modal.$.iziModal('close');
        return this;
    };
    return iziWrapMethodsDisplay;
}(iziWrapMethodsAbstract_1.default));
exports.default = iziWrapMethodsDisplay;
