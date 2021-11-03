import {createReducer} from '@reduxjs/toolkit';
import {
	addCardToBasket,
	changeCardInBasket,
	decreaseCardToBasket,
	increaseCardToBasket,
	removeCardToBasket,
	changeTimeCardInBasket,
	increaseTimeCardToBasket,
	decreaseTimeCardToBasket,
	clearBasket
} from '../actions/shopActions';
import {ShopStateType} from '../types';

const initialState: ShopStateType = {
	items: []
};

const shopReducer = createReducer(initialState, builder => {
	builder
		.addCase(addCardToBasket, (state, action) => {
			state.items.push(action.payload);
		})
		.addCase(increaseCardToBasket, (state, action) => {
			const item = state.items.find(card => card.id === action.payload);

			if (item) {
				item.count += 1;
			}
		})
		.addCase(decreaseCardToBasket, (state, action) => {
			const item = state.items.find(card => card.id === action.payload);

			if (item) {
				item.count -= 1;
			}
		})
		.addCase(changeCardInBasket, (state, action) => {
			const item = state.items.find(card => card.id === action.payload.id);

			if (item) {
				item.count = action.payload.count;
			}
		})
		.addCase(increaseTimeCardToBasket, (state, action) => {
			const item = state.items.find(card => card.id === action.payload);

			if (item) {
				item.countTime += 1;
			}
		})
		.addCase(decreaseTimeCardToBasket, (state, action) => {
			const item = state.items.find(card => card.id === action.payload);

			if (item) {
				item.countTime -= 1;
			}
		})
		.addCase(changeTimeCardInBasket, (state, action) => {
			const item = state.items.find(card => card.id === action.payload.id);

			if (item) {
				item.countTime = action.payload.countTime;
			}
		})
		.addCase(removeCardToBasket, (state, action) => {
			state.items = state.items.filter(card => card.id !== action.payload);
		})
		.addCase(clearBasket, state => {
			state.items = [];
		});
});

export default shopReducer;
