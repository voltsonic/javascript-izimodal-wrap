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
var iziWrapMethodsGroup = /** @class */ (function (_super) {
    __extends(iziWrapMethodsGroup, _super);
    function iziWrapMethodsGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    iziWrapMethodsGroup.prototype.get = function () {
        return this.w.modal.$.iziModal('getGroup');
    };
    iziWrapMethodsGroup.prototype.set = function (to) {
        this.w.modal.$.iziModal('setGroup', to);
        return this;
    };
    iziWrapMethodsGroup.prototype.next = function (transitionIn, transitionOut) {
        this.w.modal.$.iziModal('next', { transitionIn: transitionIn, transitionOut: transitionOut });
        return this.up();
    };
    iziWrapMethodsGroup.prototype.prev = function (transitionIn, transitionOut) {
        this.w.modal.$.iziModal('prev', { transitionIn: transitionIn, transitionOut: transitionOut });
        return this.up();
    };
    return iziWrapMethodsGroup;
}(iziWrapMethodsAbstract_1.default));
exports.default = iziWrapMethodsGroup;
