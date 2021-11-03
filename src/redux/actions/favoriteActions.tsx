import {createAction} from '@reduxjs/toolkit';
import {ADD_FAVORITE_TO_STORE, DELETE_FAVORITE_FROM_STORE} from '../types/favoriteTypes';
import {CategoryCardType} from '@/types';

export const addFavoriteItemToStore = createAction<CategoryCardType>(ADD_FAVORITE_TO_STORE);
export const deleteFavoriteItemFromStore = createAction<number>(DELETE_FAVORITE_FROM_STORE);
