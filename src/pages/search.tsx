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
				<title itemProp='headline'></title>
				<meta itemProp='description' name='description' content='' />
				<meta property='og:title' content='' />
				<meta property='og:description' content='' />
				<meta property='og:url' content='' />
				<link rel='canonical' href='' />
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
