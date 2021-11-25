import {getAllNews} from '@/utilities/api';
import {SitemapStream, streamToPromise, EnumChangefreq} from 'sitemap';
import {createGzip} from 'zlib';

export default async (req, res) => {
	try {
		res.setHeader('content-type', 'application/xml');
		res.setHeader('Content-Encoding', 'gzip');

		const smStream = new SitemapStream({
			hostname: 'https://vyezdnoy-garderob77.ru',
			xmlns: {
				news: false,
				xhtml: false,
				image: false,
				video: false
			}
		});

		const date = '2021-10-10';

		const allNews = await getAllNews();

		const pipeline = smStream.pipe(createGzip());

		smStream.write({
			url: '/',
			lastmod: date,
			changefreq: EnumChangefreq.WEEKLY,
			priority: 1.0
		});

		smStream.write({
			url: '/garderob',
			lastmod: date,
			changefreq: EnumChangefreq.WEEKLY,
			priority: 0.9
		});

		smStream.write({
			url: '/catalog/arenda-mebeli',
			lastmod: date,
			changefreq: EnumChangefreq.WEEKLY,
			priority: 0.9
		});

		smStream.write({
			url: '/catalog/personal-na-meropriyatie',
			lastmod: date,
			changefreq: EnumChangefreq.WEEKLY,
			priority: 0.9
		});

		smStream.write({
			url: '/catalog/dezinfeksiya',
			lastmod: date,
			changefreq: EnumChangefreq.WEEKLY,
			priority: 0.9
		});

		smStream.write({
			url: '/catalog/kamery-hraneniya-v-arendu',
			lastmod: date,
			changefreq: EnumChangefreq.WEEKLY,
			priority: 0.9
		});

		smStream.write({
			url: '/catalog/oborudovanie-dlya-grimernoy',
			lastmod: date,
			changefreq: EnumChangefreq.WEEKLY,
			priority: 0.9
		});

		smStream.write({
			url: '/novosti',
			lastmod: date,
			changefreq: EnumChangefreq.WEEKLY,
			priority: 0.8
		});

		for (let news of allNews) {
			smStream.write({
				url: `/novosti/${news.slug}`,
				changefreq: EnumChangefreq.WEEKLY,
				priority: 0.8,
				lastmod: date
			});
		}

		smStream.end();

		streamToPromise(pipeline);

		pipeline.pipe(res).on('error', e => {
			throw e;
		});
	} catch (e) {
		res.status(500).end();
	}
};
