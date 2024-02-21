export type Offset = ReturnType<typeof getOffset>

export default function getOffset(element: HTMLElement) {
	const rect = element.getBoundingClientRect()

	const left = rect.left + window.scrollX
	const top = rect.top + window.scrollY
	const { width, height } = rect
	const right = left + width
	const bottom = top + height
	const mid = top + height / 2
	const center = left + width / 2

	return {
		left,
		right,
		top,
		bottom,
		mid,
		center,
		width,
		height
	}
}
