import styles from './newsSection.module.scss';
import {NewsCard} from '@/components';
import useSlider from '@/hooks/useSlider';
import classNames from 'classnames';
import useWindowSize from '@/hooks/useWindowSize';
import {Props} from './newsSection.props';
import Link from 'next/link';
import {useEffect} from 'react';

const NewsSection = ({news}: Props): JSX.Element => {
	const windowSize = useWindowSize();

	useEffect(() => {
		if (typeof window.lazyInstance !== 'undefined') {
			window.lazyInstance?.update();
		}
	}, [windowSize.width]);

	const {sliderRef} = useSlider({
		slidesPerView: 1.1,
		spacing: 16,
		breakpoints: {
			'(min-width: 500px)': {
				slidesPerView: 2.25
			},
			'(min-width: 576px)': {
				slidesPerView: 2.3,
				spacing: 24
			},
			'(min-width: 800px)': {
				slidesPerView: 2.5,
				spacing: 24
			}
		}
	});

	const renderSlider = () => {
		if (windowSize.width !== undefined && windowSize.width > 992) {
			return (
				<div className={styles.newsBlock}>
					{news.map(card => {
						return <NewsCard key={card.id} card={card} className={styles.newsBlockCard} />;
					})}
				</div>
			);
		} else {
			return (
				<div className={styles.sliderWrapper}>
					<div ref={sliderRef} className={classNames(styles.slider, 'keen-slider')}>
						{news.map(card => {
							return <NewsCard key={card.id} card={card} className='keen-slider__slide' />;
						})}
					</div>
				</div>
			);
		}
	};

	return (
		<section className='section'>
			<div className={classNames('container', styles.outerContainer)}>
				<p className={classNames('sectionTitle', styles.title)}>Прошедшие мероприятия</p>
				{renderSlider()}
				<div className={styles.container}>
					<Link href='/novosti' passHref>
						<a className={styles.button}>Смотреть все</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NewsSection;
