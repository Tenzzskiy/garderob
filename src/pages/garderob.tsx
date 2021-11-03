import type {NextPage} from 'next';
import {GarderobPage, QuestionsSection} from '@/components';
import {GetStaticProps} from 'next';
import {getAllGarderobs} from '@/utilities/api';
import {GarderobItemType} from '@/types';
import Head from 'next/head';

interface Props {
	garderobs: GarderobItemType[];
}

const Garderob: NextPage<Props> = ({garderobs}) => {
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
			<GarderobPage garderobs={garderobs} />
			<QuestionsSection />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const allGarderobs = getAllGarderobs();

	return {
		props: {
			garderobs: allGarderobs
		}
	};
};

export default Garderob;
