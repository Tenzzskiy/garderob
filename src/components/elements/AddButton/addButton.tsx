import styles from './addButton.module.scss';
import classNames from 'classnames';
import {Props} from './addButton.props';
import useAppDispatch from '@/hooks/useAppDispatch';
import AutosizeInput from 'react-input-autosize';
import {
	removeCardToBasket,
	increaseCardToBasket,
	decreaseCardToBasket,
	changeCardInBasket,
	increaseTimeCardToBasket,
	decreaseTimeCardToBasket,
	changeTimeCardInBasket
} from '@/redux/actions/shopActions';
import {ChangeEvent, FocusEvent, KeyboardEvent} from 'react';
import {isKeydownNumber} from '@/utilities/helpers';
import {
	increaseGarderob,
	decreaseGarderob,
	removeGarderob,
	changeGarderob,
	decreaseTimeGarderob,
	increaseTimeGarderob,
	changeTimeGarderob,
	increaseDopsInGarderob,
	decreaseDopsInGarderob,
	removeDopsFromGarderob,
	changeDopsInGarderob
} from '@/redux/actions/garderobActions';


const AddButton = ({
	card,
	value,
	size,
	info,
	garderobId,
	isGarderob = false,
	isOwn = false,
	isCount = true,
	maxValue = 9999,

}: Props) => {
	const dispatch = useAppDispatch();

	const handleRemove = () => {
		if (isGarderob) {
			dispatch(removeGarderob(card.id));
		} else if (!isOwn && typeof garderobId !== 'undefined') {
			dispatch(removeDopsFromGarderob({id: garderobId, item: card}));
		} else {
			dispatch(removeDopsFromGarderob({id: garderobId, item: card}));
			dispatch(removeCardToBasket(card.id));

		}
	};
	// console.log(card,
	// 	value,
	// 	size,
	// 	info,
	// 	garderobId,
	// 	isGarderob ,
	// 	isOwn ,
	// 	isCount ,
	// 	maxValue )
	const handleDecrease = () => {
		if (value === 1) {
			handleRemove();
			return;
		}

		if (!isOwn && typeof garderobId !== 'undefined') {
			dispatch(decreaseDopsInGarderob({id: garderobId, item: card}));
			return;
		}

		if (isGarderob) {
			if (isCount) {
				dispatch(decreaseGarderob(card.id));
			} else {
				dispatch(decreaseTimeGarderob(card.id));
			}
			return;
		}

		if (isCount) {
			dispatch(decreaseCardToBasket(card.id));
			dispatch(decreaseDopsInGarderob({id: garderobId, item: card}));
		} else {
			if (card.countTime === card.info.minTime) {
				handleRemove();
			} else {
				dispatch(decreaseTimeCardToBasket(card.id));
			}
		}
	};

	const handleIncrease = () => {
		if (card.count + 1 > maxValue) {
			console.log('+1')
			return;

		}

		if (!isOwn && typeof garderobId !== 'undefined') {
			console.log('own')
			dispatch(increaseDopsInGarderob({id: garderobId, item: card}));
			return;
		}

		if (isGarderob) {
			console.log('garderob')
			if (isCount) {
				console.log('id')
				dispatch(increaseGarderob(card.id));
			} else {
				console.log('time')
				dispatch(increaseTimeGarderob(card.id));

			}

			return;
		}

		if (isCount) {
			console.log('+count')
			dispatch(increaseCardToBasket(card.id));
			dispatch(increaseDopsInGarderob({id: garderobId, item: card}));

		} else {
			console.log('time++')
			dispatch(increaseTimeCardToBasket(card.id));
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (Number(e.target.value) > maxValue) {
			return;
		}

		if (!isOwn && typeof garderobId !== 'undefined') {
			dispatch(changeDopsInGarderob({id: garderobId, item: card, value: Number(e.target.value)}));
			return;
		}

		if (isGarderob) {
			if (isCount) {
				dispatch(changeGarderob({id: card.id, count: Number(e.target.value)}));
			} else {
				dispatch(changeTimeGarderob({id: card.id, count: Number(e.target.value)}));
			}
			return;
		}

		if (isCount) {
			dispatch(changeCardInBasket({id: card.id, count: Number(e.target.value)}));
		} else {
			dispatch(changeTimeCardInBasket({id: card.id, countTime: Number(e.target.value)}));
		}
	};

	const handlePreventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (!isKeydownNumber(event)) {
			event.preventDefault();
		}
	};

	const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (e.target.value === '0') {
			handleRemove();
		}

		if (!isCount && Number(e.target.value) < card.info.minTime) {
			handleRemove();
		}
	};

	return (
		<div className={styles.wrapper} style={{width: size}}>
			<span className={classNames('icon-minus', styles.icon, styles.iconLeft)} onClick={handleDecrease}></span>
			<AutosizeInput
				value={value}
				onBlur={handleBlur}
				onKeyDown={handlePreventKeyDown}
				onChange={handleChange}
				inputStyle={{
					border: 'none',
					outline: 'none',
					textAlign: 'center',
					opacity: '0.64',
					paddingLeft: '4px',
					paddingRight: '4px',
					fontSize: '18px',
					lineHeight: '23px',
					backgroundColor: 'transparent'
				}}
			/>
			{info ? <span className={styles.info}>{info}</span> : null}
			<span className={classNames('icon-plus', styles.icon, styles.iconRight)} onClick={handleIncrease}></span>
		</div>
	);
};

export default AddButton;
