import styles from './newsMain.module.scss';
import classNames from 'classnames';
import {Props} from './newsMain.props';
import Link from 'next/link';

const NewsMain = ({news}: Props): JSX.Element => {
	return (
		<div className={styles.news}>
			<p className={styles.newsTitle}>{news.name}</p>
			<p className={styles.newsDate}>
				<span className={styles.newsDateName}>Дата публикации</span>
				<span className={styles.newsDateText}>{news.date}</span>
			</p>
			<div className={styles.newsBlock}>
				<figure className={styles.newsFigure}>
					<img className={styles.newsImage} src={news.image} alt={news.title} />
				</figure>
				<div className={styles.newsText} dangerouslySetInnerHTML={{__html: news.text}}></div>
			</div>
			<div className={styles.newsButtons}>
				<Link href={`/novosti/${news.prev}`} passHref>
					<a className={classNames(styles.newsButton, styles.newsButtonPrimary)}>Назад</a>
				</Link>
				<Link href={`/novosti/${news.next}`} passHref>
					<a className={classNames(styles.newsButton, styles.newsButtonSecondary)}>Далее</a>
				</Link>
			</div>
		</div>
	);
};

export default NewsMain;
