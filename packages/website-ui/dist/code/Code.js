"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
const react_syntax_highlighter_1 = __importDefault(require("react-syntax-highlighter"));
const hljs_1 = require("react-syntax-highlighter/dist/cjs/styles/hljs");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Code = ({ children, className }) => {
    return (react_1.default.createElement("code", { className: classnames_1.default('block bg-gray-700', className) },
        react_1.default.createElement(react_syntax_highlighter_1.default, { customStyle: {
                backgroundColor: 'transparent',
                background: 'none',
                padding: '1rem',
            }, language: "typescript", style: hljs_1.vs2015 }, children)));
};
exports.Code = Code;
//# sourceMappingURL=Code.js.map