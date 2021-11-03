export type Props = {
	slidesPerView: number;
	slidesCount: number;
	currentIndex: number;
	onChangeCurrentIndex(currentIndex: number): void;
};
