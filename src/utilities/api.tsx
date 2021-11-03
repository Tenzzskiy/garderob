import {
	PathsType,
	ParamsType,
	CategoryPageType,
	CategoriesType,
	INewsCard,
	CategoryCardType,
	GarderobItemType
} from '@/types';
import categories from '@/fixtures/categories.json';
import news from '@/fixtures/news.json';
import hero from '@/fixtures/hero.json';
import garderobs from '@/fixtures/garderobs.json';

export const getPathsForCategories = (): PathsType[] => {
	if ([categories] && categories.length) {
		return categories.map(category => ({
			params: {
				slug: category.slug
			}
		}));
	}

	return [];
};

export const getCategoryBySlug = (slug: ParamsType): CategoryPageType | undefined => {
	const currentCategory = categories.find(item => item.slug === slug);

	return currentCategory as CategoryPageType;
};

export const getAllCategories = (): Array<CategoriesType> => {
	let allCategories = [];

	for (let category of categories) {
		let {id, slug, name, items} = category;
		let count = items.length;

		allCategories.push({id, slug, name, count});
	}

	return allCategories;
};

export const getHeroInfo = (): CategoryPageType => {
	return hero;
};

export const getAllNews = (): INewsCard[] => {
	return news;
};

export const getAllPathsForNews = () => {
	return news.map(newsItem => {
		return {
			params: {
				slug: newsItem.slug
			}
		};
	});
};

export const getNewsBySlug = (slug: ParamsType): INewsCard | undefined => {
	return news.find(item => item.slug === slug);
};

export const getAllGarderobs = (): any => {
	return garderobs;
};

export const findBySearch = (search: ParamsType): CategoryCardType[] => {
	const items: CategoryCardType[] = [];

	if (!search) {
		return items;
	}

	categories.forEach(categoryItem => {
		let foundItems = categoryItem.items.filter(item =>
			item.title.toLowerCase().includes(search.toString())
		) as CategoryCardType[];

		if (foundItems.length) {
			items.push(...foundItems);
		}
	});

	return items;
};
