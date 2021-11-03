import styles from './garderobImage.module.scss';
import useSlider from '@/hooks/useSlider';
import classNames from 'classnames';
import {useGarderobContext} from '@/contexts/GarderobContext';

const GarderobImage = (): JSX.Element => {
	const {images, title} = useGarderobContext();

	const {currentIndex, slider, sliderRef, handleChangeCurrentIndex, handleSlideNext, handleSlidePrev} = useSlider({
		slidesPerView: 1
	});

	const renderSliderArrows = () => {
		if (slider) {
			const sliderInfo = slider.details();

			if (images.length > sliderInfo.slidesPerView) {
				return (
					<>
						<span
							className={classNames(styles.sliderArrow, styles.sliderArrowLeft, 'icon-chevron-left')}
							onClick={handleSlidePrev}
						></span>
						<span
							className={classNames(styles.sliderArrow, styles.sliderArrowRight, 'icon-chevron-right')}
							onClick={handleSlideNext}
						></span>
					</>
				);
			}
		}

		return;
	};

	return (
		<div className={styles.garderob}>
			<div className={styles.garderobWrapper}>
				<div ref={sliderRef} className={classNames('keen-slider')}>
					{images.map((image, index) => {
						return (
							<figure key={index} className='keen-slider__slide'>
								<img className={styles.garderobImage} src={image} alt={title} />
							</figure>
						);
					})}
				</div>
				<div className={styles.sliderDots}>
					{images.map((image, index) => {
						return (
							<span
								key={index}
								className={classNames(
									styles.sliderDotsItem,
									index === currentIndex && styles.sliderDotsItemActive
								)}
							/>
						);
					})}
				</div>
			</div>
			{renderSliderArrows()}
		</div>
	);
};

export default GarderobImage;
