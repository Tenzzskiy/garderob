import styles from './garderobTypes.module.scss';
import useSlider from '@/hooks/useSlider';
import classNames from 'classnames';
import useWindowSize from '@/hooks/useWindowSize';
import useAppDispatch from '@/hooks/useAppDispatch';
import {chooseGarderob} from '@/redux/actions/garderobActions';
import {useGarderobContext} from '@/contexts/GarderobContext';

const GarderobTypes = (): JSX.Element => {
	const {index: currentGarderob} = useGarderobContext();

	const windowSize = useWindowSize();

	const dispatch = useAppDispatch();

	const {currentIndex, slider, sliderRef, handleChangeCurrentIndex} = useSlider({
		slidesPerView: 1.6,
		spacing: 14,
		breakpoints: {
			'(min-width: 576px)': {
				slidesPerView: 2.2
			},
			'(min-width: 768px)': {
				slidesPerView: 3
			},
			'(min-width: 1120px)': {
				slidesPerVied: 3,
				controls: false
			}
		}
	});

	if (windowSize.width !== undefined && windowSize.width >= 992) {
		if (slider) {
			slider.destroy();
		}
	} else {
		if (slider) {
			slider.refresh();
		}
	}

	const handleChangeCurrentGarderob = (index: number): void => {
		dispatch(chooseGarderob(index));
	};

	const renderSlider = (): JSX.Element => {
		return (
			<div
				ref={sliderRef}
				className={classNames(
					styles.slider,
					windowSize.width !== undefined && windowSize.width >= 992 && styles.sliderGrid,
					'keen-slider'
				)}
			>
				<div
					onClick={() => handleChangeCurrentGarderob(0)}
					className={classNames(
						styles.card,
						currentGarderob === 0 && styles.cardActive,
						windowSize.width !== undefined && windowSize.width >= 992 && styles.cardGrid,

						'keen-slider__slide'
					)}
				>
					<p className={styles.cardTitle}>Доступный</p>
					<p className={styles.cardTitle}>20 &#8381;/место</p>
					<p className={styles.cardInfo}>со 2 дня 15₽/место</p>
				</div>
				<div
					onClick={() => handleChangeCurrentGarderob(1)}
					className={classNames(
						styles.card,
						currentGarderob === 1 && styles.cardActive,
						windowSize.width !== undefined && windowSize.width >= 992 && styles.cardGrid,
						'keen-slider__slide'
					)}
				>
					<p className={styles.cardTitle}>Двухярусный</p>
					<p className={styles.cardTitle}>25 &#8381;/место</p>
					<p className={styles.cardInfo}>со 2 дня 20₽/место</p>
				</div>
				<div
					onClick={() => handleChangeCurrentGarderob(2)}
					className={classNames(
						styles.card,
						currentGarderob === 2 && styles.cardActive,
						windowSize.width !== undefined && windowSize.width >= 992 && styles.cardGrid,
						'keen-slider__slide'
					)}
				>
					<p className={styles.cardTitle}>Стильный</p>
					<p className={styles.cardTitle}>30 &#8381;/место</p>
					<p className={styles.cardInfo}>со 2 дня 25₽/место</p>
				</div>
			</div>
		);
	};

	return <div className={styles.sliderWrapper}>{renderSlider()}</div>;
};

export default GarderobTypes;
