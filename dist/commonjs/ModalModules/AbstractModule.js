"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractModule = /** @class */ (function () {
    function AbstractModule(modal, globalSettings) {
        this.modal = modal;
        this.globalSettings = globalSettings;
    }
    AbstractModule.prototype.end = function () {
        return this.modal;
    };
    return AbstractModule;
}());
exports.AbstractModule = AbstractModule;
