import classNames from 'classnames';
import styles from './basketHeader.module.scss';
import useAppDispatch from '@/hooks/useAppDispatch';
import {clearBasket} from '@/redux/actions/shopActions';
import {clearGarderobs} from '@/redux/actions/garderobActions';

const BasketHeader = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleClearBasket = () => {
		dispatch(clearBasket());
		dispatch(clearGarderobs());
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.block}>
				<p className={classNames(styles.title, 'sectionTitle')}>Корзина</p>
				<span className={classNames(styles.icon)} onClick={handleClearBasket}>Очистить корзину</span>
			</div>
			<p className={styles.text}>
				Стоимость доставки зависит от объема заказа и адреса, рассчитывается после оформления заявки менеджером
			</p>
		</div>
	);
};

export default BasketHeader;
