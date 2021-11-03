export type Props = {
	countOfPages: number;
	currentPage: number;
	isSimple: boolean;
	onSetCurrentPage(value: number): void;
};
