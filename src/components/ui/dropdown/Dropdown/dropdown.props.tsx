export type Props = {
	classname: string;
	children?: JSX.Element | JSX.Element[];
	items: string[];
	value: string | number;
	isBig?: boolean;
	onChangeSort: (sort: string | number) => void;
	small?: boolean;
};
