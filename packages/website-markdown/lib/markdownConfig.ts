export type HeaderLevel = 1 | 2 | 3 | 4 | 5

export interface GenerateConfig {
    /**
     * Specify what header levels should generate markdown subsections
     */
    subsectionLevels: Array<HeaderLevel>
}
