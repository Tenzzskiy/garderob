import {NextPage} from 'next';
import {QuestionsSection, FavoritesPage} from '@/components';
import Head from 'next/head';

const Favorites: NextPage = () => {
	return (
		<>
			<Head>
				<title itemProp='headline'>Избранные товары — vyezdnoy-garderob77.ru</title>
				<meta
					itemProp='description'
					name='description'
					content='Здесь лежат товары и услуги, которые вы добавили в избранное.'
				/>
				<meta property='og:title' content='Избранные товары — vyezdnoy-garderob77.ru' />
				<meta
					property='og:description'
					content='Здесь лежат товары и услуги, которые вы добавили в избранное.'
				/>
				<meta property='og:url' content='https://vyezdnoy-garderob77.ru/favorites' />
				<link rel='canonical' href='https://vyezdnoy-garderob77.ru/favorites' />
			</Head>
			<FavoritesPage />
			<QuestionsSection />
		</>
	);
};

export default Favorites;
