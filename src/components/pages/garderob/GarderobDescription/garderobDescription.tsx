import classNames from 'classnames';
import styles from './garderobDescription.module.scss';
import { ExclamationIcon, HangerIcon, AddButton } from '@/components';
import { useGarderobContext } from '@/contexts/GarderobContext';
import useAppDispatch from '@/hooks/useAppDispatch';
import { addGarderob, removeGarderob } from '@/redux/actions/garderobActions';
import { CSSProperties } from 'react';
import Link from 'next/link';
import { convertToNumberWithSpaces, scrollTo } from '@/utilities/helpers';

const GarderobDescription = (): JSX.Element => {
	const card = useGarderobContext();

	const dispatch = useAppDispatch();

	const handleAdd = (): void => {
		dispatch(addGarderob({ ...card, isAdded: true, count: 1, countTime: 1 }));
	};

	const handleDelete = (): void => {
		dispatch(removeGarderob(card.id));
	};

	const handleScrollToGarderob = (): void => {
		scrollTo('garderobBlock', -60);
	};

	const getPriceOfGarderob = (): number => {
		let sum = 0;

		if (card.addedDops && card.addedDops.length) {
			card.addedDops.forEach(item => {
				sum += item.count * item.price;
			});
		}
		return sum + card.count * card.price;
	};

	const isGarderobs = (): boolean => {
		const garderobItems = card.addedDops.filter(added => added.isGarderob === true);

		if (garderobItems.length) {
			return true;
		}

		return false;
	};

	const renderChooseGarderobBlock = (): JSX.Element => {
		if (card.addedDops && card.addedDops.length) {
			const garderobItems = card.addedDops.filter(added => added.isGarderob === true);

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
					<div className={styles.additivesBlock} style={{ '--color': card.color } as CSSProperties}>
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
				<div style={{ 'background': card.color } as CSSProperties} className={styles.desc}>
					<p className={styles.descText}>{card.description}</p>
					<p className={styles.postDesc}>Время аренды зависит от количества рабочих часов гардеробщика!</p>
				</div>
				{card.isAdded ? (
					<div className={styles.footer}>
						<span className={styles.footerText}>Количество мест</span>
						<AddButton card={card} value={card.count} size='116px' isGarderob={true} />
					</div>
				) : (
					<span className={styles.button} onClick={handleAdd}>
						Добавить
					</span>
				)}
			</div>
			{card.isAdded ? (
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
