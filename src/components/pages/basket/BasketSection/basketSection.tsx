import styles from './basketSection.module.scss';
import {BasketHeader, BasketLeft, BasketRight} from '@/components';
import classNames from 'classnames';
import useAppSelector from '@/hooks/useAppSelector';
import {selectAllGarderobs, selectItems} from '@/redux/selectors';
import {useState} from "react";

const BasketSection = (): JSX.Element => {
	const [date1,setDate1] = useState();
	const [calendar1,setCalendar1] = useState(false);
	const items = useAppSelector(selectItems);
	const [duration,setDuration] = useState( [new Date().getDate() ,new Date().getDate() ]);
	const garderobs = useAppSelector(selectAllGarderobs);
	const [date2,setDate2] = useState();
	let date = new Date();
	const [value, onChange] = useState(new Date(date.setDate(date.getDate() +1)));
	// @ts-ignore
	// @ts-ignore
	return (
		<section className={styles.section}>
			<div className={classNames('container', styles.container)}>

				<BasketHeader calendar1={calendar1}
							  setCalendar1={setCalendar1}
							  date1={date1}
							  date2={date2}
							  setDate1={setDate1}
							  setDate2={setDate2}
					// @ts-ignore
							  cards={items} garderobs={garderobs} value={value} duration={duration}   onChange={onChange} date={date}
				/>
				<BasketLeft
					// @ts-ignore
					cards={items} garderobs={garderobs} value={value}
					// @ts-ignore
					duration={duration} setDuration={setDuration} />
				<BasketRight calendar1={calendar1}
							 setCalendar1={setCalendar1}
					// @ts-ignore
							 date1={date1}
							 date2={date2}
							 setDate1={setDate2}
							 setDate2={setDate2}
							 cards={items} garderobs={garderobs} value={value}
					// @ts-ignore
							 duration={duration}   onChange={onChange} date={date}/>
			</div>
		</section>
	);
};

export default BasketSection;
