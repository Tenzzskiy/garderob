import styles from './heartIcon.module.scss';
import {Props} from './heartIcon.props';
import classNames from 'classnames';
import {useState, useEffect} from 'react';
import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';
import {addFavoriteItemToStore, deleteFavoriteItemFromStore} from '@/redux/actions/favoriteActions';

function HeartIcon({className, card}: Props): JSX.Element {
	const [isLiked, setLiked] = useState(false);

	const favoriteItems = useAppSelector(state => state.favoriteState.items);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (favoriteItems.find(item => item.id === card.id)) {
			setLiked(true);
		} else {
			setLiked(false);
		}
	}, [favoriteItems]);

	const handleSaveItem = () => {
		if (!isLiked) {
			setLiked(true);

			dispatch(addFavoriteItemToStore(card));
		} else {
			dispatch(deleteFavoriteItemFromStore(card.id));

			setLiked(false);
		}
	};

	return !isLiked ? (
		<span
			className={classNames(styles.icon, styles.iconHover, className, 'icon-heart', isLiked && styles.liked)}
			onClick={handleSaveItem}
		></span>
	) : (
		<svg
			width='24'
			height='24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={classNames(styles.icon, className)}
			onClick={handleSaveItem}
		>
			<path
				d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.501 5.501 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0Z'
				fill='#FFE200'
				stroke='#FFE200'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export default HeartIcon;
