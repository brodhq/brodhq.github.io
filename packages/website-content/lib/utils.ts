import titleizeBase from 'titleize'

export function titleize(slug: string) {
    return titleizeBase(slug.replace('-', ' '))
}

export function sluggify(title: string) {
    return title.replace(/ /g, '-').toLowerCase()
}

export function sortBy<T, TKey extends keyof T>(
    array: T[],
    key: TKey,
    direction: 'desc' | 'asc'
): T[] {
    const compareDesc = (a: T, b: T) => (a[key] > b[key] ? -1 : 1)
    const compareAsc = (a: T, b: T) => (a[key] < b[key] ? -1 : 1)
    const sorter = direction === 'asc' ? compareAsc : compareDesc
    return [...array.sort(sorter)]
}
