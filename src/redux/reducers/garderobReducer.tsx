import {createReducer} from '@reduxjs/toolkit';
import {
	addGarderob,
	chooseGarderob,
	removeGarderob,
	increaseGarderob,
	decreaseGarderob,
	changeGarderob,
	increaseTimeGarderob,
	decreaseTimeGarderob,
	changeTimeGarderob,
	addDopsToGarderob,
	removeDopsFromGarderob,
	increaseDopsInGarderob,
	decreaseDopsInGarderob,
	changeDopsInGarderob,
	clearGarderobs,
	initializeGarderobStore,
	refresh
} from '../actions/garderobActions';
import {GarderobStateType} from '../types';
import {getGarderobFromLocaleStorage} from '@/utilities/helpers';
import {GarderobItemType} from '@/types';

const savedItems = getGarderobFromLocaleStorage() as GarderobItemType[];

const initialState: GarderobStateType = {
	currentGarderob: 0,
	items: []
};

const favoriteReducer = createReducer(initialState, builder => {
	builder
		.addCase(chooseGarderob, (state, action) => {
			state.currentGarderob = action.payload;
		})
		.addCase(addGarderob, (state, action) => {
			state.items.push(action.payload);
		})
		.addCase(removeGarderob, (state, action) => {
			state.items = state.items.filter(item => item.id !== action.payload);
		})
		.addCase(increaseGarderob, (state, action) => {
			const item = state.items.find(card => card.id === action.payload);

			if (item) {
				item.count += 1;
			}
		})
		.addCase(decreaseGarderob, (state, action) => {
			const item = state.items.find(card => card.id === action.payload);

			if (item) {
				item.count -= 1;
			}
		})
		.addCase(changeGarderob, (state, action) => {
			const item = state.items.find(card => card.id === action.payload.id);

			if (item) {
				item.count = action.payload.count;
			}
		})
		.addCase(increaseTimeGarderob, (state, action) => {
			const item = state.items.find(card => card.id === action.payload);

			if (item) {
				item.countTime += 1;
			}
		})
		.addCase(decreaseTimeGarderob, (state, action) => {
			const item = state.items.find(card => card.id === action.payload);

			if (item) {
				item.countTime -= 1;
			}
		})
		.addCase(changeTimeGarderob, (state, action) => {
			const item = state.items.find(card => card.id === action.payload.id);

			if (item) {
				item.countTime = action.payload.count;
			}
		})
		.addCase(addDopsToGarderob, (state, action) => {
			const item = state.items.find(card => card.id === action.payload.id);

			if (item) {
				item.addedDops.push(action.payload.item);
			}
		})
		.addCase(removeDopsFromGarderob, (state, action) => {
			const item = state.items.find(card => card.id === action.payload.id);

			if (item) {
				item.addedDops = item.addedDops.filter(addedItem => addedItem.id !== action.payload.item.id);
			}
		})
		.addCase(increaseDopsInGarderob, (state, action) => {
			const item = state.items.find(card => card.id === action.payload.id);

			if (item) {
				let addedDop = item.addedDops.find(addedItem => addedItem.id === action.payload.item.id);

				if (addedDop) {
					addedDop.count += 1;
				}
			}
		})
		.addCase(decreaseDopsInGarderob, (state, action) => {
			const item = state.items.find(card => card.id === action.payload.id);

			if (item) {
				let addedDop = item.addedDops.find(addedItem => addedItem.id === action.payload.item.id);

				if (addedDop) {
					addedDop.count -= 1;
				}
			}
		})
		.addCase(changeDopsInGarderob, (state, action) => {
			const item = state.items.find(card => card.id === action.payload.id);

			if (item) {
				let addedDop = item.addedDops.find(addedItem => addedItem.id === action.payload.item.id);

				if (addedDop) {
					addedDop.count = action.payload.value;
				}
			}
		})
		.addCase(clearGarderobs, state => {
			state.items = [];
		})
		.addCase(initializeGarderobStore, state => {
			state.items = savedItems;
		});

});

export default favoriteReducer;
