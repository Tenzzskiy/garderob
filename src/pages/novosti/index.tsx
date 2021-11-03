import type {GetStaticProps, NextPage} from 'next';
import {NewsPage, QuestionsSection} from '@/components';
import {getAllNews} from '@/utilities/api';
import {INewsCard} from '@/types';
import Head from 'next/head';

type Props = {
	news: INewsCard[];
};

const News: NextPage<Props> = ({news}) => {
	return (
		<>
			<Head>
				<title itemProp='headline'></title>
				<meta itemProp='description' name='description' content='' />
				<meta property='og:title' content='' />
				<meta property='og:description' content='' />
				<meta property='og:url' content='' />
				<link rel='canonical' href='' />
			</Head>
			<NewsPage news={news} />
			<QuestionsSection />
		</>
	);
};

export const getStaticProps: GetStaticProps = () => {
	const news = getAllNews();

	return {
		props: {
			news
		}
	};
};

export default News;
