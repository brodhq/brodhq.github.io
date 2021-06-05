"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feature = void 0;
const react_1 = __importDefault(require("react"));
const outline_1 = require("@heroicons/react/outline");
const features = [
    {
        name: 'Invite team members',
        description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {
        name: 'List view',
        description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {
        name: 'Keyboard shortcuts',
        description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {
        name: 'Calendars',
        description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {
        name: 'Notifications',
        description: 'Find what you need with advanced filters, bulk actions, and quick views.',
    },
    {
        name: 'Boards',
        description: 'Find what you need with advanced filters, bulk actions, and quick views.',
    },
    {
        name: 'Reporting',
        description: 'Find what you need with advanced filters, bulk actions, and quick views.',
    },
    {
        name: 'Mobile app',
        description: 'Find what you need with advanced filters, bulk actions, and quick views.',
    },
];
const Feature = () => {
    return (react_1.default.createElement("div", { className: "" },
        react_1.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:pb-24 lg:px-8" },
            react_1.default.createElement("div", { className: "max-w-3xl mx-auto text-center" },
                react_1.default.createElement("h2", { className: "text-3xl font-extrabold text-gray-900" }, "All-in-one platform"),
                react_1.default.createElement("p", { className: "mt-4 text-lg text-gray-500" }, "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.")),
            react_1.default.createElement("dl", { className: "mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8" }, features.map((feature) => (react_1.default.createElement("div", { key: feature.name, className: "relative" },
                react_1.default.createElement("dt", null,
                    react_1.default.createElement(outline_1.CheckIcon, { className: "absolute h-6 w-6 text-green-500", "aria-hidden": "true" }),
                    react_1.default.createElement("p", { className: "ml-9 text-lg leading-6 font-medium text-gray-900" }, feature.name)),
                react_1.default.createElement("dd", { className: "mt-2 ml-9 text-base text-gray-500" }, feature.description))))))));
};
exports.Feature = Feature;
//# sourceMappingURL=Feature.js.map