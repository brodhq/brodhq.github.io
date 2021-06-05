"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const classnames_1 = __importDefault(require("classnames"));
const Link = ({ children, href, className = '', }) => {
    return (react_1.default.createElement("span", { className: classnames_1.default('inline-block text-primary-800', {
            [className]: className,
        }) },
        react_1.default.createElement(link_1.default, { href: href }, children)));
};
exports.Link = Link;
//# sourceMappingURL=Link.js.map