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
var iziWrapMethodsHeader = /** @class */ (function (_super) {
    __extends(iziWrapMethodsHeader, _super);
    function iziWrapMethodsHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    iziWrapMethodsHeader.prototype.color = function (to) {
        this.w.modal.$.iziModal('setHeaderColor', to);
        return this;
    };
    iziWrapMethodsHeader.prototype.enable = function () {
        this.w.modal.$.iziModal('setHeader', true);
        return this;
    };
    iziWrapMethodsHeader.prototype.disable = function () {
        this.w.modal.$.iziModal('setHeader', false);
        return this;
    };
    iziWrapMethodsHeader.prototype.iconClass = function (to) {
        this.w.modal.$.iziModal('setIcon', to);
        return this;
    };
    iziWrapMethodsHeader.prototype.iconText = function (to) {
        this.w.modal.$.iziModal('setIconText', to);
        return this;
    };
    iziWrapMethodsHeader.prototype.title = function (to) {
        this.w.modal.$.iziModal('setTitle', to);
        return this;
    };
    iziWrapMethodsHeader.prototype.subtitle = function (to) {
        this.w.modal.$.iziModal('setSubtitle', to !== null && to !== void 0 ? to : '');
        return this;
    };
    return iziWrapMethodsHeader;
}(iziWrapMethodsAbstract_1.default));
exports.default = iziWrapMethodsHeader;
