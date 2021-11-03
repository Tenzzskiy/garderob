import styles from './catalogList.module.scss';
import {GarderobCard} from '@/components';
import {Props} from './catalogList.props';
import useAppSelector from '@/hooks/useAppSelector';

const CatalogList = ({items}: Props): JSX.Element => {
	const allItems = useAppSelector(state => state.shopState.items);

	return (
		<div className={styles.list}>
			{items.map(item => {
				let foundItem = allItems.find(card => card.id === item.id);

				return <GarderobCard key={item.id} card={foundItem ? foundItem : item} isPrimary={true} />;
			})}
		</div>
	);
};

export default CatalogList;
