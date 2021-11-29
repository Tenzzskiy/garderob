import {Dispatch, SetStateAction} from 'react';

export type Props = {
	onChangeOpened: Dispatch<SetStateAction<boolean>>;
	title?: string;
	button?: string;
	cards?: any[];
	garderobs?: any[];
};
