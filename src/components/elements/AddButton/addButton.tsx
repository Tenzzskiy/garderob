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
import {ChangeEvent, FocusEvent, KeyboardEvent, useEffect, useRef, useState} from 'react';
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
import useAppSelector from "@/hooks/useAppSelector";
import {addToBusket, decreaseFavourite, increaseFavourite} from "@/redux/actions/favoriteActions";


const AddButton = ({
	count=1,
	card,
	value,
	size,
	info,
	garderobId,
	isGarderob = false,
	isOwn = false,
	isCount = true,
	maxValue = 9999,
	custom

}: Props) => {
	(card)
	const [step,setStep] =useState(60);
	const favoriteItems = useAppSelector(state => state.favoriteState.items);
	const foundItem = favoriteItems.find(item => item.title === card.title);
	const timer = useRef();
	const dispatch = useAppDispatch();
	 const handlerUp = () => {
		clearTimeout(timer.current);
	};
	const handleRemove = () => {
		if (isGarderob) {
			dispatch(removeGarderob(card.id));
		} else if (!isOwn && typeof garderobId !== 'undefined') {
			dispatch(removeDopsFromGarderob({id: garderobId, item: card}));
		} else {
			dispatch(removeDopsFromGarderob({id: garderobId, item: card}));
			dispatch(removeCardToBasket(card.id));
			// @ts-ignore
			dispatch(addToBusket({...card,isAdded:false}))

		}
	};
	useEffect(() =>{
		if (card.count < 1 || card.count ===0) {
			handleRemove();
			return;

		}

	},[card.count])
	const handleDecrease = () => {

		// @ts-ignore
		timer.current = setTimeout(function decremetTick() {

			if (!(value === 1 || value ===60)) {



				if (!isOwn && typeof garderobId !== 'undefined') {
					dispatch(decreaseDopsInGarderob({id: garderobId, item: card}));
					return;
				}

				if (isGarderob) {

						dispatch(decreaseGarderob(card.id));

				}

				if (isCount) {
					// @ts-ignore
					dispatch(addToBusket({...card,count:card.count-1}))
					dispatch(decreaseCardToBasket(card.id));
					dispatch(decreaseDopsInGarderob({id: garderobId, item: card}));
					// dispatch(decreaseFavourite(card.id));
				} else {
					if (card.countTime === card.info.minTime) {
						handleRemove();
					} else {
						dispatch(decreaseTimeCardToBasket(card.id));
					}
				}
				// @ts-ignore
				timer.current = setTimeout(decremetTick, 150);
			}




		}, 150);
	};

	const handleIncrease = () => {
		// @ts-ignore
		timer.current = setTimeout(function incrementTick() {
			if (1) {
				if (card.count + 1 > maxValue) {

					return;

				}


				if (!isOwn && typeof garderobId !== 'undefined') {

					dispatch(increaseDopsInGarderob({id: garderobId, item: card}));
					return;
				}

				if (isGarderob) {

						dispatch(increaseGarderob(card.id));


				}

				if (isCount) {

					// dispatch(increaseFavourite(card.id));
					// @ts-ignore

					dispatch(addToBusket({...card,count:card.count+1}))
					dispatch(increaseCardToBasket(card.id));
					dispatch(increaseDopsInGarderob({id: garderobId, item: card}));

				} else {

					dispatch(increaseTimeCardToBasket(card.id));
				}
			} else {
				clearTimeout(timer.current);
				return;
			}
			// @ts-ignore
			timer.current = setTimeout(incrementTick, 150);
		}, 150);
	};
	const decrease = () =>{
		if (value === 1 || value ===60) {
			handleRemove();
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

		if (!isOwn && typeof garderobId !== 'undefined') {
			dispatch(decreaseDopsInGarderob({id: garderobId, item: card}));
			return;
		}



		if (isCount) {
			// @ts-ignore
			dispatch(addToBusket({...card,count:card.count-1}))
			dispatch(decreaseCardToBasket(card.id));
			dispatch(decreaseDopsInGarderob({id: garderobId, item: card}));
			// dispatch(decreaseFavourite(card.id));
		} else {
			if (card.countTime === card.info.minTime) {
				handleRemove();
			} else {
				dispatch(decreaseTimeCardToBasket(card.id));
			}
		}
	}
	const click = () => {
			if (card.count + 1 > maxValue) {

				return;

			}

			if (!isOwn && typeof garderobId !== 'undefined') {

				dispatch(increaseDopsInGarderob({id: garderobId, item: card}));
				return;
			}

			if (isGarderob) {

				if (isCount) {

					dispatch(increaseGarderob(card.id));
				} else {

					dispatch(increaseTimeGarderob(card.id));

				}

				return;
			}

			if (isCount) {

				// dispatch(increaseFavourite(card.id));
				// @ts-ignore
				dispatch(addToBusket({...card, count: card.count + 1}))
				dispatch(increaseCardToBasket(card.id));
				dispatch(increaseDopsInGarderob({id: garderobId, item: card}));

			} else {

				dispatch(increaseTimeCardToBasket(card.id));
			}

	}

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
		<div className={classNames(styles.wrapper,custom ? styles.custom : null,count ? styles.border : null)} style={{width: size}} >
			<span className={classNames('icon-minus', styles.icon, styles.iconLeft)} onPointerDown={handleDecrease}
				  onPointerUp={handlerUp}
				  onPointerLeave={handlerUp}
				  onClick={decrease}></span>
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

			<span className={classNames('icon-plus', styles.icon, styles.iconRight)} onPointerDown={handleIncrease}
				  onPointerUp={handlerUp} onPointerLeave={handlerUp}
				  onClick={click}></span>
		</div>
	);
};

export default AddButton;
