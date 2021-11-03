import styles from './sliderDots.module.scss';
import {Props} from './sliderDots.props';
import classNames from 'classnames';

const SliderDots = ({slidesPerView, slidesCount, currentIndex, onChangeCurrentIndex}: Props): JSX.Element => {
	const renderDots = () => {
		const dots = [];

		for (let i = 0; i < slidesCount - slidesPerView + 1; i++) {
			dots.push(
				<span
					key={i}
					className={classNames(styles.item, currentIndex === i && styles.itemActive)}
					onClick={() => onChangeCurrentIndex(i)}
				/>
			);
		}

		if (dots.length > 1) {
			return <div className={styles.wrapper}>{dots}</div>;
		} else {
			return <></>;
		}
	};

	return renderDots();
};

export default SliderDots;
