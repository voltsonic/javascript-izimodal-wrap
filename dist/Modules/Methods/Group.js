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
exports.Group = void 0;
var AbstractMethods_1 = require("./AbstractMethods");
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Group.prototype.get = function () {
        return this.w.modal.$.iziModal('getGroup');
    };
    Group.prototype.set = function (to) {
        this.w.modal.$.iziModal('setGroup', to);
        return this;
    };
    Group.prototype.next = function (transitionIn, transitionOut) {
        this.w.modal.$.iziModal('next', { transitionIn: transitionIn, transitionOut: transitionOut });
        return this.up();
    };
    Group.prototype.prev = function (transitionIn, transitionOut) {
        this.w.modal.$.iziModal('prev', { transitionIn: transitionIn, transitionOut: transitionOut });
        return this.up();
    };
    return Group;
}(AbstractMethods_1.AbstractMethods));
exports.Group = Group;
//# sourceMappingURL=Group.js.map