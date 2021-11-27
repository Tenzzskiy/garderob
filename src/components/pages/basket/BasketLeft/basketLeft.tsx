import {BasketCard} from '@/components';
import styles from './basketLeft.module.scss';
import {Props} from './basketLeft.props';

const BasketLeft = ({cards, garderobs}: Props): JSX.Element => {
	const renderItems = (): JSX.Element => {
		if (cards.length || garderobs.length) {
			return (
				<>
					<div className={styles.basketHeader}>
						<span className={styles.basketName}>Товары</span>
						<div className={styles.basketRight}>
							<span className={styles.basketName}>Цена</span>
							<span className={styles.basketName}>Количество</span>
							<span className={styles.basketName}>Сумма</span>
						</div>
					</div>
					<div className={styles.list}>
						{garderobs.map(card => (
							<BasketCard key={card.id} card={card} isGarderob={true} />
						))}
						{cards.map(card => (
							<BasketCard key={card.id} card={card} />
						))}
					</div>
				</>
			);
		} else {
			return (
				<div className={styles.wrapper}>
					<img className={styles.image} src='/images/sad.png' alt='Success' />
					<p className={styles.text}>В корзине пока ничего нет</p>
				</div>
			);
		}
	};

	return <div className={styles.left}>{renderItems()}</div>;
};

export default BasketLeft;
