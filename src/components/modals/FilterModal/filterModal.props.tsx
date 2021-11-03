import {PriceType} from '@/types';

export interface Props {
	visible: boolean;
	onChangeVisible: () => void;
	price: PriceType;
	sort: string | number;
	onChangePrice: (price: PriceType) => void;
	onChangeSort: (sort: string | number) => void;
}
