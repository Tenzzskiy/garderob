import {NewsItemPage, QuestionsSection} from '@/components';
import {INewsCard} from '@/types';
import {getAllPathsForNews, getNewsBySlug} from '@/utilities/api';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import Head from 'next/head';

type Props = {
	news: INewsCard;
};

const NewsItem: NextPage<Props> = ({news}) => {
	return (
		<>
			<Head>
				<title itemProp='headline'>{news.title}</title>
				<meta itemProp='description' name='description' content={news.desc} />
				<meta property='og:title' content={news.title} />
				<meta property='og:description' content={news.desc} />
				<meta property='og:url' content={`https://vyezdnoy-garderob77.ru/novosti/${news.slug}`} />
				<link rel='canonical' href={`https://vyezdnoy-garderob77.ru/novosti/${news.slug}`} />
				<link
					rel='alternate'
					type='application/rss+xml'
					title={`${news.title}`}
					href='https://vyezdnoy-garderob77.ru/rss'
				/>
			</Head>
			<NewsItemPage news={news} />
			<QuestionsSection />
		</>
	);
};

export const getStaticProps: GetStaticProps = ({params}) => {
	const news = getNewsBySlug(params?.slug);

	if (!news) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			news
		}
	};
};

export const getStaticPaths: GetStaticPaths = () => {
	const pathsForNews = getAllPathsForNews();

	return {
		paths: pathsForNews,
		fallback: 'blocking'
	};
};

export default NewsItem;
