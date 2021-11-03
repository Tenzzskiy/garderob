import {NextPage} from 'next';
import {PolicyPage, QuestionsSection} from '@/components';
import Head from 'next/head';

const Policy: NextPage = () => {
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
			<PolicyPage />
			<QuestionsSection />
		</>
	);
};

export default Policy;
