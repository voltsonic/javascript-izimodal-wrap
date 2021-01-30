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
exports.Display = void 0;
var AbstractMethods_1 = require("./AbstractMethods");
var Display = /** @class */ (function (_super) {
    __extends(Display, _super);
    function Display() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Display.prototype.get = function () {
        return this.w.modal.$.iziModal('getState');
    };
    Display.prototype.fullscreen = function (enable) {
        if (enable === void 0) { enable = false; }
        this.w.modal.$.iziModal('setFullscreen', enable);
        return this;
    };
    Display.prototype.toggle = function () {
        this.w.modal.$.iziModal('toggle');
        return this;
    };
    Display.prototype.open = function () {
        this.w.modal.$.iziModal('open');
        return this;
    };
    Display.prototype.close = function () {
        this.w.modal.$.iziModal('close');
        return this;
    };
    return Display;
}(AbstractMethods_1.AbstractMethods));
exports.Display = Display;
//# sourceMappingURL=Display.js.map