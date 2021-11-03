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

const renderMessage = items => {
	let result = '';

	if (!items.length) {
		return '<p>Корзина пуста</p>';
	}

	result = `<table  style="width:100%; border-collapse: collapse;">
				<tr style='padding-top: 20px; padding-bottom: 20px; text-align: left; background-color: #f0f2f0;'>
					<th>Имя</th>
					<th>Изначальная цена</th>
					<th>Размер</th>
					<th>Дополнительно</th>
					<th>Итого</th>
				</tr>
			`;

	for (let i = 0; i < items.length; i++) {
		result += `
			<tr style='padding-top: 5px; padding-bottom: 5px; text-align: left;'>
				<td>${items[i].title}</td>
				<td>${getSimplePriceOfProduct(items[i])} руб.</td>
				<td>${items[i].productSizes[items[i].currentSize].size}</td>
				<td>${getAllDops(items[i])}</td>
				<td>${getCurrentPriceOfProduct(items[i])} руб.</td>
			</tr>`;
	}

	result += '</table>';

	return result;
};

export default function (req, res) {
	const {phone, select, items} = req.body;

	if (!phone || !select) {
		return res.status(200).json({success: false});
	}

	const email = '19rustamov1996@gmail.com';
	const password = '19rustamov9628';

	if (!email || !password) {
		return res.status(200).json({success: false});
	}

	let nodemailer = require('nodemailer');

	try {
		const transporter = nodemailer.createTransport({
			port: 465,
			host: 'smtp.gmail.com', //smtp.yandex.ru
			auth: {
				user: email,
				pass: password
			},
			secure: true
		});

		let orderMessage = `<div style='font-weight: bold;  margin-bottom: 14px;'><p style='padding-bottom: 10px;'>Заказ. Номер: +7 ${phone}</p></div>`;

		// if (items.length) {
		// 	orderMessage =
		// 		orderMessage +
		// 		`<div style='padding-top: 10px; padding-bottom: 10px; font-weight: bold; margin-botom: 20px; '>Фотозоны и оборудование</div>` +
		// 		renderMessage(items);
		// }

		const mailData = {
			from: '"Фотозона 77" <info@fotozona77.ru>',
			to: email,
			subject: 'Заявка с сайта',
			text: 'Заявка с сайта Фотозона 77',
			html: orderMessage
		};

		transporter.sendMail(mailData, function (err, info) {
			if (err) {
				console.log('sdsd');
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
