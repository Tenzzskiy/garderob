import {CSSProperties} from 'react';
import styles from './workingCard.module.scss';
import {Props} from './workingCard.props';

const WorkingCard = ({title, text, color}: Props): JSX.Element => {
	return (
		<div className={styles.wrapper} style={{'--color': color} as CSSProperties}>
			<div className={styles.hooks}></div>
			<p className={styles.title}>{title}</p>
			<p className={styles.text}>{text}</p>
		</div>
	);
};

export default WorkingCard;
