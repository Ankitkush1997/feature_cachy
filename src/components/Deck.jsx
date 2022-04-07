import React from 'react';
import { animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import { v4 as uuidv4 } from 'uuid';
import { Card, CardMedia } from '@material-ui/core';
import { cards, Colors, texts, titles, to, trans, useStyles, bgCardColor } from '../pages/services';


export default function Deck({ setTheme, gone, props, set }) {
	const classes = useStyles();

	const bind = useGesture(({ args: [ index ], down, delta: [ xDelta ], direction: [ xDir ], velocity }) => {
		let trigger = velocity > 0.2;
		const dir = xDir < 0 ? -1 : 1;
		if (!down && trigger) gone.add(index);
		set((i) => {
			if (index !== i) return;

      // topCardIndex.current = index;

			const isGone = gone.has(index);
			let x = isGone ? (200 + window.innerWidth - 2 * 0) * dir : down ? xDelta + 0 : 0;
			let rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
			let scale = down ? 1.1 : 1;

			if (isGone) setTheme({ bgColor: Colors[i], text: texts[i], title: titles[i],bgCardColor:bgCardColor[i] });

			return {
				x,
				rot,
				scale,
				delay: undefined,
			
				config: {
					friction: 50,
					tension: down ? 800 : isGone ? 200 : 500
				}
			};
		});
		if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set((i) => to(i)), 400);
	});
	return props.map(({ x, y, rot, scale }, i) => (
		<animated.div
			style={{
				position: 'absolute',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				transform: interpolate([ x, y ], (x, y) => `translate3d(${x}px,${y}px,0)`)
			}}
		>
			<animated.div
				{...bind(i)}
				style={{ transform: interpolate([ rot, scale ], trans),cursor: 'grab' }}
			>
				<Card className="card" style={{borderRadius:"6px",background:"none"}}>
					<CardMedia
						key={uuidv4()}
						className={classes.card} 
						id="card-image"
						component="img"
						alt="Contemplative Reptile"
						image={require('../assets/' + cards[3 - i])}
					/>
				</Card>
			</animated.div>
		</animated.div>
	));
}
