import React from 'react';
import Document, {DocumentInitialProps, Html, Head, Main, NextScript, DocumentContext} from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='ru'>
				<Head itemScope itemType='http://schema.org/WPHeader'>
					<meta charSet='utf-8' />
					<meta httpEquiv='X-UA-Compatible' content='IE-edge' />
					<meta property='og:type' content='website' />
					<meta property='og:image' content='/images/contacts-mobile.jpg' />
					<meta property='og:site_name' content='Фотозона 77' />
					<meta property='og:locale' content='ru_RU' />
					<link rel='icon' href='/images/logo.svg' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
