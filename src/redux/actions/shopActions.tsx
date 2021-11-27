import {createAction} from '@reduxjs/toolkit';
import {
	ADD_CARD_TO_BASKET,
	INCREASE_CARD_TO_BASKET,
	DECREASE_CARD_TO_BASKET,
	CHANGE_CARD_IN_BASKET,
	REMOVE_CARD_IN_BASKET,
	INCREASE_TIME_CARD_TO_BASKET,
	DECREASE_TIME_CARD_TO_BASKET,
	CHANGE_TIME_CARD_IN_BASKET,
	CLEAR_BASKET,
	INITIALIZE_SHOP
} from '../types/shopTypes';
import {CategoryCardType} from '@/types';

export const addCardToBasket = createAction<CategoryCardType>(ADD_CARD_TO_BASKET);
export const removeCardToBasket = createAction<number>(REMOVE_CARD_IN_BASKET);

export const increaseCardToBasket = createAction<number>(INCREASE_CARD_TO_BASKET);
export const decreaseCardToBasket = createAction<number>(DECREASE_CARD_TO_BASKET);
export const changeCardInBasket = createAction<{id: number; count: number}>(CHANGE_CARD_IN_BASKET);

export const increaseTimeCardToBasket = createAction<number>(INCREASE_TIME_CARD_TO_BASKET);
export const decreaseTimeCardToBasket = createAction<number>(DECREASE_TIME_CARD_TO_BASKET);
export const changeTimeCardInBasket = createAction<{id: number; countTime: number}>(CHANGE_TIME_CARD_IN_BASKET);

export const clearBasket = createAction(CLEAR_BASKET);
export const initializeShop = createAction(INITIALIZE_SHOP);
