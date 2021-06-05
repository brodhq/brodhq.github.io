"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentAction = void 0;
const react_1 = __importDefault(require("react"));
const ContentAction = (props) => {
    return (react_1.default.createElement("div", { className: "mt-8 inline-flex rounded-md shadow" },
        react_1.default.createElement("a", { href: "#", className: "flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700" }, props.children)));
};
exports.ContentAction = ContentAction;
//# sourceMappingURL=ContentAction.js.map