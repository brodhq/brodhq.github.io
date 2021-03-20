export function formatDate(slug: string | Date) {
    const date = typeof slug === 'string' ? new Date(slug) : slug
    const formatter = new Intl.DateTimeFormat(undefined, {
        dateStyle: 'long',
    })
    return formatter.format(date)
}
