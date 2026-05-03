import { profile } from '../settings'
import { template } from '../settings'

export function highlightAuthor(authors: string): string {
	if (!profile.author_name || !authors.includes(profile.author_name)) {
		return authors
	}
	// Escape regex special chars in the author name and allow an optional trailing
	// equal-contribution marker (e.g. "Jintang Xue*") to be highlighted as a unit.
	const escaped = profile.author_name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	const regex = new RegExp(`${escaped}\\*?`, 'g')
	return authors.replace(
		regex,
		(match) => `<span class='font-medium underline'>${match}</span>`
	)
}

export function trimExcerpt(excerpt: string): string {
	const excerptLength = template.excerptLength
	return excerpt.length > excerptLength ? `${excerpt.substring(0, excerptLength)}...` : excerpt
}
