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
exports.NavLink = void 0;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const classnames_1 = __importDefault(require("classnames"));
const router_1 = require("next/router");
const NavLink = (_a) => {
    var { children, href, exact = true, reverse = false, className = '' } = _a, props = __rest(_a, ["children", "href", "exact", "reverse", "className"]);
    const router = router_1.useRouter();
    const match = isMatch(props.match ? props.match : href.toString(), router.asPath, props.match ? false : exact);
    return (react_1.default.createElement("span", { className: classnames_1.default('select-none', {
            // 'text-gray-500': (!match && !reverse) || (reverse && match),
            'text-primary-800': (match && !reverse) || (!match && reverse),
            [className]: className,
        }) },
        react_1.default.createElement(link_1.default, { href: href }, children)));
};
exports.NavLink = NavLink;
const isMatch = (match, pathname, exact = false) => exact ? match === pathname : pathname.startsWith(match);
//# sourceMappingURL=NavLink.js.map