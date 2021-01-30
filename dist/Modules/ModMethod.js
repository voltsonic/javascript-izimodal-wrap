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
exports.ModMethod = void 0;
var ModAbstract_1 = require("./ModAbstract");
var Animations_1 = require("./Methods/Animations");
var Content_1 = require("./Methods/Content");
var Display_1 = require("./Methods/Display");
var Group_1 = require("./Methods/Group");
var Header_1 = require("./Methods/Header");
var Loading_1 = require("./Methods/Loading");
var Position_1 = require("./Methods/Position");
var Progress_1 = require("./Methods/Progress");
var ModMethod = /** @class */ (function (_super) {
    __extends(ModMethod, _super);
    function ModMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModMethod.prototype.init = function () {
        _super.prototype.init.call(this);
        this.animations = new Animations_1.Animations(this.w);
        this.content = new Content_1.Content(this.w);
        this.display = new Display_1.Display(this.w);
        this.groups = new Group_1.Group(this.w);
        this.header = new Header_1.Header(this.w);
        this.loading = new Loading_1.Loading(this.w);
        this.position = new Position_1.Position(this.w);
        this.progress = new Progress_1.Progress(this.w);
    };
    return ModMethod;
}(ModAbstract_1.ModAbstract));
exports.ModMethod = ModMethod;
//# sourceMappingURL=ModMethod.js.map