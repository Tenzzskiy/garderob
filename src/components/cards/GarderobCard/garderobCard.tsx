import styles from './garderobCard.module.scss';
import { Props } from './garderobCard.props';
import classNames from 'classnames';
import useAppDispatch from '@/hooks/useAppDispatch';
import { addCardToBasket } from '@/redux/actions/shopActions';
import { AddButton, HeartIcon } from '@/components';
import { addDopsToGarderob } from '@/redux/actions/garderobActions';
import {useState, CSSProperties, useEffect} from 'react';
import CardSlider from '../../elements/CardSlider/cardSlider';
import useAppSelector from '@/hooks/useAppSelector';
import {addToBusket} from "@/redux/actions/favoriteActions";
import {ymClick} from "@/utilities/helpers";

const GarderobCard = ({
	className,
	card,
	isPrimary,
	isGarderob = false,
	garderobId ,
	disabled = false,
	isDifferent = false

}: Props): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleAddCard = () => {
		// if (disabled) {
		// 	return;
		// }


			dispatch(addCardToBasket({ ...card, isAdded: true, count: 1, countTime: card.info.minTime, }));
			// @ts-ignore
		dispatch(addToBusket({...card,isAdded:true,count: 1}))

		// }
	};

	const [descStatus, setDescStatus] = useState(false);
	const favoriteItems = useAppSelector(state => state.favoriteState.items);
	const foundItem = favoriteItems.find(item => item.title === card.title);
	return (
		<div className={classNames(className, styles.wrapper)}
			onMouseEnter={() => setDescStatus(true)}
			onMouseLeave={() => setDescStatus(false)}>
			<figure className={styles.figure}>
				{typeof card.image === 'string' ? (
					<img className={styles.image} src={card.image} alt={card.title} />
				) : (
					<CardSlider card={card} />
				)}
				{!isDifferent && <HeartIcon className={classNames(styles.heart, {
					[styles.heartVisible]: foundItem
				})} card={card} />}
			</figure>
			<div className={classNames(styles.body, isDifferent && styles.bodyPadding)}>
				<p style={{ 'color': card.color } as CSSProperties}
				   className={styles.title}>{card.title}<span>{card.desc}</span></p>
				{!card.isSimple ? (
					<div className={styles.priceBlock}>
						<span className={styles.price}>
							{card.price}&#8381;/{card.time}
						</span>
						{card.isAdded ? (
							<AddButton
								card={card}
								value={card.count}
								size='128px'
								garderobId={garderobId}
								isOwn={isGarderob}
								maxValue={isGarderob ? 999 : 9999}
							/>
						) : (
							<span
								className={classNames(
									styles.button,
									styles.buttonActive
								)}
								onClick={() => {
									handleAddCard();
									ymClick('add_product')
								}}
							>
								????????????????
							</span>
						)}
					</div>
				) : (
					<div className={styles.priceBlock}>???????????? ?? ??????????????????</div>
				)}
				{!isDifferent && <p className={styles.info}>{card.isGarderob || (card.id === 101||  card.id ===99 ||  card.id ===122 || card.id ===121 || card.id ===120 || card.id ===103 ||  card.id ===123 || card.id ===124 || card.id ===125 ) ? '+1 ??????' : '???? 2 ??????'} {card.isGarderob || (card.id === 101||  card.id ===99 ||  card.id ===122 || card.id ===121 || card.id ===120 || card.id ===103 ||  card.id ===123 || card.id ===124 || card.id ===125 )  ? '750' : Math.round((card.price * 0.25)/10) * 10 }{ ' ???'}</p>}
			</div>
			{!isPrimary ? (
				<div className={styles.footer}>
					<p className={styles.text}>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
					</p>
				</div>
			) : null}


			{typeof card.brand !== 'undefined' && (
				<p className={styles.tag}>???????????????? ????????????????</p>
			)}

		</div>
	);
};

export default GarderobCard;
