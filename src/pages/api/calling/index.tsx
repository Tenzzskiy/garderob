import type {NextApiRequest, NextApiResponse} from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
	const {phone, select} = req.body;

	if (!phone || !select) {
		res.status(200).json({success: false});
	}

	const email = 'info@vyezdnoy-garderob77.ru';
	const password = 'KP6-WfX-9u7';

	// const email = 'info@korporativ-onlayn.ru';
	// const password = 'Ci2-wgm-wKF';

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

		const mailData = {
			// from: '"Korporativ Online" <info@korporativ-onlayn.ru>',
			// to: email,
			// subject: 'Заявка с сайта',
			// text: 'Заявка с сайта Korporativ Online',
			// html: `<div style="padding-top: 10px; padding-bottom: 10px">на номер ${phone}`
			from: '"Vyezdnoy-garderob" <info@vyezdnoy-garderob77.ru>',
			to: email,
			subject: 'Заявка с сайта',
			text: 'Заявка с сайта vyezdnoy-garderob',
			html: `<div style="padding-top: 10px; padding-bottom: 10px">${select} на номер +7 ${phone}</div>`
		};

		transporter.sendMail(mailData, function (err: any, info: any) {
			if (err) {
				(err);
				return res.status(200).json({success: false});
			} else {
				(info);
			}
		});
	} catch {
		('i am here');
		return res.status(200).json({success: false});
	}

	res.status(200).json({success: true});
}
