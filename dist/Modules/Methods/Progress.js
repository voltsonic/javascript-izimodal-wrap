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
exports.Progress = void 0;
var AbstractMethods_1 = require("./AbstractMethods");
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.start = function () {
        this.w.modal.$.iziModal('startProgress');
        return this.up();
    };
    Progress.prototype.pause = function () {
        this.w.modal.$.iziModal('pauseProgress');
        return this.up();
    };
    Progress.prototype.resume = function () {
        this.w.modal.$.iziModal('resumeProgress');
        return this.up();
    };
    Progress.prototype.reset = function () {
        this.w.modal.$.iziModal('resetProgress');
        return this;
    };
    return Progress;
}(AbstractMethods_1.AbstractMethods));
exports.Progress = Progress;
//# sourceMappingURL=Progress.js.map