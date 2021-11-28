import {KeyboardEvent} from 'react';

export const filterChildrenByType = (
	children: JSX.Element | JSX.Element[] | undefined,
	typeName: string
): Array<JSX.Element> => {
	if (!children) {
		return [];
	} else if (Array.isArray(children)) {
		return children.filter(child => child.type?.name === typeName);
	} else if (children.type?.name === typeName) {
		return [children];
	}

	return [];
};

export const isKeydownNumber = (event: KeyboardEvent<HTMLElement>): boolean => {
	if (
		!(
			(!event.shiftKey && !(event.keyCode < 48 || event.keyCode > 57)) ||
			!(event.keyCode < 96 || event.keyCode > 105) ||
			event.keyCode === 46 ||
			event.keyCode === 8 ||
			event.keyCode == 9 ||
			event.keyCode === 37 ||
			event.keyCode === 39 ||
			(event.keyCode === 65 && (event.ctrlKey === true || event.metaKey === true))
		)
	) {
		return false;
	}

	return true;
};

export const getMaskForNumber = (number: string): string => {
	let x: any = number.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

	return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '');
};

export const smoothScrollTo = (id: string) => {
	const node = document.getElementById(id);

	if (node) {
		node.scrollIntoView({behavior: 'smooth'});
	}
};

export const scrollTo = (selector: string, yOffset: number = 0) => {
	const el = document.querySelector('#' + selector);

	if (el) {
		window.scrollTo({top: el.getBoundingClientRect().top + window.pageYOffset + yOffset, behavior: 'smooth'});
	}
};

export const convertToNumberWithSpaces = (x: number) => {
	if (isNaN(x) || x === null || x === undefined) {
		return '0';
	}

	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const getFavoritesFromLocaleStorage = () => {
	let favorites = [];

	if (typeof window !== 'undefined') {
		if (localStorage.getItem('garderobStore')) {
			const store = JSON.parse(String(localStorage.getItem('garderobStore')));

			if (store.favoriteState.items && store.favoriteState.items.length) {
				favorites = store.favoriteState.items;
			}
		}
	}

	return favorites;
};

export const getGarderobFromLocaleStorage = () => {
	let favorites = [];

	if (typeof window !== 'undefined') {
		if (localStorage.getItem('garderobStore')) {
			const store = JSON.parse(String(localStorage.getItem('garderobStore')));

			if (store.garderobState.items && store.garderobState.items.length) {
				favorites = store.garderobState.items;
			}
		}
	}

	return favorites;
};

export const getItemsFromLocaleStorage = () => {
	let favorites = [];

	if (typeof window !== 'undefined') {
		if (localStorage.getItem('garderobStore')) {
			const store = JSON.parse(String(localStorage.getItem('garderobStore')));

			if (store.shopState.items && store.shopState.items.length) {
				favorites = store.shopState.items;
			}
		}
	}

	return favorites;
};

export const loadScript = (src: string) => {
	const scriptElement = document.createElement('script');
	scriptElement.type = 'text/javascript';
	scriptElement.src = src;
	scriptElement.async = false;
	scriptElement.setAttribute('defer', '');
	document.body.appendChild(scriptElement);
};

