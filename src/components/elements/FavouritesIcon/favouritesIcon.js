import styles from './favouritesIcon.module.scss';
import classNames from 'classnames';
import useAppSelector from '@/hooks/useAppSelector';

function FavouritesIcon() {

	const favoriteItems = useAppSelector(state => state.favoriteState.items);

	console.log(favoriteItems)

	return (
		<>
			<span className={classNames(styles.icon, styles.iconHover, 'icon-heart', {
				[styles.active]: favoriteItems.length !== 0
			})}>
				{favoriteItems.length !== 0 && (
					<span className={styles.number}>
						{favoriteItems.length}
					</span>
				)}
			</span>
		</>
	);
}

export default FavouritesIcon;
