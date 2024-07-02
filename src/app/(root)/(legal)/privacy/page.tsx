import Link from 'next/link';
import React from 'react';

const sections = [
	{
		title: 'Information Collection',
		content: 'We collect the following personal information when you contact us in a sale:',
		list: ['Name', 'Email Address', 'Phone (Optional)', 'Website (Optional)'],
	},
	{
		title: 'Use of Information',
		content: 'The information we collect is used solely for the following purposes:',
		list: [
			'To contact you regarding our products and services',
			'To facilitate sales and provide customer support',
			'To keep you informed about updates, promotions, and offers related to our products and services',
		],
	},
	{
		title: 'Data Protection',
		content:
			'We are committed to ensuring that your information is secure. To prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect.',
	},
	{
		title: 'No Selling of Information',
		content:
			'We respect your privacy and will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.',
	},
	{
		title: 'Your Rights',
		content:
			'You have the right to request details of the personal information we hold about you. If you would like a copy of the information held on you, please contact us at costellarcontact@gmail.com. If you believe that any information we are holding on you is incorrect or incomplete, please email us as soon as possible at the above address. We will promptly correct any information found to be incorrect.',
	},
	{
		title: 'Changes to This Privacy Statement',
		content:
			'We may update this Privacy Statement from time to time. Any changes will be posted on this page, and we will notify you of any significant changes by email or through our website.',
	},
	{
		title: 'Contact Us',
		content:
			'If you have any questions or concerns about our Privacy Statement or the handling of your personal information, please contact us at: costellarcontact@gmail.com',
	},
];

const Page: React.FC = () => {
	return (
		<div className='flex flex-col gap-2 p-[5%] xl:ml-[25vw] xl:max-w-[50%]'>
			<h1>Your Privacy</h1>
			<p>
				<strong>Last Updated:</strong> 6/28/2024
			</p>
			<p>
				At Costellar, we are committed to protecting your privacy and ensuring that your personal information is handled in a
				safe and responsible manner. This Privacy Statement outlines how we collect, use, and protect your information.
			</p>

			{sections.map((section, i) => {
				return (
					<section key={i} className='flex flex-col gap-3 my-5'>
						<h3 className='capitalize text-[var(--text-low)]'>{section.title.toLowerCase()}</h3>
						<p>{section.content}</p>
						{section.list && (
							<ul className='flex flex-col gap-2 ml-5'>
								{section.list.map((item, j) => {
									return <li key={j}>{item}</li>;
								})}
							</ul>
						)}
					</section>
				);
			})}
			<div className='center w-full'>
				<Link href='/' className='link'>
					Return Home
				</Link>
			</div>
		</div>
	);
};

export default Page;