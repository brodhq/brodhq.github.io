import titleizeBase from 'titleize'

export function titleize(slug: string) {
    return titleizeBase(slug.replace('-', ' '))
}

export function sluggify(title: string) {
    return title.replace(/ /g, '-').toLowerCase()
}
