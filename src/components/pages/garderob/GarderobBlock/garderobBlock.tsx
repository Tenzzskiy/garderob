import styles from './garderobBlock.module.scss';
import useSlider from '@/hooks/useSlider';
import classNames from 'classnames';
import {GarderobCard} from '@/components';
import {Props} from './garderobBlock.props';
import {useGarderobContext} from '@/contexts/GarderobContext';
import {useEffect, useState} from 'react';

const GarderobBlock = ({title, items, isAdded, isDifferent = false, visible = false, myId}: Props): JSX.Element => {
	const [isOpened, setOpened] = useState(true);
	const {id, addedDops} = useGarderobContext();

	const {sliderRef, slider, handleSlideNext, handleSlidePrev} = useSlider({
		slidesPerView: 1.1,
		spacing: 16,
		autoAdjustSlidesPerView: false,
		breakpoints: {
			'(min-width: 500px)': {
				slidesPerView: 1.7
			},
			'(min-width: 768px)': {
				slidesPerView: 2.7
			},
			'(min-width: 992px)': {
				slidesPerView: 3.4
			},
			'(min-width: 1124px)': {
				slidesPerView: 4
			}
		}
	});

	useEffect(() => {
		setOpened(false);
	}, []);

	// useEffect(() => {
	// 	if (slider) {
	// 		slider.refresh();
	// 	}
	// }, [isOpened]);

	const handleOpen = () => {
		if (visible) {
			return;
		}

		setOpened(!isOpened);
	};

	const renderSliderArrows = () => {
		if (slider) {
			const sliderInfo = slider.details();

			if (items.length > sliderInfo.slidesPerView) {
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
		<div className={classNames(styles.block, !visible && styles.blockLine)} id={myId}>
			<div className={styles.blockHeader} onClick={handleOpen}>
				<p className={styles.blockTitle}>{title}</p>
				{!visible && (
					<span
						className={classNames(styles.blockIcon, 'icon-chevron-down', isOpened && styles.blockIconDown)}
					></span>
				)}
			</div>
			<div
				className={classNames(
					styles.sliderOuter,
					!isOpened && styles.sliderHidden,
					visible && styles.sliderVisible
				)}
			>
				<div className={classNames(styles.sliderWrapper)}>
					<div ref={sliderRef} className={classNames(styles.slider, 'keen-slider')}>
						{items.map(item => {
							const foundItem = addedDops.find(addedItem => addedItem.id === item.id);

							return (
								<GarderobCard
									key={item.id}
									card={foundItem ? foundItem : item}
									isPrimary={true}
									isGarderob={true}
									garderobId={id}
									isDifferent={isDifferent}
									disabled={!isAdded}
									className='keen-slider__slide'
								/>
							);
						})}
					</div>
				</div>
				{renderSliderArrows()}
			</div>
		</div>
	);
};

export default GarderobBlock;
