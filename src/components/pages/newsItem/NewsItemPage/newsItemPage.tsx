import styles from './newsItemPage.module.scss';
import {NewsItemMain, NewsItemNavigation} from '@/components';
import {Props} from './newsItemPage.props';

const NewsItemPage = ({news}: Props): JSX.Element => {
	return (
		<section className={styles.section}>
			<div className='container'>
				<NewsItemNavigation title={news.name} />
				<NewsItemMain news={news} />
			</div>
		</section>
	);
};

export default NewsItemPage;
