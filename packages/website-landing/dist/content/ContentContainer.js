"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentContainer = void 0;
const react_1 = __importDefault(require("react"));
const ContentContainer = ({ asset, children, }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "relative bg-white sm:py-24" },
            react_1.default.createElement("div", { className: "lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start" },
                react_1.default.createElement("div", { className: "relative sm:py-16 lg:py-0" },
                    react_1.default.createElement("div", { "aria-hidden": "true", className: "hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen" },
                        react_1.default.createElement("div", { className: "absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" }),
                        react_1.default.createElement("svg", { className: "absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12", width: 404, height: 392, fill: "none", viewBox: "0 0 404 392" },
                            react_1.default.createElement("defs", null,
                                react_1.default.createElement("pattern", { id: "02f20b47-fd69-4224-a62a-4c9de5c763f7", x: 0, y: 0, width: 20, height: 20, patternUnits: "userSpaceOnUse" },
                                    react_1.default.createElement("rect", { x: 0, y: 0, width: 4, height: 4, className: "text-gray-200", fill: "currentColor" }))),
                            react_1.default.createElement("rect", { width: 404, height: 392, fill: "url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" }))),
                    react_1.default.createElement("div", { className: "relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20" }, asset)),
                react_1.default.createElement("div", { className: "relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0" }, children)))));
};
exports.ContentContainer = ContentContainer;
//# sourceMappingURL=ContentContainer.js.map