import styles from './accordion.module.scss';
import {useState, useEffect} from 'react';
import questions from '@/fixtures/questions.json';
import classNames from 'classnames';

interface ItemProps {
	className?: string;
	item: {
		id: string;
		question: string;
		answer: string;
	};
	index: number;
	active: boolean;
	handleOpenAccordionItem: (num: number) => void;
}

const AccordionExpanded = ({value}: {value: string}): JSX.Element => {
	const [showed, setShowed] = useState<boolean>(false);

	useEffect(() => {
		setShowed(true);
	}, []);

	return (
		<div
			className={classNames(styles.expanded, showed && styles.expandedOpened)}
			dangerouslySetInnerHTML={{__html: value}}
		></div>
	);
};

const AccordionItem = ({className, item, index, active, handleOpenAccordionItem}: ItemProps) => {
	return (
		<div className={styles.accordionItem}>
			<div
				className={classNames(styles.accordionCollapsed, styles.collapsed, active && styles.collapsedOpened)}
				onClick={() => handleOpenAccordionItem(index)}
			>
				<p className={styles.heading}>{item.question}</p>
				<span className={classNames(styles.icon, 'icon-plus', active && styles.iconOpened)}></span>
			</div>
			{active ? <AccordionExpanded value={item.answer} /> : null}
		</div>
	);
};

const Accordion = ({className}: {className?: string}) => {
	const [values, setValues] = useState<any>({});

	const handleOpenAccordionItem = (name: number) => {
		if (!values[name]) {
			setValues({[name]: true});
		} else {
			setValues({[name]: false});
		}
	};

	return (
		<div className={className}>
			{questions.map((item, index) => (
				<AccordionItem
					key={item.id}
					item={item}
					index={index}
					active={values[index] === true}
					handleOpenAccordionItem={handleOpenAccordionItem}
				/>
			))}
		</div>
	);
};

export default Accordion;
