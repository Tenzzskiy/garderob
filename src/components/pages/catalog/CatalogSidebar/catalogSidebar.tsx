import styles from './catalogSidebar.module.scss';
import classNames from 'classnames';
import {Props} from './catalogSidebar.props';
import Link from 'next/link';

const CatalogSidebar = ({categories, slug}: Props): JSX.Element => {
	return (
		<div className={styles.sidebar}>
			<ul className={styles.list}>
				{categories.map(categoryItem => {
					return (
						<li className={styles.item} key={categoryItem.id}>
							<Link href={`/catalog/${categoryItem.slug}`} passHref>
								<a className={styles.link}>
									<span
										className={classNames(
											styles.name,
											categoryItem.slug === slug && styles.nameActive
										)}
									>
										{categoryItem.name}
									</span>
									<span className={styles.count}>{categoryItem.count}</span>
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CatalogSidebar;
