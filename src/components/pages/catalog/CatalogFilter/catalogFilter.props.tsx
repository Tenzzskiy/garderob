import {PriceType} from '@/types';

export type Props = {
	sort: string | number;
	price: PriceType;
	onChangePrice: (price: PriceType) => void;
	onChangeSort: (sort: string | number) => void;
};
