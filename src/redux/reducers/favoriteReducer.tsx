import {createReducer} from '@reduxjs/toolkit';
import {addFavoriteItemToStore, deleteFavoriteItemFromStore} from '../actions/favoriteActions';
import {ShopStateType} from '../types';

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
		});
});

export default favoriteReducer;
