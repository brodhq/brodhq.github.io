export interface ExampleReference {
    number: number
    slug: string
    title: string
}

export interface Example extends ExampleReference {
    description: string
    content: string
}
