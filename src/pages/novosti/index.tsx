import type {GetStaticProps, NextPage} from 'next';
import {NewsPage, QuestionsSection, AdvantagesSection} from '@/components';
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
				<title itemProp='headline'>
					Новости и фотоотчёты с прошедших мероприятий компании vyezdnoy-garderob77
				</title>
				<meta
					property='og:title'
					content='Новости и фотоотчёты с прошедших мероприятий компании vyezdnoy-garderob77'
				/>
				<meta
					itemProp='description'
					name='description'
					content='Наше портфолио с выполненными заказами на праздниках в Москве и Московской облости, новости и информация об акциях и скидках компании.'
				/>
				<meta
					property='og:description'
					content='Наше портфолио с выполненными заказами на праздниках в Москве и Московской облости, новости и информация об акциях и скидках компании.'
				/>
				<meta property='og:url' content='https://vyezdnoy-garderob77.ru/novosti' />
				<link rel='canonical' href='https://vyezdnoy-garderob77.ru/novosti' />
			</Head>
			<NewsPage news={news} />
			<AdvantagesSection
				color='255, 226, 0'
				advantage={{
					rectangleColor: '#FFE200',
					maskColor: '#FB8F00'
				}}
			/>
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
