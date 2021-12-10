import styles from './searchPage.module.scss';
import classNames from 'classnames';
import {Props} from './searchPage.props';
import {GarderobCard} from '@/components';
import useAppSelector from '@/hooks/useAppSelector';

function SearchPage({items}: Props): JSX.Element {
	const allItems = useAppSelector(state => state.shopState.items);

	const renderItems = (): JSX.Element => {
		if (items && items.length) {
			return (
				<div className={styles.list}>
					{items.map(item => {
						let foundItem = allItems.find(card => card.id === item.id);
						return <GarderobCard key={item.id} card={foundItem ? foundItem : item} isPrimary={true} />;
					})}
				</div>
			);
		} else {
			return (
				<div className={styles.wrapper}>
					<img className={styles.image} src='/images/sad.png' alt='Success' />
					<p className={styles.text}>Ничего не найдено</p>
				</div>
			);
		}
	};

	return (
		<section className={styles.section}>
			<div className='container'>
				<h1 className={classNames(styles.title, 'sectionTitle')}>Поиск</h1>
				{renderItems()}
			</div>
		</section>
	);
}

export default SearchPage;
