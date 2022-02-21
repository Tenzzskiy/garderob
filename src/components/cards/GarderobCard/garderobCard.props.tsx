import {CategoryCardType} from '@/types';

export type Props = {
	dops?:any;
	className?: string;
	card: CategoryCardType;
	isPrimary: boolean;
	disabled?: boolean;
	isGarderob?: boolean;
	garderobId?: number;
	isDifferent?: boolean;
};
