"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallToActionContainer = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const CallToActionContainer = ({ className, children, }) => (react_1.default.createElement("div", { className: classnames_1.default('max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8', className) }, children));
exports.CallToActionContainer = CallToActionContainer;
//# sourceMappingURL=ActionContainer.js.map