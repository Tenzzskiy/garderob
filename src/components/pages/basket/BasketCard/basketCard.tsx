import classNames from 'classnames';
import styles from './basketCard.module.scss';
import {AddButton, LogoIcon} from '@/components';
import {Props} from './basketCard.props';
import {removeCardToBasket} from '@/redux/actions/shopActions';
import {removeGarderob, updateDate} from '@/redux/actions/garderobActions';
import useAppDispatch from '@/hooks/useAppDispatch';
import {useEffect, useState} from 'react';
import {GarderobItemType} from '@/types';
import {convertToNumberWithSpaces} from '@/utilities/helpers';
import {array} from "prop-types";
import Link from "next/link";
import useAppSelector from "@/hooks/useAppSelector";
import garderobCard from "@/components/cards/GarderobCard";
import GarderobCard from "@/components/cards/GarderobCard";
import {selectAllGarderobs} from "@/redux/selectors";

export const MathRound = (num:number) =>{
	return Math.round((num * 0.3)/10) * 10
}
export const MathRoundGarderob = (num:number) =>{
	return Math.round((num * 0.8)/10) * 10
}
const BasketCard = ({card, isGarderob = false,duration,value,setDuration}: Props): JSX.Element => {
	const [isOpened, setOpened] = useState(false);
	const [circle , setCircle ] = useState(false);
	const dispatch = useAppDispatch();
	const price = card.price;
	const garderobs = useAppSelector(selectAllGarderobs);
	const countPrice = (): number => {
		if (isGarderob) {
			let sum = 0;

			if (card.countTime > 1) {
				sum += card.info.priceForTime * card.count * (card.countTime - 1);
			}

			for (let i = 0; i < card.addedDops.length; i++) {
				sum += card.addedDops[i].count * card.addedDops[i].price;
			}
			if(Array.isArray(value)&& !card.isGarderob && (Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24) ) >= 2)) {
				sum += (MathRound(card.price)) *  card.count   *(Array.isArray(value) ? Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24))   : 1) + card.price * card.count  -(MathRound(card.price)) ;

			} else {

				sum +=card.price * card.count *(Array.isArray(value) ? Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24))  : 1) ;
			}


			return sum + ( card.montage ? 2900 : 0)
		}

		let price = 0;
		if(Array.isArray(value)&& ((Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24))) >= 2) && !card.isGarderob) {
			price += ((MathRound(card.price)) *  card.count)   *(Array.isArray(value) ? Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24))   : 1) + card.price * card.count -(MathRound(card.price)) ;

		} else {
			price +=card.price * card.count *(Array.isArray(value) ? Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24))  : 1)    ;
		}


		return price + ( card.montage ? 2900 : 0);
	};
	const changeValue = () =>{
		if(circle){
			// @ts-ignore
			dispatch(updateDate({...card,price: price-1500 , time:'4ч'}))

		}else {
// @ts-ignore

			dispatch(updateDate({...card,price: price + 1500, time:'дн'}))
		}

	}
	useEffect(() =>{
		// @ts-ignore

		if (Array.isArray(value) ){
			// @ts-ignore
			setDuration((prev) =>  [prev[0] = value[0].getDate(),prev[1] =value[1].getDate()])
			// @ts-ignore

					// @ts-ignore

		}


	},[value,circle])
	useEffect(() =>{
		if (Array.isArray(value) ){
			// @ts-ignore

			// @ts-ignore

			// @ts-ignore

		}
	},[value])
	const getImageSoure = (): string => {
		if (isGarderob) {
			return card.images[0];
		} else {
			return card.image;
		}
	};

	const getTitleBlock = (): JSX.Element => {
		if (isGarderob) {
			return (
				<>
					<div className={styles.title_list}>
					<div className={styles.titleBlock} >

						<Link href='/garderob' passHref>
							<a>
								<p className={styles.title}>{card.title}</p>
							</a>
						</Link>
						{card.montage === true ? <p className={styles.montage}>Монтаж включен</p> : null}
					</div>

					</div>
				</>
			);
		}

		return <p className={styles.title}>{card.title}</p>;
	};

	const handleRemove = () => {
		if (isGarderob) {
			dispatch(removeGarderob(card.id));
			(card);
			return;

		}

		dispatch(removeCardToBasket(card.id));
	};
	const [add,setAdd] = useState(false);
	return (
		<div className={classNames(styles.card, !card.isGarderob ? styles.card_margin : null)}>
			<div className={styles.header}>
				<figure className={styles.figure}>
					<img className={styles.image} src={getImageSoure()} alt={card.title} />
				</figure>
				{getTitleBlock()}
				{card.isGarderob ? <div className={styles.radio_button} >
					<div className={styles.r_button} onClick={() => {
						setCircle(!circle)
						changeValue();
					}}>
						<div className={classNames(styles.circle,circle ? styles.active_circle : null)} >

						</div>
					</div>
					<span className={styles.radio_button_text} onMouseEnter={() => setAdd(true)} onMouseLeave={() => {setAdd(false)}} >
					{`Продлить работу ${card.title} на весь период аренды гардероба`}
						{add && card.isGarderob ? <div className={styles.addition}> <div> Время работы гардеробщика отличается от времени работы гардероба</div> <img
							src="info.svg" alt=""/> <img onClick={() => setAdd(false)} className={styles.exit} src="/exit.svg" alt=""/></div> : null}
				</span>
				</div> : null}
			</div>
			<div className={styles.body}>
				<div className={classNames(styles.block, styles.priceBlock,!card.isGarderob ? styles.block_disable_margin : null)}>
					<span className={classNames(styles.blockName, styles.hiddenForTablets)}>Цена</span>
					<div className={styles.price}>
						<span className={styles.priceText}  >

							{card.price }&#8381;/
							{card.time}
						</span>
						<span className={styles.priceDescription}>{card.isGarderob ? null : 'Со 2 дня   '}
							{card.isGarderob ? null :

								card.name === 'primary' ? Math.round(card.price * 0.8) :
								card.name === 'secondary' ? Math.round(card.price * 0.8) :
								card.name === 'thirdary' ? Math.round(card.price * 0.8) : Math.round((card.price * 0.3)/10) * 10

							}

							{card.isGarderob ? null : '  ₽'} </span>
					</div>
				</div>
				<div className={classNames(styles.block, styles.descriptionBlock)}>
					<span className={classNames(styles.blockName, styles.countName, styles.hiddenForTablets)}>
						Количество
					</span>
					<div className={styles.buttons}>
						<div className={styles.buttonsInfo}>
							<span className={styles.buttonsTitle}>{card.info.countDesktop}</span>
							<AddButton
								count={0}
								card={card}
								value={card.count}
								info={card.info.count}
								isGarderob={isGarderob}
								size='100%'
							/>
						</div>
						{/*<div className={styles.buttonsInfo}>*/}
						{/*	<span className={styles.buttonsTitle}>{card.info.timeDesktop}</span>*/}
						{/*	<AddButton*/}
						{/*		card={card}*/}
						{/*		value={card.countTime}*/}
						{/*		info={card.info.time}*/}
						{/*		isGarderob={isGarderob}*/}
						{/*		isCount={false}*/}
						{/*		size='100%'*/}
						{/*	/>*/}
						{/*</div>*/}
					</div>
				</div>
				<div className={classNames(styles.block, styles.priceBlock,!card.isGarderob ? styles.block_disable_margin : null)}>
					<span className={classNames(styles.blockName, styles.hiddenForTablets)}>Сумма</span>
					<div className={classNames(styles.priceFooter)}>
						<span className={classNames(styles.priceText, styles.priceMargin)}>
							{convertToNumberWithSpaces(countPrice() )}&#8381;
						</span>
						<span className={classNames('icon-close', styles.icon)} onClick={handleRemove}></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BasketCard;
