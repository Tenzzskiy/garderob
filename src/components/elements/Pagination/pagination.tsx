import ReactPaginate from 'react-paginate';
import {Props} from './pagination.props';
import {smoothScrollTo} from '@/utilities/helpers';

function Pagination({countOfPages, currentPage, isSimple, onSetCurrentPage}: Props) {
	const handlePaginate = (page: {selected: number}) => {
		onSetCurrentPage(page.selected + 1);
		smoothScrollTo('categoryList');
	};

	return (
		<>
			{countOfPages > 1 && (
				<ReactPaginate
					previousLabel={<span className='icon-chevron-left'></span>}
					nextLabel={<span className='icon-chevron-right'></span>}
					breakLabel={'...'}
					forcePage={Number(currentPage) - 1}
					containerClassName={'pagination'}
					pageClassName={'pagination__item'}
					pageLinkClassName={'pagination__link pagination__link-a'}
					previousLinkClassName={'pagination__link'}
					nextLinkClassName={'pagination__link'}
					disabledClassName={'pagination__link--disabled'}
					activeClassName={'pagination__link--active'}
					breakClassName={'pagination__break'}
					pageCount={countOfPages}
					marginPagesDisplayed={1}
					pageRangeDisplayed={5}
					onPageChange={handlePaginate}
				/>
			)}
		</>
	);
}

export default Pagination;
