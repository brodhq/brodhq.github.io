"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
const react_1 = __importDefault(require("react"));
const Browser = ({ children, className }) => {
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("div", { className: "h-10 bg-gray-200 flex items-center pl-4 space-x-2" },
            react_1.default.createElement("div", { className: "h-3 w-3 rounded-full bg-gray-300" }),
            react_1.default.createElement("div", { className: "h-3 w-3 rounded-full bg-gray-300" }),
            react_1.default.createElement("div", { className: "h-3 w-3 rounded-full bg-gray-300" })),
        react_1.default.createElement("div", null, children)));
};
exports.Browser = Browser;
//# sourceMappingURL=Browser.js.map