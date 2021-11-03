type PaginationProps<T> = {
	countOfPages: number;
	countOfItems: number;
	postsPerPage: number;
	currentItems: Array<T>;
	currentPage: number;
};

function paginate<T>(items: Array<T>, currentPage: number, postsPerPageCount: number): PaginationProps<T> {
	const postsPerPage = postsPerPageCount;
	const indexOfLastProduct = currentPage * postsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
	const countOfItems = items.length;
	const countOfPages = Math.ceil(countOfItems / postsPerPage);

	let currentItems = [];

	if (currentPage === countOfPages) {
		currentItems = items.slice(indexOfFirstProduct);
	} else {
		currentItems = items.slice(indexOfFirstProduct, indexOfLastProduct);
	}

	return {
		countOfPages,
		countOfItems,
		postsPerPage,
		currentItems,
		currentPage
	};
}

export default function getSettings<T>(
	items: Array<T>,
	currentPage: number,
	postsPerPageCount: number = 2
): PaginationProps<T> {
	const result = paginate<T>(items, currentPage, postsPerPageCount);

	return result;
}
