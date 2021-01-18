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
var iziWrapMethodsContent = /** @class */ (function (_super) {
    __extends(iziWrapMethodsContent, _super);
    function iziWrapMethodsContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    iziWrapMethodsContent.prototype.backgroundColor = function (to) {
        this.w.modal.$.iziModal('setBackground', to);
        return this;
    };
    iziWrapMethodsContent.prototype.set = function (content, isDefault) {
        if (isDefault === void 0) { isDefault = true; }
        this.w.modal.$.iziModal('setContent', {
            content: content,
            default: isDefault
        });
        return this;
    };
    iziWrapMethodsContent.prototype.reset = function () {
        this.w.modal.$.iziModal('resetContent');
        return this;
    };
    return iziWrapMethodsContent;
}(iziWrapMethodsAbstract_1.default));
exports.default = iziWrapMethodsContent;
