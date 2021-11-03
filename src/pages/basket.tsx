import type {NextPage} from 'next';
import {BasketSection, QuestionsSection} from '@/components';
import Head from 'next/head';

const Basket: NextPage = () => {
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
			<BasketSection />
			<QuestionsSection />
		</>
	);
};

export default Basket;
