type Props = {
	children: JSX.Element | JSX.Element[];
	id: Number | String;
};

const AccordionItem = ({children}: Props): JSX.Element => {
	return <>{children}</>;
};

export default AccordionItem;
