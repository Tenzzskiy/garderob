import styles from './catalogPagination.module.scss';
import {Pagination} from '@/components';
import {Props} from './catalogPaginaiton.props';
import classNames from 'classnames';

const CatalogPagination = ({countOfPages, currentPage, onSetCurrentPage, onShowMore}: Props): JSX.Element => {
	return (
		<div className={styles.pagination}>
			<button
				className={classNames(styles.button, currentPage >= countOfPages && styles.buttonHidden)}
				type='button'
				onClick={onShowMore}
			>
				Показать еще
			</button>
			<Pagination
				countOfPages={countOfPages}
				isSimple={true}
				currentPage={currentPage}
				onSetCurrentPage={onSetCurrentPage}
			/>
		</div>
	);
};

export default CatalogPagination;
