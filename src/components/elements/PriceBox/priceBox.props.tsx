import {PriceType} from '@/types';

export type Props = {
	classname?: string;
	price: PriceType;
	onChangePrice: (price: PriceType) => void;
	isSpecial?: boolean;
};
