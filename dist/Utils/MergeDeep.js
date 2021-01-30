'use strict';
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeDeep = void 0;
/**
 * Copied from https://stackoverflow.com/a/34749873
 * Refactored on 2020-08-01, 2021-01-12 by voltsonic.
 */
var MergeDeep = /** @class */ (function () {
    function MergeDeep() {
    }
    MergeDeep.isObject = function (item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    };
    MergeDeep.combine = function (target) {
        var _a, _b;
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (!sources || !sources.length)
            return target;
        var source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    if (this.isObject(source[key])) {
                        if (!target[key])
                            Object.assign(target, (_a = {}, _a[key] = {}, _a));
                        target[key] = this.combine(target[key], source[key]);
                    }
                    else {
                        Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                    }
                }
            }
        }
        return this.combine.apply(this, __spreadArrays([target], (sources !== null && sources !== void 0 ? sources : [])));
    };
    return MergeDeep;
}());
exports.MergeDeep = MergeDeep;
//# sourceMappingURL=MergeDeep.js.map