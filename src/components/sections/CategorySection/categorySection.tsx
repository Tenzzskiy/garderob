import styles from './categorySection.module.scss';
import classNames from 'classnames';
import {CategoryList} from '@/components';

const CategorySection = (): JSX.Element => {
	return (
		<section className='section'>
			<div className={classNames('container')}>
				<p className={classNames('sectionTitle', styles.catalogTitle)}>А может быть вам нужно что-то еще?</p>
				<div className={styles.catalogList}>
					<CategoryList />
				</div>
			</div>
		</section>
	);
};

export default CategorySection;
