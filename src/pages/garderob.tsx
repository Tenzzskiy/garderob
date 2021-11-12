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
				<title itemProp='headline'>Выездной гардероб</title>
				<meta itemProp='description' name='description' content='Выездной гардероб' />
				<meta property='og:title' content='Выездной гардероб' />
				<meta property='og:description' content='Выездной гардероб' />
				<meta property='og:url' content='https://vyezdnoy-garderob77.ru/garderob' />
				<link rel='canonical' href='https://vyezdnoy-garderob77.ru/garderob' />
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
