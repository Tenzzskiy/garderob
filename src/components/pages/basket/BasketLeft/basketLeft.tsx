import {BasketCard} from '@/components';
import styles from './basketLeft.module.scss';
import {Props} from './basketLeft.props';

const BasketLeft = ({cards, garderobs}: Props): JSX.Element => {
	return (
		<div className={styles.left}>
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
		</div>
	);
};

export default BasketLeft;
