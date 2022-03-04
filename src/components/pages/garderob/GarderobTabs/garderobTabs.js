import { GarderobMain } from '@/components';
import styles from './garderobTabs.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import categories from './../../../../fixtures/categories.json'
import categoriesNew from '@/fixtures/categoriesNew.json';
import { useGarderobContext } from '@/contexts/GarderobContext';
import { GarderobCard } from '@/components';
import useWindowSize from '@/hooks/useWindowSize';
import {useSelector} from "react-redux";
import {selectItems} from "@/redux/selectors";

const GarderobTabs = () => {
	const shopState = useSelector(selectItems)
	const [selected, setSelected] = useState('garderob');
	const { id, addedDops } = useGarderobContext();
	const [showValue, setShowValue] = useState(0);

	const width = useWindowSize().width;

	const concatedArr = categories.concat(categoriesNew);

	const calcFullArr = () => {
		let fullArr = []
		for (let i = 0; i < concatedArr.length; i++) {
			fullArr = fullArr.concat(concatedArr[i].items)
		}
		return fullArr;

	}

	const calcCurrentArr = () => {

		if (selected === 'vse') {
			return calcFullArr().filter((v, i, a) => a.findIndex(t => ((t.title + t.id) === (v.title + v.id))) === i)
		}

		else return concatedArr.filter((i) => i.slug === selected)[0].items
	}

	useEffect(() => {
		if (width <= 600) {
			setShowValue(8)
		}
		else setShowValue(12)
	}, [width, selected])

	return (
		<div className={styles.content}>
			<h2 className={styles.title}>Дополнительно вы можете заказать</h2>
			<div className={styles.tabs}>
				{tabsService.map((i) => {
					return (
						<button key={i.id} className={cn(styles.tab, {
							[styles.tabActive]: i.category === selected
						})}
							onClick={() => setSelected(i.category)}>
							{i.title}
						</button>
					)
				})}
			</div>

			<div className={styles.items}>

				{calcCurrentArr().slice(0, showValue).map((i) => {

					const foundItem = shopState.find(addedItem => addedItem.id === i.id);
					const data = addedDops.find(addedItem => addedItem.id === i.id);
					return (
						<GarderobCard
							key={i.title}
							card={foundItem ? foundItem : i}
							data={data ? data : i}
							isPrimary={true}
							garderobId={id}
							isGarderob={true}
							className={styles.card}
						/>
					)
				})}

			</div>

			{calcCurrentArr().slice(0, showValue).length >= showValue && (
				<button className={styles.show}
					onClick={(() => {
						setShowValue(calcFullArr().length + 10)
					})}>
					Показать все
				</button>
			)}

		</div>
	);
};

export default GarderobTabs;


const tabsService = [
	{
		"id": 1,
		"title": "Все",
		"category": "vse"
	},
	{
		"id": 9,
		"title": "Для гардероба",
		"category": "garderob"
	},
	{
		"id": 2,
		"title": "Мебель",
		"category": "arenda-mebeli"
	},
	{
		"id": 3,
		"title": "Зонирование",
		"category": "zonirovanie"
	},
	{
		"id": 4,
		"title": "Персонал",
		"category": "personal-na-meropriyatie"
	},
	{
		"id": 5,
		"title": "Дезинфекция",
		"category": "dezinfeksiya"
	},
	{
		"id": 6,
		"title": "Гримерная",
		"category": "oborudovanie-dlya-grimernoy"
	},
	{
		"id": 7,
		"title": "Камера хранения",
		"category": "kamery-hraneniya-v-arendu"
	},
	{
		"id": 8,
		"title": "Брендирование",
		"category": "brendirovanie"
	},

]