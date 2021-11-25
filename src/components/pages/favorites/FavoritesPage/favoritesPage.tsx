import styles from './favoritesPage.module.scss';
import classNames from 'classnames';
import {GarderobCard} from '@/components';

import useAppSelector from '@/hooks/useAppSelector';

function FavoritesPage(): JSX.Element {
	const favoriteItems = useAppSelector(state => state.favoriteState.items);

	const renderItems = (): JSX.Element => {
		if (favoriteItems && favoriteItems.length) {
			return (
				<div className={styles.list}>
					{favoriteItems.map(item => (
						<GarderobCard key={item.id} card={item} isPrimary={true} />
					))}
				</div>
			);
		} else {
			return (
				<div className={styles.wrapper}>
					<img className={styles.image} src='/images/sad.png' alt='Success' />
					<p className={styles.text}>В избранном пока ничего нет</p>
				</div>
			);
		}
	};

	return (
		<section className={styles.section}>
			<div className='container'>
				<h1 className={classNames(styles.title, 'sectionTitle')}>Избранное</h1>
				{renderItems()}
			</div>
		</section>
	);
}

export default FavoritesPage;
