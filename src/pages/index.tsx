import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import {
	QuestionsSection,
	WardrobeSection,
	AdvantagesSection,
	HeroSection,
	CategorySection,
	DescriptionSection,
	NewsSection,
	SeoSection
} from '@/components';
import { getHeroInfo, getAllNews } from '@/utilities/api';
import { CategoryPageType, INewsCard } from '@/types';
import Head from 'next/head';

type Props = {
	info: CategoryPageType;
	news: INewsCard[];
};

const Home: NextPage<Props> = ({ info, news }) => {
	return (
		<>
			<Head>
				<title itemProp='headline'>Выездной гардероб 🧥 Аренда гардероба на мероприятие в Москве</title>
				<meta
					itemProp='description'
					name='description'
					content='Организация выездного гардероба позволит на любом мероприятии создать необходимое количество мест для комфортного размещения одежды людей.'
				/>
				<meta property='og:title' content='Выездной гардероб 🧥 Аренда гардероба на мероприятие в Москве' />
				<meta
					property='og:description'
					content='Организация выездного гардероба позволит на любом мероприятии создать необходимое количество мест для комфортного размещения одежды людей.'
				/>
				<meta property='og:url' content='https://vyezdnoy-garderob77.ru' />
				<link rel='canonical' href='https://vyezdnoy-garderob77.ru' />
			</Head>
			<HeroSection hero={info.hero} />
			<DescriptionSection description={info.description} />
			<AdvantagesSection color={info.workingSectionColor} advantage={info.advantage} />
			<WardrobeSection />
			<CategorySection />
			<NewsSection news={news} />
			<QuestionsSection />
			<SeoSection seo={info.seo} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const info = getHeroInfo();
	const allNews = getAllNews();

	return {
		props: {
			info,
			news: allNews.slice(0, 4)
		}
	};
};

export default Home;
