import styles from './basketRight.module.scss';
import {Props} from './basketRight.props';
import {CallModal} from '@/components';
import {useState} from 'react';
import {convertToNumberWithSpaces} from '@/utilities/helpers';
import useWindowSize from '@/hooks/useWindowSize';
import classNames from 'classnames';

const BasketRight = ({cards, garderobs}: Props): JSX.Element => {
	const [isOpened, setOpened] = useState(false);
	const windowSize = useWindowSize();

	const renderPrice = (): number => {
		let sum = 0;

		if (cards && cards.length) {
			for (let card of cards) {
				let price = card.price + (card.countTime - card.info.minTime) * card.info.priceForTime;

				sum += price * card.count;
			}
		}

		if (garderobs && garderobs.length) {
			for (let garderob of garderobs) {
				let price = 0;

				if (garderob.countTime > 1) {
					price += garderob.info.priceForTime * garderob.count * (garderob.countTime - 1);
				}

				price += garderob.price * garderob.count;

				for (let i = 0; i < garderob.addedDops.length; i++) {
					price += garderob.addedDops[i].count * garderob.addedDops[i].price;
				}

				sum += price;
			}
		}

		return sum;
	};

	const price = renderPrice();

	const handleShowSecond = (): void => {
		if (price !== 0) {
			setOpened(true);
		}
	};

	const renderWindow = (): JSX.Element => {
		return (
			<>
				<p className={styles.title}>Стоимость аренды</p>
				<div className={styles.priceBlock}>
					<span className={styles.priceBlockName}>Итого</span>
					<span className={styles.priceBlockText}>{convertToNumberWithSpaces(renderPrice())} &#8381;</span>
				</div>
				<button className={classNames(styles.button, styles.buttonMargin)} onClick={handleShowSecond}>
					Перейти к оформлению
				</button>
				<p className={styles.description}>
					Стоимость доставки зависит от объема заказа и адреса, рассчитывается после оформления заявки
					менеджером
				</p>
			</>
		);
	};

	return (
		<>
			<div className={styles.aside}>{renderWindow()}</div>
			{isOpened ? (
				<CallModal
					onChangeOpened={setOpened}
					title='Оформление'
					button='Оформить заказ'
					cards={cards}
					garderobs={garderobs}
				/>
			) : null}
			{typeof windowSize.width !== 'undefined' && windowSize.width <= 992 && renderPrice() !== 0 ? (
				<div className={styles.fixedBlock}>
					<div className={styles.fixedHeader}>
						<span className={styles.fixedName}>Стоимость аренды</span>
						<span className={styles.fixedPrice}>{convertToNumberWithSpaces(renderPrice())} &#8381;</span>
					</div>
					<button className={styles.button} onClick={handleShowSecond}>
						Перейти к оформлению
					</button>
				</div>
			) : null}
		</>
	);
};

export default BasketRight;
