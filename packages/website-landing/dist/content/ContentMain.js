"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentMain = void 0;
const react_1 = __importDefault(require("react"));
const ContentMain = (props) => {
    return (react_1.default.createElement("div", { className: "pt-12 sm:pt-16 lg:pt-20" },
        react_1.default.createElement("div", { className: "text-base max-w-prose mx-auto lg:max-w-none" },
            props.subtitle && (react_1.default.createElement("h2", { className: "text-base text-primary-600 font-semibold tracking-wide uppercase" }, props.subtitle.toUpperCase())),
            react_1.default.createElement("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl" }, props.title)),
        react_1.default.createElement("div", { className: "mt-6 text-gray-500 space-y-6" },
            react_1.default.createElement("p", { className: "text-lg" }, props.children)),
        props.action));
};
exports.ContentMain = ContentMain;
//# sourceMappingURL=ContentMain.js.map