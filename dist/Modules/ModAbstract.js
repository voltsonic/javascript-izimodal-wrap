'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModAbstract = void 0;
var ModAbstract = /** @class */ (function () {
    function ModAbstract(modal) {
        this.w = modal;
        this.init();
    }
    // tslint:disable-next-line:no-empty
    ModAbstract.prototype.init = function () { };
    ModAbstract.prototype.up = function () {
        return this.w;
    };
    return ModAbstract;
}());
exports.ModAbstract = ModAbstract;
//# sourceMappingURL=ModAbstract.js.map