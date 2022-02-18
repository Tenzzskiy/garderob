import {createAction} from '@reduxjs/toolkit';
import {ADD_FAVORITE_TO_STORE, DELETE_FAVORITE_FROM_STORE, INITIALIZE_FAVORITE_STORE,INCREASE_FAVORITE_STORE,DECREASE_FAVORITE_STORE,ADDTOBUSKET_FAVORITE_STORE} from '../types/favoriteTypes';
import {CategoryCardType} from '@/types';

export const addFavoriteItemToStore = createAction<CategoryCardType>(ADD_FAVORITE_TO_STORE);
export const deleteFavoriteItemFromStore = createAction<number>(DELETE_FAVORITE_FROM_STORE);
export const initializeFavoriteStore = createAction(INITIALIZE_FAVORITE_STORE);
export const increaseFavourite = createAction(INCREASE_FAVORITE_STORE);
export const decreaseFavourite = createAction(DECREASE_FAVORITE_STORE);
export const addToBusket = createAction(ADDTOBUSKET_FAVORITE_STORE);
