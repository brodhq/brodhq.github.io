"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallToActionButton = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const CallToActionButton = (_a) => {
    var { variant = 'primary', children } = _a, props = __rest(_a, ["variant", "children"]);
    return (react_1.default.createElement("div", { className: "inline-flex rounded-md shadow" },
        react_1.default.createElement("a", { href: "#", className: classnames_1.default('inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md', {
                'text-white bg-primary-600 hover:bg-primary-700': variant === 'primary',
                'text-primary-700 bg-primary-100 hover:bg-primary-200': variant === 'secondary',
            }) }, children)));
};
exports.CallToActionButton = CallToActionButton;
//# sourceMappingURL=ActionButton.js.map