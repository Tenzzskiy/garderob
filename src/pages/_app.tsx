import type {AppProps} from 'next/app';
import {Layout} from '@/components';
import {Provider} from 'react-redux';
import {useStore} from '@/redux';
import '@/assets/style.scss';

function MyApp({Component, pageProps}: AppProps) {
	const store = useStore(pageProps.initialReduxState);

	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
