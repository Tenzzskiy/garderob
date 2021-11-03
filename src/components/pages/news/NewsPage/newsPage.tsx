import styles from './newsPage.module.scss';
import classNames from 'classnames';
import {NewsCard} from '@/components';
import {Props} from './newsPage.props';

const NewsPage = ({news}: Props) => {
	return (
		<section className={styles.section}>
			<div className='container'>
				<p className={classNames('sectionTitle', styles.title)}>Прошедшие мероприятия</p>
				<div className={styles.list}>
					{news.map(card => {
						return <NewsCard key={card.id} card={card} isFull={true} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default NewsPage;
