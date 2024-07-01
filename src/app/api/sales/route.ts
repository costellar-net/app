import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Only POST requests allowed' });
	}

	res.status(200).json('Data submitted successfully!');

	// const { name, email, phone, website, contact_method } = req.body;

	// const auth = new google.auth.OAuth2(
	// 	process.env.GOOGLE_CLIENT_ID,
	// 	process.env.GOOGLE_CLIENT_SECRET,
	// 	process.env.GOOGLE_REDIRECT_URI
	// );

	// auth.setCredentials({
	// 	refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
	// });

	// const sheets = google.sheets({ version: 'v4', auth });

	// try {
	// 	const request = {
	// 		spreadsheetId: process.env.SPREADSHEET_ID,
	// 		range: 'Sheet1!A:E',
	// 		valueInputOption: 'USER_ENTERED',
	// 		resource: {
	// 			values: [[name, email, phone, website, contact_method]],
	// 		},
	// 	};

	// 	await sheets.spreadsheets.values.append(request);
	// 	res.status(200).json('Data submitted successfully!');
	// } catch (error) {
	// 	console.error('Error appending data:', error);
	// 	res.status(500).json('Error appending data');
	// }
}
