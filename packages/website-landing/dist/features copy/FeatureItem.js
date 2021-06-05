"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureItem = void 0;
const react_1 = __importDefault(require("react"));
const outline_1 = require("@heroicons/react/outline");
const classnames_1 = __importDefault(require("classnames"));
const FeatureItem = (props) => {
    return (react_1.default.createElement("div", { className: classnames_1.default('relative', props.className) },
        react_1.default.createElement("dt", null,
            react_1.default.createElement(outline_1.CheckIcon, { className: "absolute h-6 w-6 text-green-500", "aria-hidden": "true" }),
            react_1.default.createElement("p", { className: "ml-9 text-lg leading-6 font-medium text-gray-900" }, props.name)),
        react_1.default.createElement("dd", { className: "mt-2 ml-9 text-base text-gray-500" }, props.description)));
};
exports.FeatureItem = FeatureItem;
//# sourceMappingURL=FeatureItem.js.map