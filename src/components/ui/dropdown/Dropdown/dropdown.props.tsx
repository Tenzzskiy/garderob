export type Props = {
	classname: string;
	children?: JSX.Element | JSX.Element[];
	value: string | number;
	isBig?: boolean;
	onChangeSort: (sort: string | number) => void;
};
