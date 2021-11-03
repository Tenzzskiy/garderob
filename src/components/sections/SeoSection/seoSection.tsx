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
									<img className={styles.image} src={item.image} alt={item.text} />
								</figure>
								<div className={styles.container}>
									<p className={styles.title}>{item.title}</p>
									<p className={styles.text}>{item.text}</p>
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
