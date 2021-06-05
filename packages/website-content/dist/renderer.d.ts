import { Renderer, Slugger } from 'marked';
import { GuideSection } from './types';
export interface CustomRendererSubSection {
    title: string;
    id: string;
}
export declare class CustomRenderer extends Renderer {
    subsections: GuideSection[];
    heading(text: any, level: any, raw: any, slugger: Slugger): string;
    paragraph(text: any): string;
    list(body: any): string;
    listitem(text: any): string;
}
//# sourceMappingURL=renderer.d.ts.map