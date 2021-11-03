import styles from './basketSection.module.scss';
import {BasketHeader, BasketLeft, BasketRight} from '@/components';
import classNames from 'classnames';
import useAppSelector from '@/hooks/useAppSelector';
import {selectAllGarderobs, selectItems} from '@/redux/selectors';

const BasketSection = (): JSX.Element => {
	const items = useAppSelector(selectItems);
	const garderobs = useAppSelector(selectAllGarderobs);

	return (
		<section className={styles.section}>
			<div className={classNames('container', styles.container)}>
				<BasketHeader />
				<BasketLeft cards={items} garderobs={garderobs} />
				<BasketRight cards={items} garderobs={garderobs} />
			</div>
		</section>
	);
};

export default BasketSection;
