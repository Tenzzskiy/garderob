import React, {useState} from 'react';
import styles from './accordion.module.scss';
import AccordionItem from '../AccordionItem';
import AccordionCollapsed from '../AccordionCollapsed';
import AccordionExpanded from '../AccordionExpanded';

type Props = {
	children: JSX.Element | JSX.Element[];
	defaultValue?: string | number | null;
};

const Accordion = ({children, defaultValue}: Props): JSX.Element => {
	const [opened, setOpened] = useState(defaultValue);

	let allAccordionItems: JSX.Element[] = [];

	const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
		const id = (e.currentTarget as HTMLElement).getAttribute('data-id');

		id === opened ? setOpened('') : setOpened(id);
	};

	if (Array.isArray(children)) {
		allAccordionItems = children.filter(child => child.type?.name === 'AccordionItem');
	} else if (children.type?.name === 'AccordionItem') {
		allAccordionItems.push(children);
	}

	return (
		<div>
			{React.Children.map(allAccordionItems, (child, i) => {
				const id = child.props.id;

				if (!id) {
					throw Error('Each AccordionItem should have an unique id attribute');
				}

				if (child.props.children.length !== 2) {
					throw Error('Each AccordionItem should have only one AccordionExpanded and one AccordionCollapsed');
				}

				const collapsed = React.cloneElement(child.props.children[0], {
					onHandleOpen: handleOpen,
					id,
					isOpened: id === opened,
					className: styles.accordionCollapsed
				}) as JSX.Element;
				const expanded = child.props.children[1];

				if (collapsed.type.name !== 'AccordionCollapsed') {
					throw Error('AccordionCollapsed component should be the first child of Item');
				} else if (expanded.type.name !== 'AccordionExpanded') {
					throw Error('AccordionExpanded component should be the second child of Item');
				}

				return (
					<div className={styles.accordionItem}>
						{collapsed}
						{id === opened && expanded}
					</div>
				);
			})}
		</div>
	);
};

Accordion.Item = AccordionItem;
Accordion.Collapsed = AccordionCollapsed;
Accordion.Expanded = AccordionExpanded;

export default Accordion;
