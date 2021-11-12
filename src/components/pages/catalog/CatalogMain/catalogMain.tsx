import styles from './catalogMain.module.scss';
import {CatalogList, CatalogPagination, CatalogFilter} from '@/components';
import {Props} from './catalogMain.props';
import usePagination from '@/hooks/usePagination';
import {CategoryCardType} from '@/types';
import useAppSelector from '@/hooks/useAppSelector';
import {selectItems} from '@/redux/selectors';

const CatalogMain = ({category}: Props): JSX.Element => {
	const count = useAppSelector(selectItems);

	const {
		currentPage,
		countOfPages,
		currentItems,
		currentSort,
		currentPrice,
		handleChangePrice,
		handleChangePage,
		handleShowMore,
		handleSetSort
	} = usePagination<CategoryCardType>(category.items, 9);

	return (
		<div className={styles.main}>
			<CatalogFilter
				sort={currentSort}
				onChangeSort={handleSetSort}
				price={currentPrice}
				onChangePrice={handleChangePrice}
			/>
			<CatalogList items={currentItems} />
			<CatalogPagination
				countOfPages={countOfPages}
				currentPage={currentPage}
				onSetCurrentPage={handleChangePage}
				onShowMore={handleShowMore}
			/>
		</div>
	);
};

export default CatalogMain;
