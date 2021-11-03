export type Props = {
	countOfPages: number;
	currentPage: number;
	onSetCurrentPage(value: number): void;
	onShowMore(): void;
};
