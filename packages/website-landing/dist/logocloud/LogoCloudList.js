"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoCloudList = void 0;
const react_1 = __importDefault(require("react"));
const LogoCloudList = ({ children }) => {
    return (react_1.default.createElement("div", { className: "grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5" }, children));
};
exports.LogoCloudList = LogoCloudList;
//# sourceMappingURL=LogoCloudList.js.map