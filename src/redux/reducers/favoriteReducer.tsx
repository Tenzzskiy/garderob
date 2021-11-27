import {createReducer} from '@reduxjs/toolkit';
import {addFavoriteItemToStore, deleteFavoriteItemFromStore, initializeFavoriteStore} from '../actions/favoriteActions';
import {ShopStateType} from '../types';
import {getFavoritesFromLocaleStorage} from '@/utilities/helpers';
import {CategoryCardType} from '@/types';

const savedFavorites = getFavoritesFromLocaleStorage() as CategoryCardType[];

const initialState: ShopStateType = {
	items: []
};

const favoriteReducer = createReducer(initialState, builder => {
	builder
		.addCase(addFavoriteItemToStore, (state, action) => {
			state.items.push(action.payload);
		})
		.addCase(deleteFavoriteItemFromStore, (state, action) => {
			state.items = state.items.filter(card => card.id !== action.payload);
		})
		.addCase(initializeFavoriteStore, state => {
			state.items = savedFavorites;
		});
});

export default favoriteReducer;
