import styles from './basketSection.module.scss';
import {BasketHeader, BasketLeft, BasketRight} from '@/components';
import classNames from 'classnames';
import useAppSelector from '@/hooks/useAppSelector';
import {selectAllGarderobs, selectItems} from '@/redux/selectors';
import {useState} from "react";

const BasketSection = (): JSX.Element => {
	const items = useAppSelector(selectItems);

	const garderobs = useAppSelector(selectAllGarderobs);
	let date = new Date();
	const [value, onChange] = useState(new Date(date.setDate(date.getDate() +1)));
	return (
		<section className={styles.section}>
			<div className={classNames('container', styles.container)}>
				<BasketHeader />
				<BasketLeft cards={items} garderobs={garderobs} value={value}  />
				<BasketRight cards={items} garderobs={garderobs} value={value} onChange={onChange} date={date}/>
			</div>
		</section>
	);
};

export default BasketSection;
