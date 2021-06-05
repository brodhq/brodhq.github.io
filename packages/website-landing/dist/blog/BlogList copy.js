"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogList = void 0;
const react_1 = __importDefault(require("react"));
const BlogList = ({ children }) => (react_1.default.createElement("div", { className: "relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl" },
    react_1.default.createElement("div", null,
        react_1.default.createElement("h2", { className: "text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl" }, "Press"),
        react_1.default.createElement("div", { className: "mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center" },
            react_1.default.createElement("p", { className: "text-xl text-gray-500" }, "Get weekly articles in your inbox on how to grow your business."),
            react_1.default.createElement("form", { className: "mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { htmlFor: "email-address", className: "sr-only" }, "Email address"),
                    react_1.default.createElement("input", { id: "email-address", name: "email-address", type: "email", autoComplete: "email", required: true, className: "appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 lg:max-w-xs", placeholder: "Enter your email" })),
                react_1.default.createElement("div", { className: "mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex" },
                    react_1.default.createElement("button", { type: "button", className: "w-full bg-primary-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:w-auto sm:inline-flex" }, "Notify me"))))),
    react_1.default.createElement("div", { className: "mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12" }, children)));
exports.BlogList = BlogList;
//# sourceMappingURL=BlogList%20copy.js.map