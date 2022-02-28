import classNames from 'classnames';
import styles from './basketHeader.module.scss';
import useAppDispatch from '@/hooks/useAppDispatch';
import {clearBasket} from '@/redux/actions/shopActions';
import {clearGarderobs} from '@/redux/actions/garderobActions';
import useWindowSize from "@/hooks/useWindowSize";
import React, {useEffect, useRef} from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import 'react-calendar/dist/Calendar.css';
// @ts-ignore
import Calendar from 'react-calendar';
import {Props} from "@/components/pages/basket/BasketRight/basketRight.props";
import {useGarderobContext} from "@/contexts/GarderobContext";
import useAppSelector from "@/hooks/useAppSelector";
import {selectAllGarderobs, selectItems} from "@/redux/selectors";

const BasketHeader = ({
						  calendar1,
						  setCalendar1, date,
						  date1, date2, setDate2, value, onChange,
						  setDate1
					  }:Props): JSX.Element => {
	const dispatch = useAppDispatch();
	const size = useWindowSize();
	const calendar_f = useRef(null);
	const handleClearBasket = () => {
		dispatch(clearBasket());
		dispatch(clearGarderobs());
	};

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

	},[value]);
	const garderobs = useAppSelector(selectAllGarderobs);
	const cards = useAppSelector(selectItems);
	useOnClickOutside(calendar_f,() => setCalendar1(false));
	// @ts-ignore
	return (
		<div className={styles.wrapper}>
			<div className={styles.block}>
				<p className={classNames(styles.title, 'sectionTitle')}>Корзина</p>
				<span className={classNames(styles.icon)} onClick={handleClearBasket}>Очистить корзину</span>
			</div>
			{	// @ts-ignore
				size.width < 720 && (garderobs && garderobs.length || cards && cards.length) ? <div className={styles.calendar}>
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
						<div className={classNames(styles.modaal_calendar, calendar1 ? styles.calendar_active : null)} ref={calendar_f} >
							<Calendar selectRange={true}  minDate={new Date(date.setDate(date.getDate()   ))}  onChange={onChange} value={value} />
						</div>
						{size.width < 720 ? <p className={styles.description}>
							Стоимость доставки зависит от объема заказа и адреса, рассчитывается после оформления заявки
							менеджером
						</p> : null}
			</div>

					: null}
		</div>
	);
};

export default BasketHeader;
