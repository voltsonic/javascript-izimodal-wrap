/* tslint:disable:class-name */
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
exports.AbstractMethods = void 0;
var ModAbstract_1 = require("../ModAbstract");
/**
 * @hidden
 */
var AbstractMethods = /** @class */ (function (_super) {
    __extends(AbstractMethods, _super);
    function AbstractMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractMethods.prototype.up = function () {
        return this.w.methods;
    };
    return AbstractMethods;
}(ModAbstract_1.ModAbstract));
exports.AbstractMethods = AbstractMethods;
//# sourceMappingURL=AbstractMethods.js.map