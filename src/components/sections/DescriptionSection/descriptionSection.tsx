import styles from './descriptionSection.module.scss';
import classNames from 'classnames';
import {Props} from './descriptionSection.props';
import {CSSProperties} from 'react';

const DescriptionSection = ({
	description: {title, text, image, firstAdvantage, secondAdvantage}
}: Props): JSX.Element => {
	return (
		<div className={classNames('container', styles.outerContainer)}>
			<section className={classNames('section', styles.wrapper)}>
				<div className={classNames(styles.image, 'lazyload')} data-bg={image} key={title} />
				<div className={classNames('container', styles.container)}>
					<p className={styles.title}>{title}</p>
					<p className={styles.text}>{text}</p>
					<div className={styles.advantages}>
						<div className={styles.advantage}>
							<span className={classNames(styles.advantageIcon, 'icon-check')}></span>
							<p className={styles.advantageDesc}>{firstAdvantage}</p>
						</div>
						<div className={styles.advantage}>
							<span className={classNames(styles.advantageIcon, 'icon-check')}></span>
							<p className={styles.advantageDesc}>{secondAdvantage}</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default DescriptionSection;
