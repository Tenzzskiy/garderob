import {configureStore} from '@reduxjs/toolkit';
import shopReducer from './reducers/shopReducer';
import favoriteReducer from './reducers/favoriteReducer';
import garderobReducer from './reducers/garderobReducer';

export const initStore = (preloadedState = {}) => {
	return configureStore({
		reducer: {shopState: shopReducer, favoriteState: favoriteReducer, garderobState: garderobReducer},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({immutableCheck: false, serializableCheck: false, thunk: true}),
		devTools: process.env.NODE_ENV !== 'production',
		preloadedState
	});
};

export const store = initStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
