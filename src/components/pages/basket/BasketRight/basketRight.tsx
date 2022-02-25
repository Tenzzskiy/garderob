import styles from './basketRight.module.scss';
import {Props} from './basketRight.props';
import {CallModal} from '@/components';
import React, {useEffect, useRef, useState} from 'react';
import {convertToNumberWithSpaces} from '@/utilities/helpers';
import useWindowSize from '@/hooks/useWindowSize';
import classNames from 'classnames';
import 'react-calendar/dist/Calendar.css';
// @ts-ignore
import Calendar from 'react-calendar';
import useOnClickOutside from "@/hooks/useOnClickOutside";

const BasketRight = ({cards, garderobs,value,onChange,date,duration,circle}: Props): JSX.Element => {
	const [date2,setDate2] = useState();

	const [isOpened, setOpened] = useState(false);
	const windowSize = useWindowSize();
	const [calendar1,setCalendar1] = useState(false);
	const calendar_f = useRef(null);
	const [date1,setDate1] = useState();

 	useEffect(() =>{
		 // @ts-ignore
		if ( !(Array.isArray(value)) ) {
			// @ts-ignore
			setDate2(`${value.getDate()}.${value.getMonth()}.${value.getFullYear()} `);
			// @ts-ignore
			setDate1(`${value.getDate()}.${value.getMonth()}.${value.getFullYear()} `);
		} else {
			if (value.length < 2) {
				// @ts-ignore
				setDate1(`${value[0].getDate()}.${value[0].getMonth()}.${value[0].getFullYear()} `);
				console.log(value[1] -value[0])
				// @ts-ignore
				setDate1(`${value[0].getDate()}.${value[0].getMonth()}.${value[0].getFullYear()} `);
			}else
			{
				// @ts-ignore
				setDate1(`${value[0].getDate()}.${value[0].getMonth()}.${value[0].getFullYear()} `);
				console.log((value[1].getDate() -value[0].getDate() +1))
				// @ts-ignore
				setDate2(`${value[1].getDate()}.${value[1].getMonth()}.${value[1].getFullYear()} `);
			}


		}

	},[value]);

	useOnClickOutside(calendar_f,() => setCalendar1(false));
	const renderPrice = (): number => {
		let sum = 0;

		if (cards && cards.length) {
			for (let card of cards) {
				let price =  ( (Array.isArray(value) && (value[1].getDate() -value[0].getDate() +1 )) > 1 ? (card.price
					* 0.8) : card.price) + (card.countTime - card.info.minTime) * card.info.priceForTime ;

					if(Array.isArray(value)&& ((value[1].getDate() -value[0].getDate() +1) >= 2)) {
						sum +=  price * card.count *(Array.isArray(value) ? (value[1].getDate() -value[0].getDate() )   : 1) + card.price * card.count ;
					} else {
						sum +=  price * card.count *(Array.isArray(value) ? (value[1].getDate() -value[0].getDate() + 1 )  : 1) ;
					}

			}
		}

		if (garderobs && garderobs.length) {
			for (let garderob of garderobs) {
				let price = 0;

				if (garderob.countTime > 1) {
					price += garderob.info.priceForTime * garderob.count * (garderob.countTime - 1);
				}


				if(Array.isArray(value)&& ((value[1].getDate() -value[0].getDate() +1) >= 2)) {
					price += (garderob.price*0.8) *   garderob.count *(Array.isArray(value) ? (value[1].getDate() -value[0].getDate() )   : 1) + garderob.price * garderob.count ;

				} else {
					price +=garderob.price * garderob.count *(Array.isArray(value) ? (value[1].getDate() -value[0].getDate() + 1 )  : 1) ;
				}



				for (let i = 0; i < garderob.addedDops.length; i++) {
					price += garderob.addedDops[i].count * garderob.addedDops[i].price;
				}

				sum += price + (garderob.montage ? 2900 : 0 );
			}
		}

		return sum;
	};

	const price = renderPrice();

	const handleShowSecond = (): void => {
		if (price !== 0) {
			setOpened(true);
		}
	};

	const renderWindow = (): JSX.Element => {
		// @ts-ignore
		// @ts-ignore
		return (
			<>
				<p className={styles.title}>Ваш заказ</p>
				<div className={styles.calendar}>
				<div className={styles.arenda_time}>
					<p>
						Укажите время аренды
					</p>
					<span>
						{
							Array.isArray(value) ?
							(value[1].getDate() -value[0].getDate() +1) : 1
						} дн
					</span>
				</div>
					<div className={styles.calendar_flex}>
					<div> c</div>
					<input value={date1} className={styles.first_date}
						   onClick={() => setCalendar1(true)}
					// onChange={(e) => setDate1(e.current)}
					/>

					<div> до</div>
					<input value={date2}
						   className={styles.second_date}
						   onClick={() => setCalendar1(true)}
						   // onChange={(e) => setDate2(e.current)}

					/>
					</div>
				</div>
				<div className={styles.priceBlock}>
					<span className={styles.priceBlockName}>Итого</span>
					<span className={styles.priceBlockText}>{convertToNumberWithSpaces(renderPrice())} &#8381;</span>
				</div>
				<button className={classNames(styles.button, styles.buttonMargin)} onClick={handleShowSecond}>
					Перейти к оформлению
				</button>
				<p className={styles.description}>
					Стоимость доставки зависит от объема заказа и адреса, рассчитывается после оформления заявки
					менеджером
				</p>
			</>
		);
	};

	return (
		<>
			<div className={styles.aside}>{renderWindow()}
				<div className={classNames(styles.modaal_calendar, calendar1 ? styles.calendar_active : null)} ref={calendar_f} >
					<Calendar selectRange={true}  minDate={new Date(date.setDate(date.getDate()   ))}  onChange={onChange} value={value} />
				</div>


			</div>


			{isOpened ? (
				<CallModal
					onChangeOpened={setOpened}
					title='Оформление'
					button='Оформить заказ'
					cards={cards}
					garderobs={garderobs}
				/>
			) : null}
			{typeof windowSize.width !== 'undefined' && windowSize.width <= 992 && renderPrice() !== 0 ? (
				<div className={styles.fixedBlock}>
					<div className={styles.fixedHeader}>
						<span className={styles.fixedName}>Стоимость аренды</span>
						<span className={styles.fixedPrice}>{convertToNumberWithSpaces(renderPrice())} &#8381;</span>
					</div>
					<button className={styles.button} onClick={handleShowSecond}>
						Перейти к оформлению
					</button>
				</div>
			) : null}
		</>
	);
};

export default BasketRight;
