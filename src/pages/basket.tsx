import type {NextPage} from 'next';
import {BasketSection, QuestionsSection} from '@/components';
import Head from 'next/head';

const Basket: NextPage = () => {
	return (
		<>
			<Head>
				<title itemProp='headline'>Корзина товаров и услуг — vyezdnoy-garderob77.ru</title>
				<meta
					itemProp='description'
					name='description'
					content='Здесь лежат товары и услуги, которые вы добавили в корзину для оформления заказа.'
				/>
				<meta property='og:title' content='Корзина товаров и услуг — vyezdnoy-garderob77.ru' />
				<meta
					property='og:description'
					content='Здесь лежат товары и услуги, которые вы добавили в корзину для оформления заказа.'
				/>
				<meta property='og:url' content='https://vyezdnoy-garderob77.ru/basket' />
				<link rel='canonical' href='https://vyezdnoy-garderob77.ru/basket' />
			</Head>
			<BasketSection />
			<QuestionsSection />
		</>
	);
};

export default Basket;
