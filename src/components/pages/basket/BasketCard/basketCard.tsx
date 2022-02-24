import classNames from 'classnames';
import styles from './basketCard.module.scss';
import {AddButton} from '@/components';
import {Props} from './basketCard.props';
import {removeCardToBasket} from '@/redux/actions/shopActions';
import {removeGarderob, updateDate} from '@/redux/actions/garderobActions';
import useAppDispatch from '@/hooks/useAppDispatch';
import {useEffect, useState} from 'react';
import {GarderobItemType} from '@/types';
import {convertToNumberWithSpaces} from '@/utilities/helpers';

const BasketCard = ({card, isGarderob = false,duration,value,setDuration}: Props): JSX.Element => {
	const [isOpened, setOpened] = useState(false);
	const [circle , setCircle ] = useState(false);
	const dispatch = useAppDispatch();

	const countPrice = (): number => {
		if (isGarderob) {
			let sum = 0;

			if (card.countTime > 1) {
				sum += card.info.priceForTime * card.count * (card.countTime - 1);
			}

			for (let i = 0; i < card.addedDops.length; i++) {
				sum += card.addedDops[i].count * card.addedDops[i].price;
			}

			return sum + card.price * card.count + ( card.montage ? 2900 : 0);
		}

		let price = card.price + (card.countTime - card.info.minTime) * card.info.priceForTime;

		return price * card.count + ( card.montage ? 2900 : 0);
	};
	useEffect(() =>{
		// @ts-ignore

		if (Array.isArray(value) ){
			// @ts-ignore
			setDuration((prev) =>  [prev[0] = value[0].getDate(),prev[1] =value[1].getDate()])
		}

		// @ts-ignore
		if (circle){
			// @ts-ignore
			dispatch(updateDate({...card,time:duration[1] > duration[0] ? duration[1] - duration[0] !== 0 ? duration[1] - duration[0]  +' дн' : ' 1 день' :
					duration[0] - duration[1] !== 0 ? duration[0] - duration[1]  +'дн' : '1 день'}))
		}


	},[value,circle])
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
						<p className={styles.title}>{card.title}</p>
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
			console.log(card);
			return;

		}

		dispatch(removeCardToBasket(card.id));
	};

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<figure className={styles.figure}>
					<img className={styles.image} src={getImageSoure()} alt={card.title} />
				</figure>
				{getTitleBlock()}
				{card.isGarderob ? <div className={styles.radio_button} onClick={() => setCircle(!circle)}>
					<div className={styles.r_button} >
						<div className={classNames(styles.circle,circle ? styles.active_circle : null)}>

						</div>
					</div>
					<span className={styles.radio_button_text}>
					{`Продлить работу ${card.title} на весь период аренды гардероба`}
				</span>
				</div> : null}
			</div>
			<div className={styles.body}>
				<div className={classNames(styles.block, styles.priceBlock)}>
					<span className={classNames(styles.blockName, styles.hiddenForTablets)}>Цена</span>
					<div className={styles.price}>
						<span className={styles.priceText}>
							{card.price }&#8381;/
							{card.time}
						</span>
						<span className={styles.priceDescription}>{card.priceDescription}</span>
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
				<div className={classNames(styles.block, styles.priceBlock)}>
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
