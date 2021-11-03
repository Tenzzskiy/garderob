import styles from './priceBox.module.scss';
import {Props} from './priceBox.props';
import classNames from 'classnames';

const PriceBox = ({classname, price, onChangePrice, isSpecial = false}: Props): JSX.Element => {
	const handleChangePriceFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === '0') {
			onChangePrice({...price, [e.target.name]: ''});
			return;
		}

		onChangePrice({...price, [e.target.name]: e.target.value});
	};

	const handlePreventKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		let charCode = e.which ? e.which : e.keyCode;

		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			e.preventDefault();
		}
	};

	return (
		<div className={classNames(styles.wrapper, classname)}>
			<span className={classNames(styles.title, isSpecial && styles.titleMargin)}>Цена, &#8381;</span>
			<div>
				<input
					className={styles.input}
					type='text'
					name='from'
					value={price.from}
					onChange={handleChangePriceFrom}
					onKeyDown={handlePreventKeyDown}
					placeholder='от 3000'
				/>
				<input
					className={styles.input}
					type='text'
					name='to'
					value={price.to}
					onChange={handleChangePriceFrom}
					onKeyDown={handlePreventKeyDown}
					placeholder='до 30000'
				/>
			</div>
		</div>
	);
};

export default PriceBox;
