"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogList = void 0;
const react_1 = __importDefault(require("react"));
const BlogList = ({ children, header }) => (react_1.default.createElement("div", { className: "relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl" },
    header && react_1.default.createElement("div", null, header),
    react_1.default.createElement("div", { className: "mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12" }, children)));
exports.BlogList = BlogList;
//# sourceMappingURL=BlogList.js.map