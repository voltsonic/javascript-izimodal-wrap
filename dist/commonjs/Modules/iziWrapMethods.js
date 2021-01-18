"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iziWrapModuleAbstract_1 = __importDefault(require("./iziWrapModuleAbstract"));
var iziWrapMethodsAnimations_1 = __importDefault(require("./Methods/iziWrapMethodsAnimations"));
var iziWrapMethodsContent_1 = __importDefault(require("./Methods/iziWrapMethodsContent"));
var iziWrapMethodsDisplay_1 = __importDefault(require("./Methods/iziWrapMethodsDisplay"));
var iziWrapMethodsGroup_1 = __importDefault(require("./Methods/iziWrapMethodsGroup"));
var iziWrapMethodsHeader_1 = __importDefault(require("./Methods/iziWrapMethodsHeader"));
var iziWrapMethodsLoading_1 = __importDefault(require("./Methods/iziWrapMethodsLoading"));
var iziWrapMethodsPosition_1 = __importDefault(require("./Methods/iziWrapMethodsPosition"));
var iziWrapMethodsProgress_1 = __importDefault(require("./Methods/iziWrapMethodsProgress"));
var iziWrapMethods = /** @class */ (function (_super) {
    __extends(iziWrapMethods, _super);
    function iziWrapMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    iziWrapMethods.prototype.init = function () {
        _super.prototype.init.call(this);
        this.animations = new iziWrapMethodsAnimations_1.default(this.w);
        this.content = new iziWrapMethodsContent_1.default(this.w);
        this.display = new iziWrapMethodsDisplay_1.default(this.w);
        this.groups = new iziWrapMethodsGroup_1.default(this.w);
        this.header = new iziWrapMethodsHeader_1.default(this.w);
        this.loading = new iziWrapMethodsLoading_1.default(this.w);
        this.position = new iziWrapMethodsPosition_1.default(this.w);
        this.progress = new iziWrapMethodsProgress_1.default(this.w);
    };
    return iziWrapMethods;
}(iziWrapModuleAbstract_1.default));
exports.default = iziWrapMethods;
