import styles from './newsCard.module.scss';
import classNames from 'classnames';
import {Props} from './newsCard.props';
import Link from 'next/link';

const NewsCard = ({className, card, isFull = false}: Props): JSX.Element => {
	const renderInfoBlock = () => {
		if (isFull) {
			return (
				<div className={styles.body}>
					<p className={styles.name}>{card.name}</p>
					<p className={styles.time}>{card.date}</p>
					<p className={styles.text}>{card.exceprt}</p>
				</div>
			);
		} else {
			return (
				<div className={styles.bottom}>
					<p className={styles.name}>{card.name}</p>
					<span className={classNames(styles.icon, 'icon-chevron-right')}></span>
				</div>
			);
		}
	};

	return (
		<Link href={`/novosti/${card.slug}`} passHref>
			<a className={classNames(className, styles.wrapper)}>
				<figure className={classNames(styles.figure, isFull && styles.figureFull)}>
					<img className={classNames(styles.image, 'lazyload')} data-src={card.image} alt='news' />
				</figure>
				{renderInfoBlock()}
			</a>
		</Link>
	);
};

export default NewsCard;
