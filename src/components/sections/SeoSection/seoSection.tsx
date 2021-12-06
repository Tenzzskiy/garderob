import styles from './seoSection.module.scss';
import classNames from 'classnames';
import {Props} from './seoSection.props';

const SeoSection = ({seo}: Props): JSX.Element => {
	return (
		<section className={classNames('section', styles.seo)}>
			{seo.map(item => {
				return (
					<div className={styles.outer} key={item.id}>
						<div className={classNames('container', styles.wrapper)}>
							<div className={styles.block}>
								<figure className={styles.figure}>
									<img
										className={classNames(styles.image, 'lazyload')}
										data-src={item.image}
										alt={item.title}
									/>
								</figure>
								<div className={styles.container}>
									{item.title && <h2 className={styles.title}>{item.title}</h2>}
									<div className={styles.text} dangerouslySetInnerHTML={{__html: item.text}}></div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default SeoSection;
