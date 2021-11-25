import {GetServerSideProps, NextPage} from 'next';
import {findBySearch} from '@/utilities/api';
import {CategoryCardType} from '@/types';
import {QuestionsSection, SearchPage} from '@/components';
import Head from 'next/head';

interface Props {
	items: CategoryCardType[];
}

const Search: NextPage<Props> = ({items}) => {
	return (
		<>
			<Head>
				<title itemProp='headline'>Поиск по запросу на сайте - vyezdnoy-garderob77.ru</title>
				<meta property='og:title' content='Поиск по запросу на сайте - vyezdnoy-garderob77.ru' />
				<meta
					itemProp='description'
					name='description'
					content='Здесь вы можете найти все, что вы ищете на нашем сайте'
				/>
				<meta property='og:description' content='Здесь вы можете найти все, что вы ищете на нашем сайте' />
				<meta property='og:url' content='https://vyezdnoy-garderob77.ru/search' />
				<link rel='canonical' href='https://vyezdnoy-garderob77.ru/search' />
				<meta name='robots' content='noindex,nofollow' />
			</Head>
			<SearchPage items={items} />
			<QuestionsSection />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async context => {
	const {find} = context.query;

	if (!find) {
		return {
			notFound: true
		};
	}

	const result = await findBySearch(find);

	return {
		props: {
			items: result
		}
	};
};

export default Search;
