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
var iziWrapMethodsProgress = /** @class */ (function (_super) {
    __extends(iziWrapMethodsProgress, _super);
    function iziWrapMethodsProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    iziWrapMethodsProgress.prototype.start = function () {
        this.w.modal.$.iziModal('startProgress');
        return this.up();
    };
    iziWrapMethodsProgress.prototype.pause = function () {
        this.w.modal.$.iziModal('pauseProgress');
        return this.up();
    };
    iziWrapMethodsProgress.prototype.resume = function () {
        this.w.modal.$.iziModal('resumeProgress');
        return this.up();
    };
    iziWrapMethodsProgress.prototype.reset = function () {
        this.w.modal.$.iziModal('resetProgress');
        return this;
    };
    return iziWrapMethodsProgress;
}(iziWrapMethodsAbstract_1.default));
exports.default = iziWrapMethodsProgress;
