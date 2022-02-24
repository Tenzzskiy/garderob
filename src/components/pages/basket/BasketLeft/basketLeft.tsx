import {BasketCard} from '@/components';
import styles from './basketLeft.module.scss';
import {Props} from './basketLeft.props';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updateDate} from "@/redux/actions/garderobActions";
import useAppDispatch from "@/hooks/useAppDispatch";

const BasketLeft = ({cards, garderobs,value,duration,setDuration}: Props): JSX.Element => {
	const renderItems = (): JSX.Element => {


		useEffect(()=>{
			if (duration[1] - duration[0] === 0){
				// @ts-ignore
				setDuration((prev) => [prev[0] , prev[1]+ +1])
			}
		},[duration])
		if (cards.length || garderobs.length) {
			return (
				<>
					<div className={styles.basketHeader}>
						<span className={styles.basketName}>Товары</span>
						<div className={styles.basketRight}>
							<span className={styles.basketName}>Цена</span>
							<span className={styles.basketName}>Количество</span>
							<span className={styles.basketName}>Сумма</span>
						</div>
					</div>
					<div className={styles.list}>
						{garderobs.map(card => (
							<BasketCard key={card.id} card={card} isGarderob={true} duration={duration} setDuration={setDuration} />
						))}
						{cards.map(card => (
							<BasketCard  key={card.id} card={card} value={value} duration={duration} setDuration={setDuration} />
						))}
					</div>
				</>
			);
		} else {
			return (
				<div className={styles.wrapper}>
					<img className={styles.image} src='/images/sad.png' alt='Success' />
					<p className={styles.text}>В корзине пока ничего нет</p>
				</div>
			);
		}
	};

	return <div className={styles.left}>{renderItems()}</div>;
};

export default BasketLeft;
