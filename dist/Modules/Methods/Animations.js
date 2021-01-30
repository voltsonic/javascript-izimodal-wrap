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
exports.Animations = void 0;
var AbstractMethods_1 = require("./AbstractMethods");
var Animations = /** @class */ (function (_super) {
    __extends(Animations, _super);
    function Animations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animations.prototype.transitionIn = function (to) {
        this.w.modal.$.iziModal('setTransitionIn', to);
        return this;
    };
    Animations.prototype.transitionOut = function (to) {
        this.w.modal.$.iziModal('setTransitionOut', to);
        return this;
    };
    return Animations;
}(AbstractMethods_1.AbstractMethods));
exports.Animations = Animations;
//# sourceMappingURL=Animations.js.map