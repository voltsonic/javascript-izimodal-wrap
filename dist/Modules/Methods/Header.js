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
exports.Header = void 0;
var AbstractMethods_1 = require("./AbstractMethods");
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.color = function (to) {
        this.w.modal.$.iziModal('setHeaderColor', to);
        return this;
    };
    Header.prototype.enable = function () {
        this.w.modal.$.iziModal('setHeader', true);
        return this;
    };
    Header.prototype.disable = function () {
        this.w.modal.$.iziModal('setHeader', false);
        return this;
    };
    Header.prototype.iconClass = function (to) {
        this.w.modal.$.iziModal('setIcon', to);
        return this;
    };
    Header.prototype.iconText = function (to) {
        this.w.modal.$.iziModal('setIconText', to);
        return this;
    };
    Header.prototype.title = function (to) {
        this.w.modal.$.iziModal('setTitle', to);
        return this;
    };
    Header.prototype.subtitle = function (to) {
        this.w.modal.$.iziModal('setSubtitle', to !== null && to !== void 0 ? to : '');
        return this;
    };
    return Header;
}(AbstractMethods_1.AbstractMethods));
exports.Header = Header;
//# sourceMappingURL=Header.js.map