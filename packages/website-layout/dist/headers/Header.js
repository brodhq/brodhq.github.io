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
exports.Header = void 0;
const website_ui_1 = require("@geislabs/website-ui");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const Header = ({ className = '', brandClassName = '', }) => {
    return (react_1.default.createElement("nav", { className: classnames_1.default(className, 'relative mx-auto flex items-center justify-between px-4 sm:px-6'), "aria-label": "Global" },
        react_1.default.createElement("div", { className: "flex items-center flex-1" },
            react_1.default.createElement("div", { className: "hidden space-x-10 md:flex md:ml-32" },
                react_1.default.createElement(NavList, null,
                    react_1.default.createElement(NavItem, { href: "/" }, "Home"),
                    react_1.default.createElement(NavItem, { href: "/install" }, "Install"),
                    react_1.default.createElement(NavItem, { match: "/guides", href: "/guides/getting-started/introduction" }, "Guides"),
                    react_1.default.createElement(NavItem, { href: "/cases" }, "Use-cases"),
                    react_1.default.createElement(NavItem, { match: "/blog", href: "/blog" }, "Blog"))))));
};
exports.Header = Header;
const NavList = ({ children }) => (react_1.default.createElement("div", { className: "flex justify-end space-x-10" }, children));
const NavItem = (_a) => {
    var { children, href } = _a, props = __rest(_a, ["children", "href"]);
    return (react_1.default.createElement(website_ui_1.NavLink, Object.assign({ href: href }, props, { className: "font-medium text-white hover:text-gray-300" }), children));
};
//# sourceMappingURL=Header.js.map