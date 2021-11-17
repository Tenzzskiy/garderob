import styles from './accordionExpanded.module.scss';
import {useState, useEffect} from 'react';
import classNames from 'classnames';

type Props = {
	children: string;
};

const AccordionExpanded = ({children}: Props): JSX.Element => {
	const [showed, setShowed] = useState<boolean>(false);

	useEffect(() => {
		setShowed(true);
	}, []);

	return (
		<div
			className={classNames(styles.expanded, showed && styles.expandedOpened)}
			dangerouslySetInnerHTML={{__html: children}}
		></div>
	);
};

export default AccordionExpanded;
