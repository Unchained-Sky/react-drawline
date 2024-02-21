import { useLayoutEffect, useMemo, useState } from 'react'

import getOffset, { type Offset } from '../helpers/getOffset'
import { type LineProps } from '../types/Line'

export const StraightLine = ({
	startingElement,
	endingElement,
	color = 'black',
	thickness = 4,
	className = '',
	style = {},
	...rest
}: LineProps) => {
	const { ref: startingElementRef, x: horizontal1, y: vertical1 } = startingElement
	const { ref: endingElementRef, x: horizontal2, y: vertical2 } = endingElement

	const [off1, setOff1] = useState<Offset | null>(null)
	const [off2, setOff2] = useState<Offset | null>(null)

	// Instead of an effect we use a layout effect and an on window resize event
	useLayoutEffect(() => {
		function updatePosition() {
			if (!startingElementRef.current || !endingElementRef.current) return
			setOff1(getOffset(startingElementRef.current))
			setOff2(getOffset(endingElementRef.current))
		}

		window.addEventListener('resize', updatePosition)
		updatePosition()
		return () => window.removeEventListener('resize', updatePosition)
	}, [endingElementRef, startingElementRef])

	const { cx, cy, angle, length } = useMemo(() => {
		if (!(off1 !== null && off2 !== null)) return { cx: 0, cy: 0, angle: 0 }

		// determine each elements' point
		const x1 = off1[horizontal1]
		const y1 = off1[vertical1]
		const x2 = off2[horizontal2]
		const y2 = off2[vertical2]

		// distance
		const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))

		// center
		const cx = (x1 + x2) / 2 - length / 2
		const cy = (y1 + y2) / 2 - thickness / 2

		// angle
		const angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI)

		return { cx, cy, angle, length }
	}, [horizontal1, horizontal2, off1, off2, thickness, vertical1, vertical2])

	return off1 && off2 ? (
		<div
			style={{
				padding: 0,
				margin: 0,
				height: thickness,
				backgroundColor: color,
				lineHeight: 1,
				position: 'absolute',
				left: cx,
				top: cy,
				width: length,
				MozTransform: `rotate(${angle}deg)`,
				WebkitTransform: `rotate(${angle}deg)`,
				OTransform: `rotate(${angle}deg)`,
				msTransform: `rotate(${angle}deg)`,
				transform: `rotate(${angle}deg)`,
				...style
			}}
			className={className}
			{...rest}
		/>
	) : null
}
