import { useLayoutEffect, useMemo, useState } from 'react'

import getOffset, { type Offset } from '../helpers/getOffset'
import { type LineProps } from '../types/Line'

interface LineLProps extends LineProps {
	shape?: 'normal' | 'upsidedownL'
}

export const LineL = ({
	startingElement,
	endingElement,
	color = 'black',
	thickness = 4,
	shape = 'normal',
	className = '',
	style = {},
	...rest
}: LineLProps) => {
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

	const { first, second } = useMemo(() => {
		if (!(off1 !== null && off2 !== null)) return { first: {}, second: {} }

		const x1 = off1[horizontal1]
		const y1 = off1[vertical1]
		const x2 = off2[horizontal2]
		const y2 = off2[vertical2]

		let p1, p2

		switch (shape) {
			case 'normal':
				p1 = x1
				p2 = y2
				break
			case 'upsidedownL':
				p1 = x2
				p2 = y1
				break
		}

		// line settings for the first div
		const length = Math.sqrt((p1 - x1) * (p1 - x1) + (p2 - y1) * (p2 - y1))
		const cx = (x1 + p1) / 2 - length / 2
		const cy = (y1 + p2) / 2 - thickness / 2
		const angle = Math.atan2(y1 - p2, x1 - p1) * (180 / Math.PI)

		//line settings for the second div
		const length2 = Math.sqrt((x2 - p1) * (x2 - p1) + (y2 - p2) * (y2 - p2))
		const cx2 = (p1 + x2) / 2 - length2 / 2
		const cy2 = (p2 + y2) / 2 - thickness / 2
		const angle2 = Math.atan2(p2 - y2, p1 - x2) * (180 / Math.PI)

		return {
			first: {
				cx,
				cy,
				angle,
				length
			},
			second: {
				cx: cx2,
				cy: cy2,
				angle: angle2,
				length: length2
			}
		}
	}, [horizontal1, horizontal2, off1, off2, shape, thickness, vertical1, vertical2])

	return off1 && off2 ? (
		<div {...rest}>
			<div
				style={{
					padding: 0,
					margin: 0,
					height: thickness,
					backgroundColor: color,
					lineHeight: 1,
					position: 'absolute',
					left: first.cx,
					top: first.cy,
					width: first.length,
					MozTransform: `rotate(${first.angle}deg)`,
					WebkitTransform: `rotate(${first.angle}deg)`,
					OTransform: `rotate(${first.angle}deg)`,
					msTransform: `rotate(${first.angle}deg)`,
					transform: `rotate(${first.angle}deg)`,
					...style
				}}
				className={className}
			/>
			<div
				style={{
					padding: 0,
					margin: 0,
					height: thickness,
					backgroundColor: color,
					lineHeight: 1,
					position: 'absolute',
					left: second.cx,
					top: second.cy,
					width: second.length,
					MozTransform: `rotate(${second.angle}deg)`,
					WebkitTransform: `rotate(${second.angle}deg)`,
					OTransform: `rotate(${second.angle}deg)`,
					msTransform: `rotate(${second.angle}deg)`,
					transform: `rotate(${second.angle}deg)`,
					...style
				}}
				className={className}
			/>
		</div>
	) : null
}
