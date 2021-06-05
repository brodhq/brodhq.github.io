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
exports.CallToAction = void 0;
const react_1 = __importDefault(require("react"));
const CallToAction = (_a) => {
    var { title } = _a, props = __rest(_a, ["title"]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", { className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl" }, title),
        react_1.default.createElement("div", { className: "mt-8 flex justify-center" },
            react_1.default.createElement("div", { className: "inline-flex rounded-md shadow" },
                react_1.default.createElement("a", { href: "#", className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700" }, "Get started")),
            react_1.default.createElement("div", { className: "ml-3 inline-flex" },
                react_1.default.createElement("a", { href: "#", className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200" }, "Learn more")))));
};
exports.CallToAction = CallToAction;
//# sourceMappingURL=Action%20copy.js.map