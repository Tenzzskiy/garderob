import {getAllNews} from '@/utilities/api';

const getDate = st => {
	let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
	let dt = new Date(st.replace(pattern, '$3-$2-$1'));

	return dt.toUTCString();
};

const blogPostsRssXml = news => {
	let rssItemsXml = '';

	news.forEach(post => {
		rssItemsXml += `
      <item turbo="true">
        <title>${post.title}</title>
        <link>https://vyezdnoy-garderob77.ru/novosti/${post.slug}</link>   
        <pubDate>${getDate(post.date)}</pubDate>
        <author>Фотозона 77</author>
        <yandex:related/>
        <turbo:content>
            <![CDATA[
                <header> 
                    <h1>${post.name}</h1> 
                    <figure> 
                        <img src="${post.image}"/> 
                    </figure> 
                </header> 
                ${post.text} 
            ]]>
        </turbo:content>
    </item>`;
	});

	return rssItemsXml;
};

const getRssXml = blogPosts => {
	const rssItemsXml = blogPostsRssXml(blogPosts);

	return `<?xml  version="1.0" encoding="UTF-8" ?>
  <rss xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" xmlns:turbo="http://turbo.yandex.ru" version="2.0">
    <channel>
        <title>Выездной гардероб 77</title>
        <link>https://vyezdnoy-garderob77.ru</link>
        <description>
            Заказать фотозону на праздничное мероприятие, свадьбу или день рождения с доставкой и монтажом. Услуги изготовления, большой выбор оформления и декора по доступной цене.
        </description>
        <language>ru</language>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

function Rss() {
	return null;
}

export const getServerSideProps = async ({res}) => {
	const news = await getAllNews();

	res.setHeader('Content-Type', 'text/xml');
	res.write(getRssXml(news));
	res.end();

	return {
		props: {}
	};
};

export default Rss;
