"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
const website_ui_1 = require("@geislabs/website-ui");
const array_1 = require("../utils/array");
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const Sidebar = ({ className = '', releases = [], }) => {
    const [release] = array_1.sortBy(releases, 'date', 'desc');
    const title = `News: ${release.title}`;
    const href = `/blog/${release.slug}`;
    return (react_1.default.createElement("div", { className: "space-y-5" },
        release && (react_1.default.createElement("span", { className: "underline text-xl text-gray-800" },
            react_1.default.createElement(link_1.default, { href: href }, title))),
        react_1.default.createElement(website_ui_1.Menu, { title: "Official channels" },
            react_1.default.createElement(website_ui_1.MenuLink, { href: "/" }, "Source code & Issues tracker"),
            react_1.default.createElement(website_ui_1.MenuLink, { href: "/" }, "#geis-lang on freenode IRC"),
            react_1.default.createElement(website_ui_1.MenuLink, { href: "/" }, "@geislang on Twitter")),
        react_1.default.createElement(website_ui_1.Menu, { title: "Join the community" },
            react_1.default.createElement(website_ui_1.MenuLink, { href: "/" }, "Hex.pm package manager"),
            react_1.default.createElement(website_ui_1.MenuLink, { href: "/" }, "Geis Forum"),
            react_1.default.createElement(website_ui_1.MenuLink, { href: "/" }, "Geis on Slack"))));
};
exports.Sidebar = Sidebar;
//# sourceMappingURL=Sidebar.js.map