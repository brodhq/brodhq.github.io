"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureList = void 0;
const react_1 = __importDefault(require("react"));
const FeatureList = ({ children }) => {
    return (react_1.default.createElement("div", { className: "" },
        react_1.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:pb-24 lg:px-8" },
            react_1.default.createElement("div", { className: "max-w-3xl mx-auto text-center" },
                react_1.default.createElement("h2", { className: "text-3xl font-extrabold text-gray-900" }, "All-in-one platform"),
                react_1.default.createElement("p", { className: "mt-4 text-lg text-gray-500" }, "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.")),
            react_1.default.createElement("dl", { className: "mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8" }, children))));
};
exports.FeatureList = FeatureList;
//# sourceMappingURL=FeatureList.js.map