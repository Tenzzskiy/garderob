import {CategoryCardType, GarderobItemType} from '@/types';

export type Props = {
	cards: CategoryCardType[];
	garderobs: GarderobItemType[];
	value?:any;
	duration?:any;
	setDuration?:any;
	circle?:any;
	setCircle?:any;
};
