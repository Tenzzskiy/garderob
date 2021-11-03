import styles from './catalogFilter.module.scss';
import classNames from 'classnames';
import {Dropdown, FilterModal, PriceBox} from '@/components';
import {Props} from './catalogFilter.props';
import {useState} from 'react';

const CatalogFilter = ({sort, price, onChangePrice, onChangeSort}: Props): JSX.Element => {
	const [isShowed, setShowed] = useState(false);

	const handleShowFilterModal = () => {
		setShowed(true);
	};

	return (
		<>
			<div className={styles.filter}>
				<p className={styles.filterTitle}>Мебель</p>
				<span className={classNames(styles.filterIcon, 'icon-sliders')} onClick={handleShowFilterModal} />
				<PriceBox classname={styles.priceBox} price={price} onChangePrice={onChangePrice} />
				<Dropdown classname={styles.dropdown} value={sort} onChangeSort={onChangeSort}>
					<Dropdown.Item>По умолчанию</Dropdown.Item>
					<Dropdown.Item>По возрастанию</Dropdown.Item>
					<Dropdown.Item>По убыванию</Dropdown.Item>
				</Dropdown>
			</div>
			<FilterModal
				visible={isShowed}
				price={price}
				sort={sort}
				onChangeSort={onChangeSort}
				onChangePrice={onChangePrice}
				onChangeVisible={() => setShowed(false)}
			/>
		</>
	);
};

export default CatalogFilter;
