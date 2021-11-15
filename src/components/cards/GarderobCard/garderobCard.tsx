import styles from './garderobCard.module.scss';
import {Props} from './garderobCard.props';
import classNames from 'classnames';
import useAppDispatch from '@/hooks/useAppDispatch';
import {addCardToBasket} from '@/redux/actions/shopActions';
import {AddButton, HeartIcon} from '@/components';
import {addDopsToGarderob} from '@/redux/actions/garderobActions';

const GarderobCard = ({
	className,
	card,
	isPrimary,
	isGarderob = false,
	garderobId,
	disabled = false,
	isDifferent = false
}: Props): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleAddCard = () => {
		if (disabled) {
			return;
		}

		if (isGarderob && typeof garderobId !== 'undefined') {
			dispatch(addDopsToGarderob({id: garderobId, item: {...card, isAdded: true, count: 1}}));
		} else {
			dispatch(addCardToBasket({...card, isAdded: true, count: 1, countTime: card.info.minTime}));
		}
	};

	return (
		<div className={classNames(className, styles.wrapper)}>
			<figure className={styles.figure}>
				<img className={styles.image} src={card.image} alt={card.title} />
				{!isDifferent && <HeartIcon className={styles.heart} card={card} />}
			</figure>
			<div className={classNames(styles.body, isDifferent && styles.bodyPadding)}>
				<p className={styles.title}>{card.title}</p>
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
									disabled ? styles.buttonDisabled : styles.buttonActive
								)}
								onClick={handleAddCard}
							>
								Добавить
							</span>
						)}
					</div>
				) : (
					<div className={styles.priceBlock}>Входит в стоимость</div>
				)}
				{!isDifferent && <p className={styles.info}>{card.priceDescription}</p>}
			</div>
			{!isPrimary ? (
				<div className={styles.footer}>
					<p className={styles.text}>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
					</p>
				</div>
			) : null}
		</div>
	);
};

export default GarderobCard;
