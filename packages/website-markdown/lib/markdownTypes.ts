export interface GuideSection {
    name: string
    slug: string
}

export interface GenerateResult {
    content: string
    subsections: GuideSection[]
}
