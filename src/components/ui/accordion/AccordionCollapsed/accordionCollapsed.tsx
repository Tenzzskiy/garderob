import styles from './accordionCollapsed.module.scss';
import classNames from 'classnames';

type Props = {
	children: String | Number | null;
	id?: Number | String;
	onHandleOpen?: (e: React.MouseEvent<HTMLElement>) => void;
	isOpened?: Number | String;
	className?: String;
};

const AccordionCollapsed = ({className, children, id, isOpened, onHandleOpen}: Props): JSX.Element => {
	return (
		<div
			className={classNames(styles.collapsed, className, isOpened && styles.collapsedOpened)}
			data-id={id?.toString()}
			onClick={onHandleOpen}
		>
			<p className={styles.heading}>{children}</p>
			<span
				className={classNames(
					styles.icon,
					'icon-plus',
					isOpened && styles.iconOpened
				)}
			></span>
		</div>
	);
};

export default AccordionCollapsed;
