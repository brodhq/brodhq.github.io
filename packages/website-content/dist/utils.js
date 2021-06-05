"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sluggify = exports.titleize = void 0;
const titleize_1 = __importDefault(require("titleize"));
function titleize(slug) {
    return titleize_1.default(slug.replace('-', ' '));
}
exports.titleize = titleize;
function sluggify(title) {
    return title.replaceAll(' ', '-').toLowerCase();
}
exports.sluggify = sluggify;
//# sourceMappingURL=utils.js.map