import {CategoryCardType} from '@/types';

export interface Props {
	myId?: string;
	title: string;
	isAdded: boolean;
	items: CategoryCardType[];
	visible?: boolean;
	isDifferent?: boolean;
}
