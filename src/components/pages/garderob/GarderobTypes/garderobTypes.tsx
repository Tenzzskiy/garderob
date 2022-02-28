import styles from './garderobTypes.module.scss';
import useSlider from '@/hooks/useSlider';
import classNames from 'classnames';
import useWindowSize from '@/hooks/useWindowSize';
import useAppDispatch from '@/hooks/useAppDispatch';
import { chooseGarderob } from '@/redux/actions/garderobActions';
import { useGarderobContext } from '@/contexts/GarderobContext';

// @ts-ignore
const GarderobTypes = ({setColor}): JSX.Element => {
	const { index: currentGarderob } = useGarderobContext();

	const windowSize = useWindowSize();

	const dispatch = useAppDispatch();

	const { currentIndex, slider, sliderRef, handleChangeCurrentIndex } = useSlider({
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
					onClick={() => {
						handleChangeCurrentGarderob(0)

						setColor('#C4C4C4')
					}}
					className={classNames(
						styles.card,
						currentGarderob === 0 && styles.cardActive1,
						windowSize.width !== undefined && windowSize.width >= 992 && styles.cardGrid,

						'keen-slider__slide'
					)}
				>
					<p className={classNames(styles.cardTitle, styles.cardTitle1)}>Эконом</p>
					<p className={styles.cardTitle}>20 &#8381;/место</p>
					<p className={styles.cardInfo}>со 2 дня 15₽/место</p>
				</div>
				<div
					onClick={() => {
						handleChangeCurrentGarderob(1);
						setColor('#C4C4C4')
					}


				}
					className={classNames(
						styles.card,
						currentGarderob === 1 && styles.cardActive2,
						windowSize.width !== undefined && windowSize.width >= 992 && styles.cardGrid,
						'keen-slider__slide'
					)}
				>
					<p className={classNames(styles.cardTitle, styles.cardTitle2)}>Стандарт</p>
					<p className={styles.cardTitle}>45 &#8381;/место</p>
					<p className={styles.cardInfo}>со 2 дня 30₽/место</p>
				</div>
				<div
					onClick={() => {
						handleChangeCurrentGarderob(2)
						setColor('#C4C4C4')
					}}
					className={classNames(
						styles.card,
						currentGarderob === 2 && styles.cardActive3,
						windowSize.width !== undefined && windowSize.width >= 992 && styles.cardGrid,
						'keen-slider__slide'
					)}
				>
					<p className={classNames(styles.cardTitle, styles.cardTitle3)}>VIP</p>
					<p className={styles.cardTitle}>15 000 &#8381;/до 60 мест</p>
					<p className={styles.cardInfo}>со 2 дня 9000 &#8381;</p>
				</div>
			</div >
		);
	};

	return <div className={styles.sliderWrapper}>{renderSlider()}</div>;
};

export default GarderobTypes;
