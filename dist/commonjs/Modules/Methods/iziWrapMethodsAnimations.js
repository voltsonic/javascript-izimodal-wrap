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
var iziWrapMethodsAnimations = /** @class */ (function (_super) {
    __extends(iziWrapMethodsAnimations, _super);
    function iziWrapMethodsAnimations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    iziWrapMethodsAnimations.prototype.transitionIn = function (to) {
        this.w.modal.$.iziModal('setTransitionIn', to);
        return this;
    };
    iziWrapMethodsAnimations.prototype.transitionOut = function (to) {
        this.w.modal.$.iziModal('setTransitionOut', to);
        return this;
    };
    return iziWrapMethodsAnimations;
}(iziWrapMethodsAbstract_1.default));
exports.default = iziWrapMethodsAnimations;
