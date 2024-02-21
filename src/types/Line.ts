import { type CSSProperties, type DetailedHTMLProps, type HTMLAttributes, type MutableRefObject } from 'react'

export interface LineProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	startingElement: Element
	endingElement: Element
	color?: string
	thickness?: number
	className?: string
	style?: CSSProperties
}

type Element = {
	ref: MutableRefObject<HTMLElement | null>
	x: 'left' | 'center' | 'right'
	y: 'top' | 'mid' | 'bottom'
}
