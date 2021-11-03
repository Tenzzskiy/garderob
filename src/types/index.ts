export interface IWardrobeCard {
	id: number;
	name: string;
	price: string;
	image: string;
	desktopImage: string;
	description: string;
	color: string;
	status: number;
	icon: string;
}

export interface INewsCard {
	id: number;
	exceprt: string;
	title: string;
	text: string;
	date: string;
	image: string;
	slug: string;
	next: string;
	prev: string;
}

export type PathsType = {
	params: {
		slug: string;
	};
};

export type ParamsType = string | string[] | undefined;

export type PriceType = {
	from: number | string | undefined;
	to: number | string | undefined;
};

export type DescriptionType = {
	title: string;
	text: string;
	image: string;
	firstAdvantage: string;
	secondAdvantage: string;
};

export type HeroType = {
	title: string;
	subtitle: string;
	mobileImage: string;
	desktopImage: string;
};

export type AdvantageType = {
	rectangleColor: string;
	maskColor: string;
};

export type WorkingType = {
	stepTitle: string;
	stepText: string;
};

export interface CategoryCardType {
	id: number;
	title: string;
	image: string;
	price: number;
	time: string;
	priceDescription: string;
	count: number;
	countTime: number;
	isAdded: boolean;
	info: {
		count: string;
		time: string;
		countDesktop: string;
		timeDesktop: string;
		minTime: number;
		priceForTime: number;
	};
}

export interface CategoryCardExtendedType extends CategoryCardType {
	isAdded: boolean;
	count: number;
}

export interface SeoType {
	id: number;
	title: string;
	text: string;
	image: string;
}

export type CategoryPageType = {
	id: number;
	slug: string;
	name: string;
	workingSectionColor: string;
	description: DescriptionType;
	hero: HeroType;
	working: WorkingType;
	advantage: AdvantageType;
	items: CategoryCardType[];
	seo: SeoType[];
};

export type CategoriesType = {
	id: number;
	slug: string;
	name: string;
	count: number;
};

export type GarderobItemType = {
	id: number;
	index: number;
	images: string[];
	title: string;
	name: string;
	color: string;
	icon: string;
	description: string;
	price: number;
	time: string;
	isAdded: boolean;
	count: number;
	countTime: number;
	priceDescription: string;
	addedDops: any[];
	info: {
		count: string;
		time: string;
		countDesktop: string;
		timeDesktop: string;
		minTime: number;
		priceForTime: number;
	};
};
