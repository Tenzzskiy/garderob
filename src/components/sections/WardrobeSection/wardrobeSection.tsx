import styles from './wardrobeSection.module.scss';
import classNames from 'classnames';
import {SliderDots, WardrobeCard} from '@/components';
import wardrobes from '@/fixtures/wardrobes.json';
import {IWardrobeCard} from '@/types';
import useSlider from '@/hooks/useSlider';

const WardrobeSection = (): JSX.Element => {
	const {currentIndex, slider, sliderRef, handleChangeCurrentIndex} = useSlider({
		slidesPerView: 1,
		breakpoints: {
			'(min-width: 430px)': {
				slidesPerView: 1.25,
				spacing: 32
			},
			'(min-width: 576px)': {
				slidesPerView: 1.6,
				spacing: 32
			},
			'(min-width: 768px)': {
				slidesPerView: 2,
				spacing: 32
			},
			'(min-width: 992px)': {
				slidesPerView: 3,
				spacing: 32,
				controls: false
			}
		}
	});

	return (
		<section className={classNames('section', styles.wardrobe)} id='categoryList'>
			<div className='container'>
				<p className={classNames('sectionTitle', styles.wardrobeTitle)}>Выбери подходящий гардероб</p>
				<div ref={sliderRef} className={classNames(styles.slider, 'keen-slider')}>
					{wardrobes.map((card: IWardrobeCard, index) => (
						<WardrobeCard className={classNames('keen-slider__slide',styles.slider_slider)} card={card} key={card.id} index={index} />
					))}
				</div>
				<SliderDots
					slidesPerView={slider ? slider.details().slidesPerView : 1}
					slidesCount={wardrobes.length}
					currentIndex={currentIndex}
					onChangeCurrentIndex={handleChangeCurrentIndex}
				/>
			</div>
		</section>
	);
};

export default WardrobeSection;
