const getAllDops = card => {
	let allDops = '';

	if (card.addedDecorations.length) {
		for (let i = 0; i < card.addedDecorations.length; i++) {
			allDops += card.addedDecorations[i].title + ' ';
		}
	}

	if (card.addedPersonals.length) {
		for (let i = 0; i < card.addedPersonals.length; i++) {
			allDops += card.addedPersonals[i].title + ' ';
		}
	}

	if (card.addedDops.length) {
		for (let i = 0; i < card.addedDops.length; i++) {
			allDops += card.addedDops[i].title + ' ';
		}
	}

	return allDops;
};

function getCurrentPriceOfProduct(card) {
	const price = card.price + (card.countTime - card.info.minTime) * card.info.priceForTime;

	return price * card.count;
}

function getCurrentPriceOfGarderob(garderob) {
	let price = 0;

	if (garderob.countTime > 1) {
		price += garderob.info.priceForTime * garderob.count * (garderob.countTime - 1);
	}

	price += garderob.price * garderob.count;

	for (let i = 0; i < garderob.addedDops.length; i++) {
		price += garderob.addedDops[i].count * garderob.addedDops[i].price;
	}

	return price;
}

const renderCardMessage = items => {
	let result = '';

	if (!items.length) {
		return '<p>Корзина пуста</p>';
	}

	result = `<table  style="width:100%; border-collapse: collapse;">
				<tr style='padding-top: 20px; padding-bottom: 20px; text-align: left; background-color: #f0f2f0;'>
					<th>Имя</th>
					<th>Изначальная цена</th>
					<th>Количество</th>
					<th>Количество дней</th>
					<th>Итого</th>
				</tr>
			`;

	for (let i = 0; i < items.length; i++) {
		result += `
			<tr style='padding-top: 5px; padding-bottom: 5px; text-align: left;'>
				<td>${items[i].title}</td>
				<td>${items[i].price} руб.</td>
				<td>${items[i].count} </td>
				<td>${items[i].time} </td>
				<td>${getCurrentPriceOfProduct(items[i])} руб.</td>
			</tr>`;
	}

	result += '</table>';

	return result;
};

const renderGarderobMessage = items => {
	let result = '';

	if (!items.length) {
		return '<p>Корзина пуста</p>';
	}

	result = `<table  style="width:100%; border-collapse: collapse;">
				<tr style='padding-top: 20px; padding-bottom: 20px; text-align: left; background-color: #f0f2f0;'>
					<th>Имя</th>
					<th>Изначальная цена</th>
					<th>Количество</th>
					<th>Количество дней</th>
					<th>Монтаж</th>
					<th>Дополнительные товары</th>
					<th>Итого</th>
				</tr>
			`;

	for (let i = 0; i < items.length; i++) {
		result += `
			<tr style='padding-top: 5px; padding-bottom: 5px; text-align: left;'>
				<td>${items[i].title}</td>
				<td>${items[i].price} руб.</td>
				<td>${items[i].count} </td>
				<td>1 </td>
				<td>${items[i].montage ? 'Включен' : ' Без монтажа'} </td>
				<td>${items[i].addedDops.length ? 'Присутствуют' : 'Отсутствуют'} </td>
				<td>${getCurrentPriceOfGarderob(items[i])} руб.</td>
			</tr>`;
	}

	result += '</table>';

	return result;
};

export default function (req, res) {
	const {phone, select, cards, garderobs} = req.body;

	if (!phone || !select) {
		return res.status(200).json({success: false});
	}

	const email = 'info@vyezdnoy-garderob77.ru';
	const password = 'KP6-WfX-9u7';

	//(garderobs);

	if (!email || !password) {
		return res.status(200).json({success: false});
	}

	let nodemailer = require('nodemailer');

	try {
		const transporter = nodemailer.createTransport({
			port: 465,
			host: 'smtp.yandex.ru',
			auth: {
				user: email,
				pass: password
			},
			secure: true
		});

		let orderMessage = `<div style='font-weight: bold;  margin-bottom: 14px;'><p style='padding-bottom: 10px;'>Заказ. Номер: +7 ${phone}</p></div>`;

		if (cards.length) {
			orderMessage =
				orderMessage +
				`<div style='padding-top: 10px; padding-bottom: 10px; font-weight: bold; margin-botom: 20px; '>Оборудование</div> ` +
				renderCardMessage(cards);
		}

		if (garderobs.length) {
			orderMessage =
				orderMessage +
				`<div style='padding-top: 10px; padding-bottom: 10px; font-weight: bold; margin-botom: 20px; '>Гардеробы</div>` +
				renderGarderobMessage(garderobs);
		}

		const mailData = {
			from: '"Vyezdnoy-garderob" <info@vyezdnoy-garderob77.ru>',
			to: email,
			subject: 'Заявка с сайта',
			text: 'Заявка с сайта vyezdnoy-garderob',
			html: orderMessage
		};

		transporter.sendMail(mailData, function (err, info) {
			if (err) {
				('sdsd');
				return res.status(200).json({success: false});
			} else {
				return res.status(200).json({success: true});
			}
		});
	} catch {
		return res.status(200).json({success: false});
	}

	return res.status(200).json({success: true});
}
