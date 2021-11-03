import styles from './newsNavigation.module.scss';
import {Props} from './newsNavigation.props';
import Link from 'next/link';

const NewsNavigation = ({title}: Props) => {
	return (
		<div>
			<p className={styles.navigationTitle}>
				<Link href='/novosti'>
					<a className={styles.navigationLink}>Прошедшие мероприятия</a>
				</Link>
				/
				<a className={styles.navigationLink} href='#'>
					{title}
				</a>
			</p>
		</div>
	);
};

export default NewsNavigation;
