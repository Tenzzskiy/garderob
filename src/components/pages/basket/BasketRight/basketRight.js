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
import {useDispatch} from "react-redux";
import {ymClick} from "@/utilities/helpers";
import {MathRound, MathRoundGarderob} from "@/components/pages/basket/BasketCard/basketCard";

const BasketRight = ({calendar1,date2,setDate2,setCalendar1,date1,setDate1,cards, garderobs,value,onChange,date})=> {
	// const [date2,setDate2] = useState();

	const [isOpened, setOpened] = useState(false);
	const windowSize = useWindowSize();
	// const [calendar1,setCalendar1] = useState(false);
	const calendar_f = useRef(null);

	const [bottomIndicatorStatus, setBottomIndicatorStatus] = useState(false);


	const dispatch = useDispatch();
	const handleBottomIndicator = () => {
	  let observer = new IntersectionObserver(function (entries) {
	    entries.forEach(function (entry) {
	      setBottomIndicatorStatus(entry.isIntersecting)
	    });
	  });


	  let el = document.querySelector('#bottomIndicator');
	  // @ts-ignore
		observer.observe(el);
	}

	useEffect(() => {
		if(garderobs && garderobs.length || cards && cards.length && document) {
			handleBottomIndicator()
		} else return

	}, [])

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

				// @ts-ignore
				setDate1(`${value[0].getDate()}.${value[0].getMonth()}.${value[0].getFullYear()} `);
			}else
			{



				// @ts-ignore
				setDate1(`${value[0].getDate()}.${value[0].getMonth()}.${value[0].getFullYear()} `);

				// @ts-ignore
				setDate2(`${value[1].getDate()}.${value[1].getMonth()}.${value[1].getFullYear()} `);
			}


		}
		// @ts-ignore


	},[value]);


		// @ts-ignore
useOnClickOutside(calendar_f,() => windowSize.width > 720 ? setCalendar1(false) : null)

	const renderPrice = () => {
		let sum = 0;

		if (cards && cards.length) {
			for (let card of cards) {
				let price =  ( (Array.isArray(value) && (value[1].getDate() -value[0].getDate() +1 )) > 1 && card.isGarderob ? (MathRound(card.price)) : card.price) + (card.countTime - card.info.minTime) * card.info.priceForTime  ;

					if(Array.isArray(value)&&  card.isGarderob && ((value[1].getDate() -value[0].getDate() +1) >= 2  )) {

						sum +=  price * card.count *(Array.isArray(value) ? Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24))   : 1) + card.price   -(MathRound(card.price)) ;
					} else {


						sum +=  price * card.count *(Array.isArray(value) ? Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24))  : 1) ;
					}

			}
		}

		if (garderobs && garderobs.length) {
			for (let garderob of garderobs) {
				let price = 0;

				if (garderob.countTime > 1) {
					price += garderob.info.priceForTime * garderob.count * (garderob.countTime - 1);
				}


				if(Array.isArray(value)&& ((value[1].getDate() -value[0].getDate() +1) >= 2 )) {

					if (garderob.name === 'primary'){
						price += (MathRoundGarderob(garderob.price)) *   garderob.count *(Array.isArray(value) ? Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24))   : 1) + garderob.price   -(MathRoundGarderob(garderob.price)) ;
						console.log(4)
					}else {
						console.log(3)
						price += (MathRoundGarderob(garderob.price)) *   garderob.count *(Array.isArray(value) ? Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24))   : 1) + garderob.price   -(MathRoundGarderob(garderob.price)) ;

					}

				} else {

					price +=garderob.price * garderob.count *(Array.isArray(value) ? Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24))  : 1) ;
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

	const handleShowSecond = () => {
		if (price !== 0) {
			setOpened(true);
		}
	};


	const renderWindow = () => {
		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
		return (

				garderobs && garderobs.length || cards && cards.length ?
			<>
				<div className={styles.aside_content}>
					<p className={styles.title}>Ваш заказ</p>

					{// @ts-ignore
						windowSize.width < 720 ? null : <div className={styles.calendar}>
							<div className={styles.arenda_time}>
								<p>
									Укажите время аренды
								</p>
								<span>
						{
							Array.isArray(value) ?
								Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24)) : 1
						} дн
					</span>
							</div>
							<div className={styles.calendar_flex}>
								<div> c</div>
								<input value={date1} className={classNames(styles.active_date,styles.first_date)}
									   onClick={() => {
										   setCalendar1(true)
										   ymClick('rental_period')
									   }

								}
									// onChange={(e) => setDate1(e.current)}

								/>

								<div> до</div>
								<input value={date2}
									   className={classNames(styles.active_date,styles.second_date)}
									   onClick={() => setCalendar1(true)}
									// onChange={(e) => setDate2(e.current)}

								/>
							</div>
						</div>}
					<div className={styles.priceBlock}>
						<span className={styles.priceBlockName}>Итого</span>
						<span className={styles.priceBlockText}>{convertToNumberWithSpaces(renderPrice())} &#8381;</span>
					</div>
					<button id='bottomIndicator' className={classNames(styles.button, styles.buttonMargin)} onClick={handleShowSecond}>
						Перейти к оформлению
					</button>

					{windowSize.width > 720 && garderobs.length || cards.length ? <div className={styles.description}>
						Стоимость доставки зависит от объема заказа и адреса, рассчитывается после оформления заявки
						менеджером
					</div> : null}
				</div>

			</>
					: null


		);
	};

	return (
		<>
			{garderobs && garderobs.length || cards && cards.length ? <div className={styles.aside}>{renderWindow()}
				<div className={classNames(styles.modaal_calendar, calendar1 ? styles.calendar_active : null)}
					 ref={calendar_f}>
					<Calendar selectRange={true} minDate={new Date(date.setDate(date.getDate()))} onChange={onChange}
							  value={value}/>
				</div>



			</div> : null }


			{isOpened ? (
				<CallModal
					onChangeOpened={setOpened}
					title='Оформление'
					button='Оформить заказ'
					cards={cards}
					garderobs={garderobs}
				/>
			) : null}
			{typeof windowSize.width !== 'undefined' && windowSize.width <= 992 && renderPrice() !== 0 && !bottomIndicatorStatus ? (
				<div className={styles.fixedBlock}>
					<div className={styles.fixedHeader}>
						<span className={styles.fixedName}>Итого:</span>
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
