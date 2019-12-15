"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractModule_1 = require("./AbstractModule");
var deepmerge_1 = require("deepmerge");
// import deepmerge = require("deepmerge");
var ApiModule = /** @class */ (function (_super) {
    __extends(ApiModule, _super);
    function ApiModule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.get = ({
            group: function () { return _this.modal.applyMethod("getGroup"); },
            state: function () { return _this.modal.applyMethod("getState"); }
        });
        _this.loading = ({
            start: function () {
                _this.modal.applyMethod("resetContent");
                return _this;
            },
            stop: function () {
                _this.modal.applyMethod("resetContent");
                return _this;
            }
        });
        _this.navigate = ({
            next: function (options) {
                _this.modal.applyMethod("next", options);
                return _this;
            },
            prev: function (options) {
                _this.modal.applyMethod("prev", options);
                return _this;
            }
        });
        _this.progress = ({
            pause: function () {
                _this.modal.applyMethod("pauseProgress");
                return _this;
            },
            reset: function () {
                _this.modal.applyMethod("resetProgress");
                return _this;
            },
            resume: function () {
                _this.modal.applyMethod("resumeProgress");
                return _this;
            },
            start: function () {
                _this.modal.applyMethod("startProgress");
                return _this;
            }
        });
        _this.set = ({
            content: function (content, setAsDefault) {
                if (setAsDefault === void 0) { setAsDefault = false; }
                _this.modal.applyMethod("setContent", deepmerge_1.default({ content: content }, (setAsDefault ? { default: true } : {})));
                return _this;
            },
            group: function (groupId) {
                _this.modal.applyMethod("setGroup", groupId);
                return _this;
            }
        });
        _this.ui = ({
            transitions: {
                in: function (to) {
                    _this.modal.applyMethod("setTransitionIn", to);
                    return _this;
                },
                out: function (to) {
                    _this.modal.applyMethod("setTransitionOut", to);
                    return _this;
                }
            },
            header: {
                icon: {
                    class: function (to) {
                        _this.modal.applyMethod("setIcon", to);
                        return _this;
                    },
                    text: function (to) {
                        _this.modal.applyMethod("setIconText", to);
                        return _this;
                    }
                },
                color: function (to) {
                    _this.modal.applyMethod("setHeaderColor", to);
                    return _this;
                },
                title: function (to) {
                    if (to === void 0) { to = ""; }
                    _this.modal.applyMethod("setTitle", to);
                    return _this;
                },
                subtitle: function (to) {
                    if (to === void 0) { to = ""; }
                    _this.modal.applyMethod("setSubtitle", to);
                    return _this;
                },
                hide: function () {
                    _this.modal.applyMethod("setHeader", false);
                    return _this;
                },
                show: function () {
                    _this.modal.applyMethod("setHeader", true);
                    return _this;
                }
            },
            display: {
                zIndex: function (to) {
                    _this.modal.applyMethod("setZindex", to);
                    return _this;
                },
                width: function (to) {
                    _this.modal.applyMethod("setWidth", to);
                    return _this;
                }
            },
            position: {
                top: function (to) {
                    _this.modal.applyMethod("setTop", to);
                    return _this;
                },
                bottom: function (to) {
                    _this.modal.applyMethod("setBottom", to);
                    return _this;
                }
            }
        });
        _this.view = ({
            close: function (options) {
                _this.modal.applyMethod("close", options);
                return _this;
            },
            open: function (options) {
                _this.modal.applyMethod("open", options);
                return _this;
            },
            toggle: function () {
                _this.modal.applyMethod("toggle");
                return _this;
            }
        });
        return _this;
    }
    ApiModule.prototype.destroy = function () {
        this.modal.applyMethod("destroy");
        return this;
    };
    ApiModule.prototype.resetContent = function () {
        this.modal.applyMethod("resetContent");
        return this;
    };
    return ApiModule;
}(AbstractModule_1.AbstractModule));
exports.ApiModule = ApiModule;
