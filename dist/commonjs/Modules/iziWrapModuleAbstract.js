"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iziWrapModuleAbstract = /** @class */ (function () {
    function iziWrapModuleAbstract(modal) {
        this.w = modal;
        this.init();
    }
    iziWrapModuleAbstract.prototype.init = function () { };
    iziWrapModuleAbstract.prototype.up = function () {
        return this.w;
    };
    return iziWrapModuleAbstract;
}());
exports.default = iziWrapModuleAbstract;
