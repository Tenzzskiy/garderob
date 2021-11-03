interface Pricewise {
	price: number;
}

type PriceType = {
	from: number | string | undefined;
	to: number | string | undefined;
};

function getSimplePriceOfProduct<T extends Pricewise>(product: T): number {
	return product.price;
}

function sortItemsByAscending<T extends Pricewise>(products: T[]): T[] {
	const sortedItems = [...products];

	return sortedItems.sort((a, b) => getSimplePriceOfProduct<T>(a) - getSimplePriceOfProduct<T>(b));
}

function sortItemsByDescending<T extends Pricewise>(products: T[]): T[] {
	const sortedItems = [...products];

	return sortedItems.sort((a, b) => getSimplePriceOfProduct<T>(b) - getSimplePriceOfProduct<T>(a));
}

function getAllItemsByPrice<T extends Pricewise>(items: T[], price: PriceType): T[] {
	let sortedItems = [...items];

	if (price.from !== '') {
		sortedItems = sortedItems.filter(product => getSimplePriceOfProduct<T>(product) >= Number(price.from));
	}

	if (price.to !== '') {
		sortedItems = sortedItems.filter(product => getSimplePriceOfProduct<T>(product) <= Number(price.to));
	}

	return sortedItems;
}

function getAllItemsBySort<T extends Pricewise>(items: T[], sort: string | number): T[] {
	if (sort === 'По умолчанию') {
		return [...items];
	} else if (sort === 'По возрастанию') {
		return sortItemsByAscending<T>(items);
	} else if (sort === 'По убыванию') {
		return sortItemsByDescending<T>(items);
	} else {
		return [];
	}
}

export {getAllItemsBySort, getAllItemsByPrice};
