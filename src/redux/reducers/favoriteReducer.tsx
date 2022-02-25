import {createReducer} from '@reduxjs/toolkit';
import {addFavoriteItemToStore, deleteFavoriteItemFromStore, initializeFavoriteStore} from '../actions/favoriteActions';
import {ShopStateType} from '../types';
import {getFavoritesFromLocaleStorage} from '@/utilities/helpers';
import {CategoryCardType} from '@/types';
import {decreaseGarderob, increaseGarderob, updateDate} from "@/redux/actions/garderobActions";
import {increaseFavourite,decreaseFavourite,addToBusket} from "../actions/favoriteActions";

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
		})
		.addCase(increaseFavourite, (state, action) => {
		const item = state.items.find(card => card.id === action.payload);

		if (item) {
			item.count += 1;
		}
			})
		.addCase(decreaseFavourite, (state, action) => {
			const item = state.items.find(card => card.id === action.payload);

			if (item) {
				item.count -= 1;
			}
		})
		.addCase(addToBusket, (state,action) =>{

				// @ts-ignore
			state.items = state.items.map(card => card.id === action.payload.id ? action.payload : card );


		})
});

export default favoriteReducer;
