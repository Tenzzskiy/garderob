import styles from './heroSection.module.scss';
import classNames from 'classnames';
import {Props} from './heroSection.props';
import {CSSProperties} from 'react';
import {scrollTo} from '@/utilities/helpers';

const HeroSection = ({hero: {title, subtitle, mobileImage, desktopImage}}: Props): JSX.Element => {
	const handleScroll = () => {
		scrollTo('categoryList', -66);
	};

	return (
		<section className={styles.hero}>
			<div
				className={styles.image}
				style={
					{'--mobileImage': `url(${mobileImage})`, '--desktopImage': `url(${desktopImage})`} as CSSProperties
				}
			/>
			<div className={classNames('container', styles.container)}>
				<div className={styles.wrapper}>
					<p className={styles.title} dangerouslySetInnerHTML={{__html: title}}></p>
					<p className={styles.subtitle}>{subtitle}</p>
					<span className={styles.button} onClick={handleScroll}>
						Подобрать
					</span>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
