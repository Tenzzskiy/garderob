import type {NextPage} from 'next';
import {GetStaticProps} from 'next';
import {
	QuestionsSection,
	WardrobeSection,
	AdvantagesSection,
	HeroSection,
	CategorySection,
	DescriptionSection,
	NewsSection,
	SeoSection,
	WorkingSection
} from '@/components';
import {getHeroInfo, getAllNews} from '@/utilities/api';
import {CategoryPageType, INewsCard} from '@/types';
import Head from 'next/head';

type Props = {
	info: CategoryPageType;
	news: INewsCard[];
};

const Home: NextPage<Props> = ({info, news}) => {
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
			<HeroSection hero={info.hero} />
			<DescriptionSection description={info.description} />
			<WorkingSection color={info.workingSectionColor} working={info.working} />
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
