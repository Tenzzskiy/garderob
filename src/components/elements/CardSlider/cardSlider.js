import React, { useState } from 'react';
import styles from './cardSlider.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import cn from 'classnames';

const CardSlider = ({ card }) => {

	const [currentSlide, setCurrentSlide] = useState(0);
	const [refCallback, slider, sliderNode] = useKeenSlider({
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide);
		}
	});

	return (
		<div ref={refCallback} className={cn(styles.slider, 'keen-slider')}>

			{card.image.map((i) => {
				return (
					<div className={cn(styles.slide, "keen-slider__slide")} key={i}>
						<img className={styles.image} src={i} alt={card.title} />
					</div>
				)
			})}

			<button className={cn(styles.next, {
				[styles.disabled]: currentSlide === card.image.length - 1
			})} onClick={() => {
				slider.next()
			}}>
				<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M0.292893 13.7071C-0.0976314 13.3166 -0.0976313 12.6834 0.292894 12.2929L5.58579 7L0.292894 1.70711C-0.0976303 1.31658 -0.0976303 0.683417 0.292895 0.292893C0.683419 -0.0976321 1.31658 -0.097632 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071Z" fill="black" />
				</svg>
			</button>

			<button className={cn(styles.prev, {
				[styles.disabled]: currentSlide === 0
			})} onClick={() => {
				slider.prev()
			}}>
				<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M0.292893 13.7071C-0.0976314 13.3166 -0.0976313 12.6834 0.292894 12.2929L5.58579 7L0.292894 1.70711C-0.0976303 1.31658 -0.0976303 0.683417 0.292895 0.292893C0.683419 -0.0976321 1.31658 -0.097632 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071Z" fill="black" />
				</svg>
			</button>

		</div>
	);
}

export default CardSlider;