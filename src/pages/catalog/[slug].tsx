import type {NextPage} from 'next';
import {
	AdvantagesSection,
	WorkingSection,
	DescriptionSection,
	QuestionsSection,
	HeroSection,
	CatalogSection,
	SeoSection
} from '@/components';
import {GetStaticProps, GetStaticPaths} from 'next';
import {getPathsForCategories, getCategoryBySlug, getAllCategories} from '@/utilities/api';
import {CategoryPageType, CategoriesType} from '@/types';
import Head from 'next/head';

type Props = {
	category: CategoryPageType;
	categories: Array<CategoriesType>;
};

const Catalog: NextPage<Props> = ({category, categories}) => {
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
			<HeroSection hero={category.hero} />
			<DescriptionSection description={category.description} />
			<WorkingSection color={category.workingSectionColor} working={category.working} />
			<AdvantagesSection color={category.workingSectionColor} advantage={category.advantage} />
			<CatalogSection category={category} categories={categories} />
			<QuestionsSection />
			<SeoSection seo={category.seo} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({params}) => {
	const category = getCategoryBySlug(params?.slug);
	const categories = getAllCategories();

	if (!category) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			category,
			categories
		}
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getPathsForCategories();

	return {
		paths,
		fallback: 'blocking'
	};
};

export default Catalog;
