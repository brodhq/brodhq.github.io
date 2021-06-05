"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuLink = void 0;
const react_1 = __importDefault(require("react"));
const links_1 = require("../links");
const MenuLink = ({ children, href, className = '', }) => {
    return (react_1.default.createElement("li", { className: className },
        react_1.default.createElement(links_1.Link, { href: href }, children)));
};
exports.MenuLink = MenuLink;
//# sourceMappingURL=MenuLink.js.map