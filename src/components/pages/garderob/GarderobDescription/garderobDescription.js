import classNames from 'classnames';
import styles from './garderobDescription.module.scss';
import { ExclamationIcon, HangerIcon, AddButton } from '@/components';
import { useGarderobContext } from '@/contexts/GarderobContext';
import useAppDispatch from '@/hooks/useAppDispatch';
import { addGarderob, removeGarderob } from '@/redux/actions/garderobActions';
import { CSSProperties } from 'react';
import Link from 'next/link';
import { convertToNumberWithSpaces, scrollTo } from '@/utilities/helpers';
import {useCatalogContext} from "@/contexts/CatalogContext";
import {useSelector} from "react-redux";
import {selectAllGarderobs, selectItems} from "@/redux/selectors";
import useAppSelector from "@/hooks/useAppSelector";

const GarderobDescription = () => {
	const card = useGarderobContext();
	const items = useAppSelector(selectItems);
	const dispatch = useAppDispatch();

	const handleAdd = ()=> {
		dispatch(addGarderob({ ...card, isAdded: true, count: 1, countTime: 1 }));
	};

	const handleDelete = ()=> {
		dispatch(removeGarderob(card.id));
	};

	const handleScrollToGarderob = () => {
		scrollTo('garderobBlock', -60);
	};
	const garderobs = useAppSelector(selectAllGarderobs);
	const getPriceOfGarderob = () => {
		// let sum = 0;
		// console.log(card)
		// if (card.addedDops && card.addedDops.length) {
		// 	card.addedDops.forEach(item => {
		// 		sum += item.count * item.price;
		// 	});
		// }
		// return sum + card.count * card.price;
			let sum = 0;

			if (items && items.length) {
				for (let card of items) {
					let price = card.price + (card.countTime - card.info.minTime) * card.info.priceForTime;

					sum += price * card.count;
				}
			}

			if (garderobs && garderobs.length) {
				for (let garderob of garderobs) {
					let price = 0;

					if (garderob.countTime > 1) {
						price += garderob.info.priceForTime * garderob.count * (garderob.countTime - 1);
					}

					price += garderob.price * garderob.count;

					for (let i = 0; i < garderob.addedDops.length; i++) {
						price += garderob.addedDops[i].count * garderob.addedDops[i].price;
					}

					sum += price;
				}
			}

			return sum;

	};

	const isGarderobs = () => {
		const garderobItems = card.addedDops.filter(added => added.isGarderob === true);

		if (garderobItems.length) {
			return true;
		}

		return false;
	};
	const shopState = useSelector(selectItems)
	console.log('cards',card)
	const renderChooseGarderobBlock = () => {
		if (shopState && shopState.length) {
			const garderobItems = shopState.filter(added => added.isGarderob === true);

			let sum = 0;
			let length = 0;

			for (let i = 0; i < garderobItems.length; i++) {
				sum += garderobItems[i].count * garderobItems[i].price;
				length += garderobItems[i].count;
			}

			if (garderobItems.length) {
				return (
					<div className={classNames(styles.boxItem, styles.boxItemSecond, styles.boxItemCenter)}>
						<span className={classNames(styles.boxName, styles.boxNameButton)}>Гардеробщик</span>
						<span className={classNames(styles.boxCountCircle)}>{length}</span>
						<span className={styles.boxPrice}>{convertToNumberWithSpaces(sum)} ₽</span>
					</div>
				);
			}
		}

		return (
			<div
				className={classNames(
					styles.boxItem,
					styles.boxItemGarderob,
					styles.boxItemSecond,
					styles.boxItemCenter
				)}
				onClick={handleScrollToGarderob}
			>
				<span className={classNames(styles.boxName, styles.boxNameButton)}>Выберите гардеробщика</span>
				<span className={classNames(styles.boxIcon, 'icon-chevron-right')}></span>
			</div>
		);
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.additives}>
					<p className={styles.additivesTitle}>В стоимость входит</p>
					<div className={styles.additivesBlock} style={{ '--color': card.color } }>
						<div className={styles.additivesItem}>
							<HangerIcon className={classNames(styles.additivesItemIcon)} color={card.color} />
							<span className={classNames(styles.additivesItemText)}>Пластиковые вешалки</span>
						</div>
						{/* <div className={styles.additivesItem}>
							<span className={classNames(styles.additivesItemIcon, 'icon-clock')}></span>
							<span className={classNames(styles.additivesItemText)}>6 часов аренды</span>
						</div> */}
						<div className={styles.additivesItem}>
							<span className={classNames(styles.additivesItemIcon, 'icon-door-hanger')}></span>
							<span className={classNames(styles.additivesItemText)}>Пластиковые номерки</span>
						</div>
					</div>
				</div>
				{/* <div className={styles.marks}>
					<ExclamationIcon />
					<p className={styles.marksText}>Укажите количество мест в гардеробе, затем измените параметры</p>
				</div> */}
				<div style={{ 'background': card.color } } className={styles.desc}>
					<p className={styles.descText}>{card.description}</p>
					<p className={styles.postDesc}>Время аренды зависит от количества рабочих часов гардеробщика!</p>
				</div>
				{card.isAdded ? (
					<div className={styles.footer}>
						<span className={styles.footerText}>Количество мест</span>
						<AddButton data={card} card={card} value={card.count} size='116px' isGarderob={true} />
					</div>
				) : (
					<span className={styles.button} onClick={handleAdd}>
						Добавить
					</span>
				)}
			</div>
			{items && items.length ? (
				<div className={styles.box}>
					<div className={classNames('container', styles.boxContainer)}>
						<div className={classNames(styles.boxItem, styles.boxItemFirst)}>
							<p className={classNames(styles.boxNameWrapper)}>
								<span className={styles.boxName}>Стоимость аренды</span>
								<span className={styles.boxPrice}>
									{convertToNumberWithSpaces(getPriceOfGarderob())} ₽
								</span>
							</p>
							<span
								className={classNames(styles.boxIcon, styles.boxTrash, 'icon-trash')}
								onClick={handleDelete}
							></span>
						</div>
						{renderChooseGarderobBlock()}
						<Link href='/basket' passHref>
							<a
								className={classNames(
									styles.boxItem,
									styles.boxItemThird,
									styles.boxItemCenter,
									isGarderobs() && styles.boxItemGarderob
								)}
							>
								<span className={classNames(styles.boxName, styles.boxNameButton, styles.boxNameBold)}>
									Перейти в корзину
								</span>
								<span
									className={classNames(styles.boxIcon, styles.boxIconHidden, 'icon-chevron-right')}
								></span>
							</a>
						</Link>
					</div>
				</div>
			) : null}
		</>
	);
};

export default GarderobDescription;
