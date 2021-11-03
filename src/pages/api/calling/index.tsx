import type {NextApiRequest, NextApiResponse} from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
	const {phone, select} = req.body;

	if (!phone || !select) {
		res.status(200).json({success: false});
	}

	const email = '';
	const password = '';

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
			from: '"Фотозона 77" <info@fotozona77.ru>',
			to: email,
			subject: 'Заявка с сайта',
			text: 'Заявка с сайта Фотозона 77',
			html: `<div style="padding-top: 10px; padding-bottom: 10px">${select} на номер +7 ${phone}</div>`
		};

		transporter.sendMail(mailData, function (err: any, info: any) {
			if (err) {
				console.log(err);
				return res.status(200).json({success: false});
			} else {
				console.log(info);
			}
		});
	} catch {
		console.log('i am here');
		return res.status(200).json({success: false});
	}

	res.status(200).json({success: true});
}
