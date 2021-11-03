import {Props} from './filterModal.props';
import styles from './filterModal.module.scss';
import classNames from 'classnames';
import {useState} from 'react';
import {PriceType} from '@/types';

function FilterModal({visible, price, sort, onChangeSort, onChangePrice, onChangeVisible}: Props): JSX.Element {
	const [myPrice, setMyPrice] = useState<PriceType>(price);
	const [mySort, setSort] = useState<string | number>(sort);

	const handleChangePriceFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === '0') {
			setMyPrice({...price, [e.target.name]: ''});
			return;
		}

		console.log(e.target.name);

		setMyPrice({...price, [e.target.name]: e.target.value});
	};

	const handlePreventKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		let charCode = e.which ? e.which : e.keyCode;

		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			e.preventDefault();
		}
	};

	const handleSendFilter = () => {
		onChangePrice(myPrice);
		onChangeVisible();
		onChangeSort(mySort);
	};

	return (
		<div className={classNames(styles.wrapper, visible && styles.wrapperHidden)}>
			<span className={classNames(styles.icon, 'icon-close')} onClick={onChangeVisible}></span>
			<p className={styles.title}>Фильтр</p>
			<div className={styles.block}>
				<p className={classNames(styles.name)}>Цена, &#8381;</p>
				<input
					className={styles.input}
					type='text'
					name='from'
					value={myPrice.from}
					onChange={handleChangePriceFrom}
					onKeyDown={handlePreventKeyDown}
					placeholder='от 3000'
				/>
				<input
					className={styles.input}
					type='text'
					name='to'
					value={myPrice.to}
					onChange={handleChangePriceFrom}
					onKeyDown={handlePreventKeyDown}
					placeholder='до 30000'
				/>
			</div>
			<div className={styles.block}>
				<p className={classNames(styles.name)}>Сортировка</p>
				<div className={classNames(styles.buttons)}>
					<span
						className={classNames(styles.button, mySort === 'По умолчанию' && styles.buttonActive)}
						onClick={() => setSort('По умолчанию')}
					>
						По умолчанию
					</span>
					<span
						className={classNames(styles.button, mySort === 'По возрастанию' && styles.buttonActive)}
						onClick={() => setSort('По возрастанию')}
					>
						По возрастанию
					</span>
					<span
						className={classNames(styles.button, mySort === 'По убыванию' && styles.buttonActive)}
						onClick={() => setSort('По убыванию')}
					>
						По убыванию
					</span>
				</div>
			</div>
			<span className={styles.sendButton} onClick={handleSendFilter}>
				Применить
			</span>
		</div>
	);
}

export default FilterModal;
