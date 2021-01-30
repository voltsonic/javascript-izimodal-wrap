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
exports.Content = void 0;
var AbstractMethods_1 = require("./AbstractMethods");
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content.prototype.backgroundColor = function (to) {
        this.w.modal.$.iziModal('setBackground', to);
        return this;
    };
    Content.prototype.set = function (content, isDefault) {
        if (isDefault === void 0) { isDefault = true; }
        this.w.modal.$.iziModal('setContent', {
            content: content,
            default: isDefault
        });
        return this;
    };
    Content.prototype.reset = function () {
        this.w.modal.$.iziModal('resetContent');
        return this;
    };
    return Content;
}(AbstractMethods_1.AbstractMethods));
exports.Content = Content;
//# sourceMappingURL=Content.js.map