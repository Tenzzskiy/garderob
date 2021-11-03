import styles from './basketIcon.module.scss';
import classNames from 'classnames';
import useAppSelector from '@/hooks/useAppSelector';
import {selectAllGarderobs, selectItems} from '@/redux/selectors';

function BasketIcon(): JSX.Element {
	const items = useAppSelector(selectItems);
	const garderobs = useAppSelector(selectAllGarderobs);

	const countOfItems = items?.length + garderobs?.length;

	return (
		<>
			<span className={classNames(styles.icon, 'icon-shopping-cart')}>
				{countOfItems ? <span className={styles.iconCount}>{countOfItems}</span> : null}
			</span>
		</>
	);
}

export default BasketIcon;
