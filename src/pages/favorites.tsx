import {NextPage} from 'next';
import {QuestionsSection, FavoritesPage} from '@/components';
import Head from 'next/head';

const Favorites: NextPage = () => {
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
			<FavoritesPage />
			<QuestionsSection />
		</>
	);
};

export default Favorites;
