import classNames from 'classnames';
import styles from './wardrobeCard.module.scss';
import Props from './wardrobeCard.props';
import Link from 'next/link';
import useAppDispatch from '@/hooks/useAppDispatch';
import {chooseGarderob} from '@/redux/actions/garderobActions';

const WardrobeCard = ({className = null, card, index}: Props): JSX.Element => {
	const dispatch = useAppDispatch();

	const renderStatus = () => {
		if (card.status === 1) {
			return <span className={classNames(styles.status, styles.statusPopular)}>Популярно</span>;
		} else if (card.status === 2) {
			return <span className={classNames(styles.status, styles.statusHit)}>Хит</span>;
		} else {
			return null;
		}
	};

	const handleChooseGarderob = () => {
		dispatch(chooseGarderob(index));
	};

	return (
		<Link href='/garderob' passHref>
			<a className={classNames(className, styles.wrapper)} onClick={handleChooseGarderob}>
				{renderStatus()}
				<figure className={styles.figure}>
					<picture>
						<source srcSet={card.image} media='(max-width: 1140px)' />
						<source srcSet={card.desktopImage} />
						<img className={styles.cardImage} srcSet={card.desktopImage} alt='Warderob' />
					</picture>
				</figure>
				<div className={styles.body}>
					<p className={styles.title}>{card.name}</p>
					<div className={classNames(styles.desc, styles[`desc_${card.color}`])}>
						{card.status === 1 ? (
							<img className={classNames(styles.imageIcon)} src='/images/wardrobe.png' />
						) : (
							<span className={classNames(styles.icon, card.icon)}></span>
						)}
						<p className={styles.description}>{card.description}</p>
					</div>
					<div className={styles.bottom}>
						<p className={styles.price}>{card.price}</p>
						<p className={styles.more}>
							<span className={styles.moreText}>Подробнее</span>
							<span className={classNames(styles.moreIcon, 'icon-chevron-right')} />
						</p>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default WardrobeCard;
