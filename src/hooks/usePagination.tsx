import {useState, useRef} from 'react';
import paginateItems from '@/utilities/calculatePagination';
import useUpdateEffect from '@/hooks/useUpdateEffect';
import {getAllItemsBySort, getAllItemsByPrice} from '@/services/CardService';
import {PriceType} from '@/types';

interface Pricewise {
	price: number;
}

type Props<T> = {
	countOfPages: number;
	countOfItems: number;
	postsPerPage: number;
	currentItems: T[];
	currentPage: number;
	currentSort: string | number;
	currentPrice: PriceType;
	handleChangePrice: (price: PriceType) => void;
	handleChangePage: (page: number) => void;
	handleShowMore: () => void;
	handleSetSort: (sort: string | number) => void;
};

function usePagination<T extends Pricewise>(items: T[], itemsPerPage: number): Props<T> {
	const [currentPage, setCurrentPage] = useState(1);
	const [currentSort, setCurrentSort] = useState<string | number>('По умолчанию');
	const [currentPrice, setCurrentPrice] = useState<PriceType>({from: '', to: ''});

	const [itemsInfo, setItemsInfo] = useState(paginateItems<T>(items, 1, itemsPerPage));

	const isCanUpdated = useRef(true);

	const handleChangePage = (page: number) => {
		isCanUpdated.current = true;

		setCurrentPage(page);
	};

	const handleShowMore = () => {
		let sortedItems = getAllItemsBySort<T>(items, currentSort);
		sortedItems = getAllItemsByPrice<T>(sortedItems, currentPrice);

		const {currentItems} = paginateItems<T>(sortedItems, currentPage + 1, itemsPerPage);

		isCanUpdated.current = false;

		setItemsInfo({...itemsInfo, currentItems: [...itemsInfo.currentItems, ...currentItems]});
		setCurrentPage(currentPage + 1);
	};

	const handleSetSort = (sort: string | number) => {
		setCurrentSort(sort);
	};

	const handleChangePrice = (price: PriceType) => {
		setCurrentPrice(price);
	};

	useUpdateEffect(() => {
		let sortedItems = getAllItemsBySort<T>(items, currentSort);
		sortedItems = getAllItemsByPrice<T>(sortedItems, currentPrice);

		isCanUpdated.current = false;

		setItemsInfo(paginateItems<T>(sortedItems, 1, itemsPerPage));
		setCurrentPage(1);
	}, [currentSort, currentPrice]);

	useUpdateEffect(() => {
		if (isCanUpdated.current) {
			let sortedItems = getAllItemsBySort<T>(items, currentSort);
			sortedItems = getAllItemsByPrice<T>(sortedItems, currentPrice);

			setItemsInfo(paginateItems<T>(sortedItems, currentPage, itemsPerPage));
		}
	}, [currentPage]);

	return {
		handleChangePage,
		handleShowMore,
		handleSetSort,
		handleChangePrice,
		...itemsInfo,
		currentPage,
		currentSort,
		currentPrice
	};
}

export default usePagination;
