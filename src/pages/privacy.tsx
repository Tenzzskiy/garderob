import {NextPage} from 'next';
import {PolicyPage, QuestionsSection} from '@/components';
import Head from 'next/head';

const Policy: NextPage = () => {
	return (
		<>
			<Head>
				<title itemProp='headline'>Политика персональных данных - vyezdnoy-garderob77.ru</title>
				<meta property='og:title' content='Политика персональных данных - vyezdnoy-garderob77.ru' />
				<meta
					itemProp='description'
					name='description'
					content='Здесь вы можете прочитать нашу политику конфиденциональности'
				/>
				<meta
					property='og:description'
					content='Здесь вы можете прочитать нашу политику конфиденциональности'
				/>
				<meta property='og:url' content='https://vyezdnoy-garderob77.ru/privacy' />
				<link rel='canonical' href='https://vyezdnoy-garderob77.ru/privacy' />
				<meta name='robots' content='noindex,nofollow' />
			</Head>
			<PolicyPage />
			<QuestionsSection />
		</>
	);
};

export default Policy;
