import {CategoryCardType, GarderobItemType} from '@/types';

export type ShopStateType = {
	items: CategoryCardType[];
};

export type GarderobStateType = {
	currentGarderob: number;
	items: GarderobItemType[];
};
