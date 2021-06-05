"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const react_1 = __importDefault(require("react"));
const solid_1 = require("@heroicons/react/solid");
const classnames_1 = __importDefault(require("classnames"));
const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
];
const Hero = ({ className, children }) => {
    return (react_1.default.createElement("div", { className: classnames_1.default(className, 'relative bg-gray-800 overflow-hidden') },
        react_1.default.createElement("div", { className: "hidden sm:block sm:absolute sm:inset-0", "aria-hidden": "true" },
            react_1.default.createElement("svg", { className: "absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0", width: 364, height: 484, viewBox: "0 0 364 484", fill: "none" },
                react_1.default.createElement("defs", null,
                    react_1.default.createElement("pattern", { id: "eab71dd9-9d7a-47bd-8044-256344ee00d0", x: 0, y: 0, width: 20, height: 20, patternUnits: "userSpaceOnUse" },
                        react_1.default.createElement("rect", { x: 0, y: 0, width: 4, height: 4, fill: "currentColor" }))),
                react_1.default.createElement("rect", { width: 364, height: 484, fill: "url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" }))),
        react_1.default.createElement("div", { className: "relative flex items-center justify-center" },
            react_1.default.createElement("main", { className: "mt-16 sm:mt-24" },
                react_1.default.createElement("div", { className: "mx-auto max-w-7xl" },
                    react_1.default.createElement("div", { className: "lg:grid lg:grid-cols-12 lg:gap-8" },
                        react_1.default.createElement("div", { className: "px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("a", { href: "#", className: "inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200" },
                                    react_1.default.createElement("span", { className: "px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-primary-500 rounded-full" }, "We're hiring"),
                                    react_1.default.createElement("span", { className: "ml-4 text-sm" }, "Visit our careers page"),
                                    react_1.default.createElement(solid_1.ChevronRightIcon, { className: "ml-2 w-5 h-5 text-gray-500", "aria-hidden": "true" })),
                                react_1.default.createElement("h1", { className: "mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl" },
                                    react_1.default.createElement("span", { className: "md:block" }, "Data to enrich your"),
                                    ' ',
                                    react_1.default.createElement("span", { className: "text-primary-400 md:block" }, "online business")),
                                react_1.default.createElement("p", { className: "mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" }, "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt."),
                                react_1.default.createElement("p", { className: "mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10" }, "Used by"),
                                react_1.default.createElement("div", { className: "mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0" },
                                    react_1.default.createElement("div", { className: "flex flex-wrap items-start justify-between" },
                                        react_1.default.createElement("div", { className: "flex justify-center px-1" },
                                            react_1.default.createElement("img", { className: "h-9 sm:h-10", src: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg", alt: "Tuple" })),
                                        react_1.default.createElement("div", { className: "flex justify-center px-1" },
                                            react_1.default.createElement("img", { className: "h-9 sm:h-10", src: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg", alt: "Workcation" })),
                                        react_1.default.createElement("div", { className: "flex justify-center px-1" },
                                            react_1.default.createElement("img", { className: "h-9 sm:h-10", src: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg", alt: "StaticKit" })))))),
                        react_1.default.createElement("div", { className: "mt-16 sm:mt-24 lg:mt-0 lg:col-span-6" },
                            react_1.default.createElement("div", { className: "shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden" }, children))))))));
};
exports.Hero = Hero;
//# sourceMappingURL=Hero.js.map