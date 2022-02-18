import classNames from 'classnames';
import styles from './wardrobeCard.module.scss';
import Props from './wardrobeCard.props';
import Link from 'next/link';
import useAppDispatch from '@/hooks/useAppDispatch';
import { chooseGarderob } from '@/redux/actions/garderobActions';
import {useState} from "react";

const WardrobeCard = ({ className = null, card, index }: Props): JSX.Element => {
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

	const [color , setColor] = useState(styles.white);
	const handleChooseGarderob = () => {
		dispatch(chooseGarderob(index));
	};
	console.log(card)
	return (
		<Link href='/garderob' passHref>
			<a className={classNames(className, styles.wrapper,card.status === 1 ? styles.white : card.status === 2 ? styles.gray : styles.purple  )} onClick={handleChooseGarderob} >
				{renderStatus()}
				<figure className={styles.figure}>
					<picture>
						<source data-srcset={card.image} media='(max-width: 1140px)' />
						<source data-srcset={card.desktopImage} />
						<img
							className={classNames(styles.cardImage, 'lazyload')}
							data-src={card.desktopImage}
							alt='Warderob'
						/>
					</picture>
				</figure>
				<div className={styles.body} >
					<p className={classNames(styles.title, styles[`title_${card.color}`])}>{card.name}</p>
					<div className={classNames(styles.desc, styles[`desc_${card.color}`])}>
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
