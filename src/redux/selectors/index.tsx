import {RootState} from '../store';
import {CategoryCardType, GarderobItemType} from '@/types';

export const selectItems = (state: RootState): CategoryCardType[] => state.shopState.items;
export const selectCurrentGarderob = (state: RootState): number => state.garderobState.currentGarderob;
export const selectAllGarderobs = (state: RootState): GarderobItemType[] => state.garderobState.items;
