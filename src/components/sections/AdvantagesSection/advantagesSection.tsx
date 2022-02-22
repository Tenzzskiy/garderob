import styles from './advantagesSection.module.scss';
import classNames from 'classnames';
import { SliderDots, AdvantageCard } from '@/components';
import useSlider from '@/hooks/useSlider';
import { Props } from './advantagesSection.props';

const AdvantagesSection = ({ color, advantage }: Props): JSX.Element => {
	const { currentIndex, handleChangeCurrentIndex, sliderRef, slider } = useSlider({
		slidesPerView: 1.15,
		spacing: 16,
		breakpoints: {
			'(min-width: 500px)': {
				slidesPerView: 2.25
			},
			'(min-width: 576px)': {
				slidesPerView: 2.3,
				spacing: 32
			},
			'(min-width: 992px)': {
				slidesPerView: 3,
				spacing: 32
			},
			'(min-width: 1120px)': {
				slidesPerView: 4,
				spacing: 32,
				controls: false
			}
		}
	});

	return (
		<section className='section'>
			<p className={classNames('sectionTitle', styles.title)}>С нами выгодно</p>
			<div className={styles.sliderWrapper}>
				<div ref={sliderRef} className={classNames(styles.slider, 'keen-slider')}>
					<AdvantageCard
						className='keen-slider__slide'
						image='/images/advantages/1.png'
						title='Камера хранения'
						description={`При заказе VIP гардероба,<br/>  4 ячейки в подарок`}
						color={color}
						rectangleColor={advantage.rectangleColor}
						maskColor={advantage.maskColor}
						number='first'
					/>
					<AdvantageCard
						className='keen-slider__slide'
						image='/images/advantages/2.png'
						title='Термометр'
						description='<p>При заказе гардероба<br>от 150 гостей термометр в подарок</p>'
						color={color}
						rectangleColor={advantage.rectangleColor}
						maskColor={advantage.maskColor}
						number='second'
					/>
					<AdvantageCard
						className='keen-slider__slide'
						image='/images/advantages/3.png'
						title='Банкетка'
						description='При заказе гардероба от 200<br> гостей банкетка в подарок'
						color={color}
						rectangleColor={advantage.rectangleColor}
						maskColor={advantage.maskColor}
						number='third'
					/>
					<AdvantageCard
						className='keen-slider__slide'
						image='/images/advantages/4.png'
						title='Зеркало'
						description='При заказе мебели<br>для гардероба зеркало в подарок'
						color={color}
						rectangleColor={advantage.rectangleColor}
						maskColor={advantage.maskColor}
						number='fourth'
					/>
				</div>
			</div>
			<SliderDots
				slidesPerView={slider ? slider.details().slidesPerView : 1}
				slidesCount={4}
				currentIndex={currentIndex}
				onChangeCurrentIndex={handleChangeCurrentIndex}
			/>
		</section>
	);
};

export default AdvantagesSection;
