import { Guide, BlogPost, Release, Section, Usecase } from './types';
export declare function getAllPosts(): Promise<BlogPost[]>;
export declare function getAllCases(): Promise<Usecase[]>;
export declare function getAllReleases(): Promise<Release[]>;
export declare function getAllSections(): Promise<Array<Section>>;
export declare function getPostBySlug(slug: string): Promise<{
    post: BlogPost | undefined;
    content: string;
    releases: Release[];
}>;
export declare function getByGuideSlug(slugs: string[]): Promise<Guide>;
export declare function getContentBySlug(slug: string): Promise<{
    content: string;
    releases: Release[];
    slug?: string | undefined;
    title?: string | undefined;
    author?: string | undefined;
    summary?: string | undefined;
    category?: string | undefined;
    date?: Date | undefined;
}>;
export declare function getConfig(): Promise<{
    title: string;
    description: string;
}>;
export * from './types';
//# sourceMappingURL=index.d.ts.map