"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoCloudItem = void 0;
const react_1 = __importDefault(require("react"));
const LogoCloudItem = (props) => {
    return (react_1.default.createElement("div", { className: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1" },
        react_1.default.createElement("img", { className: "h-12", src: props.src, alt: "Tuple" })));
};
exports.LogoCloudItem = LogoCloudItem;
//# sourceMappingURL=LogoCloudItem.js.map