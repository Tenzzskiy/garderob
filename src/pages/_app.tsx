import type {AppProps} from 'next/app';
import {Layout} from '@/components';
import {Provider} from 'react-redux';
import {useStore} from '@/redux';
import '@/assets/style.scss';
import {useEffect} from 'react';
import {initializeFavoriteStore} from '@/redux/actions/favoriteActions';
import {initializeGarderobStore} from '@/redux/actions/garderobActions';
import {initializeShop} from '@/redux/actions/shopActions';
import LazyLoad, {ILazyLoadInstance} from 'vanilla-lazyload';

let lazyLoadInstance: null | ILazyLoadInstance = null;

declare global {
	interface Window {
		lazyInstance: undefined | ILazyLoadInstance;
	}
}

function MyApp({Component, pageProps}: AppProps) {
	const store = useStore(pageProps.initialReduxState);

	useEffect(() => {
		store.dispatch(initializeFavoriteStore());
		store.dispatch(initializeGarderobStore());
		store.dispatch(initializeShop());

		window.addEventListener('beforeunload', function (e) {
			localStorage.setItem('garderobStore', JSON.stringify(store.getState()));
		});
	}, []);

	useEffect(() => {
		if (!lazyLoadInstance) {
			lazyLoadInstance = new LazyLoad({
				elements_selector: '.lazyload'
			});
			window.lazyInstance = lazyLoadInstance;
		} else {
			lazyLoadInstance.update();
		}
	});

	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
