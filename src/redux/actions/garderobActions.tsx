import {GarderobItemType} from '@/types';
import {createAction} from '@reduxjs/toolkit';
import {
	CHOOSE_GARDEROB,
	ADD_GARDEROB,
	REMOVE_GARDEROB,
	INCREASE_GARDEROB,
	DECREASE_GARDEROB,
	CHANGE_GARDEROB,
	INCREASE_TIME_GARDEROB,
	DECREASE_TIME_GARDEROB,
	CHANGE_TIME_GARDEROB,
	ADD_DOPS_TO_GARDEROB,
	REMOVE_DOPS_FROM_GARDEROB,
	INCREASE_DOPS_IN_GARDEROB,
	DECREASE_DOPS_IN_GARDEROB,
	CHANGE_DOPS_IN_GARDEROB,
	CLEAR_GARDEROBS
} from '../types/gaderobTypes';

export const addGarderob = createAction<GarderobItemType>(ADD_GARDEROB);
export const removeGarderob = createAction<number>(REMOVE_GARDEROB);
export const chooseGarderob = createAction<number>(CHOOSE_GARDEROB);
export const increaseGarderob = createAction<number>(INCREASE_GARDEROB);
export const decreaseGarderob = createAction<number>(DECREASE_GARDEROB);
export const changeGarderob = createAction<{id: number; count: number}>(CHANGE_GARDEROB);
export const increaseTimeGarderob = createAction<number>(INCREASE_TIME_GARDEROB);
export const decreaseTimeGarderob = createAction<number>(DECREASE_TIME_GARDEROB);
export const changeTimeGarderob = createAction<{id: number; count: number}>(CHANGE_TIME_GARDEROB);

export const addDopsToGarderob = createAction<{id: number; item: any}>(ADD_DOPS_TO_GARDEROB);
export const removeDopsFromGarderob = createAction<{id: number; item: any}>(REMOVE_DOPS_FROM_GARDEROB);
export const increaseDopsInGarderob = createAction<{id: number; item: any}>(INCREASE_DOPS_IN_GARDEROB);
export const decreaseDopsInGarderob = createAction<{id: number; item: any}>(DECREASE_DOPS_IN_GARDEROB);
export const changeDopsInGarderob = createAction<{id: number; item: any; value: number}>(CHANGE_DOPS_IN_GARDEROB);

export const clearGarderobs = createAction(CLEAR_GARDEROBS);
