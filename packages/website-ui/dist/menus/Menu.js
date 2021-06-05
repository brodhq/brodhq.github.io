"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const react_1 = __importDefault(require("react"));
const Menu = ({ title, children, className = '', }) => {
    return (react_1.default.createElement("div", { className: "space-y-3" },
        react_1.default.createElement("small", { className: "uppercase text-gray-700" }, title),
        react_1.default.createElement("ul", { className: "space-y-1" }, children)));
};
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map