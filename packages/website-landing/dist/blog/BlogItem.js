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
exports.BlogListItem = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const BlogListItem = (_a) => {
    var props = __rest(_a, []);
    return (react_1.default.createElement("div", { className: classnames_1.default(props.className) },
        react_1.default.createElement("p", { className: "text-sm text-gray-500" },
            react_1.default.createElement("time", { dateTime: props.datetime }, props.date)),
        react_1.default.createElement("a", { href: "#", className: "mt-2 block" },
            react_1.default.createElement("p", { className: "text-xl font-semibold text-gray-900" }, props.title),
            react_1.default.createElement("p", { className: "mt-3 text-base text-gray-500" }, props.description)),
        react_1.default.createElement("div", { className: "mt-3" },
            react_1.default.createElement("a", { href: props.href, className: classnames_1.default('text-base font-semibold text-primary-600 hover:text-primary-500', props.linkClassName) }, "Read full story"))));
};
exports.BlogListItem = BlogListItem;
//# sourceMappingURL=BlogItem.js.map