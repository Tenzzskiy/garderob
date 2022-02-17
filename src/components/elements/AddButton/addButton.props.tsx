import {CategoryCardType, GarderobItemType} from '@/types';

export type Props = {
	data:CategoryCardType,
	value: number;
	size: string;
	card: any;
	info?: string;
	maxValue?: number;
	isCount?: boolean;
	isGarderob?: boolean;
	isOwn?: boolean;
	garderobId?: number;
};
