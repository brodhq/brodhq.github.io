"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.getContentBySlug = exports.getByGuideSlug = exports.getPostBySlug = exports.getAllSections = exports.getAllReleases = exports.getAllCases = exports.getAllPosts = void 0;
const gray_matter_1 = __importDefault(require("gray-matter"));
const marked_1 = __importDefault(require("marked"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const path_1 = __importDefault(require("path"));
const highlight_js_1 = __importDefault(require("highlight.js"));
const renderer_1 = require("./renderer");
const utils_1 = require("./utils");
function getAllPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-expect-error
        const context = require.context('../content/blog', false, /\.md$/);
        const posts = [];
        for (const key of context.keys()) {
            const post = key.slice(2);
            const dateString = post.slice(0, 10);
            const content = yield Promise.resolve().then(() => __importStar(require(`../content/blog/${post}`)));
            const meta = gray_matter_1.default(content.default);
            posts.push(Object.assign(Object.assign({}, meta.data), { slug: post.replace('.md', ''), date: dateString }));
        }
        // @ts-expect-error
        return posts;
    });
}
exports.getAllPosts = getAllPosts;
function getAllCases() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-expect-error
        const context = require.context('../content/blog', false, /\.md$/);
        const posts = [];
        for (const key of context.keys()) {
            const post = key.slice(2);
            const content = yield Promise.resolve().then(() => __importStar(require(`../content/blog/${post}`)));
            const meta = gray_matter_1.default(content.default);
            if (meta.data.category &&
                utils_1.sluggify(meta.data.category) === 'geis-in-production') {
                posts.push(Object.assign(Object.assign({}, meta.data), { slug: post.replace('.md', ''), tags: (_a = meta.data.tags) === null || _a === void 0 ? void 0 : _a.split(' ') }));
            }
        }
        // @ts-expect-error
        return posts;
    });
}
exports.getAllCases = getAllCases;
function getAllReleases() {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield getAllPosts();
        return posts.filter((post) => post.category && utils_1.sluggify(post.category) === 'releases');
    });
}
exports.getAllReleases = getAllReleases;
function getAllSections() {
    return __awaiter(this, void 0, void 0, function* () {
        const sections = [];
        const contexts = [
            [
                'getting-started',
                // @ts-expect-error
                require.context(`../content/guides/getting-started`, false, /\.md$/),
            ],
            [
                'metaprogramming',
                // @ts-expect-error
                require.context(`../content/guides/metaprogramming`, false, /\.md$/),
            ],
        ];
        for (let [sectionName, context] of contexts) {
            const guides = [];
            for (const key of context.keys()) {
                const post = key.slice(2);
                const number = Number(post.slice(0, 2));
                const content = yield Promise.resolve().then(() => __importStar(require(`../content/guides/${sectionName}/${post}`)));
                const meta = gray_matter_1.default(content.default);
                guides.push({
                    number,
                    section: meta.data.section,
                    filename: post,
                    title: meta.data.title,
                    slug: `${sectionName}/${meta.data.slug}`,
                });
            }
            sections.push({ name: sectionName.replace('-', ' '), guides });
        }
        return sections;
    });
}
exports.getAllSections = getAllSections;
function getPostBySlug(slug) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield getAllPosts();
        const reference = posts.find((guide) => guide.slug === slug);
        const fileContent = yield Promise.resolve().then(() => __importStar(require(`../content/blog/${slug}.md`)));
        const meta = gray_matter_1.default(fileContent.default);
        const renderer = new renderer_1.CustomRenderer();
        const content = marked_1.default(meta.content, {
            renderer,
            highlight: function (code, lang) {
                const language = highlight_js_1.default.getLanguage(lang) ? lang : 'plaintext';
                return highlight_js_1.default.highlight(code, { language }).value;
            },
        });
        return {
            post: reference,
            content: content,
            releases: yield getAllReleases(),
        };
    });
}
exports.getPostBySlug = getPostBySlug;
function getByGuideSlug(slugs) {
    return __awaiter(this, void 0, void 0, function* () {
        const slug = path_1.default.join(...slugs);
        const sections = yield getAllSections();
        const all = sections.flatMap((section) => section.guides);
        const reference = all.find((guide) => guide.slug === slug);
        const fileContent = yield Promise.resolve().then(() => __importStar(require(`../content/guides/${reference === null || reference === void 0 ? void 0 : reference.section}/${reference === null || reference === void 0 ? void 0 : reference.filename}`)));
        const meta = gray_matter_1.default(fileContent.default);
        const renderer = new renderer_1.CustomRenderer();
        const content = marked_1.default(meta.content, {
            renderer,
            highlight: function (code, lang) {
                const language = highlight_js_1.default.getLanguage(lang) ? lang : 'plaintext';
                return highlight_js_1.default.highlight(code, { language }).value;
            },
            headerIds: true,
        });
        // @ts-expect-error
        return Object.assign(Object.assign({}, reference), { subsections: renderer.subsections, content: content });
    });
}
exports.getByGuideSlug = getByGuideSlug;
function getContentBySlug(slug) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield getAllPosts();
        const reference = posts.find((guide) => guide.slug === slug);
        const fileContent = yield Promise.resolve().then(() => __importStar(require(`../content/${slug}.md`)));
        const meta = gray_matter_1.default(fileContent.default);
        const renderer = new renderer_1.CustomRenderer();
        const content = marked_1.default(meta.content, {
            renderer,
            highlight: function (code, language) {
                return highlight_js_1.default.highlight(code, { language }).value;
            },
        });
        return Object.assign(Object.assign({}, reference), { content: content, releases: yield getAllReleases() });
    });
}
exports.getContentBySlug = getContentBySlug;
function getConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-expect-error
        const config = yield Promise.resolve().then(() => __importStar(require(`../config/yml`)));
        return js_yaml_1.default.load(config.default);
    });
}
exports.getConfig = getConfig;
__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map