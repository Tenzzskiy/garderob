import {useMemo} from 'react';
import {initStore} from './store';

let store: any;

export const initializeStore = (preloadedState: any) => {
	let _store = store ?? initStore(preloadedState);

	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState
		});

		store = undefined;
	}

	if (typeof window === 'undefined') return _store;

	if (!store) store = _store;

	return _store;
};

export function useStore(initialState: any) {
	const store = useMemo(() => initializeStore(initialState), [initialState]);

	return store;
}
