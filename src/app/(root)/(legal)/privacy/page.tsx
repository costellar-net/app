import Email from '@/components/contact/Email';
import Phone from '@/components/contact/Phone';
import Link from 'next/link';
import React from 'react';

const sections = [
	{
		title: 'Information Collection',
		content: 'We collect the following personal information when you contact us in a sale:',
		list: ['Name', 'Email Address', 'Contact Preference',  'Phone (Optional)', 'Website (Optional)'],
	},
	{
		title: 'Use of Information',
		content: 'The information we collect is used solely for the following purposes:',
		list: [
			'To contact you regarding our products and services',
			'To facilitate sales and provide customer support',
		],
	},
	{
		title: 'Data Liability',
		content:
			'While we take every precaution to protect your information, we cannot guarantee the security of data transmitted over the internet. You accept the inherent risks of providing information online and will not hold us liable for any breach of security.',
	},
	{
		title: 'No Selling of Information',
		content:
			'We respect your privacy and will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.',
	},
	{
		title: 'Your Rights',
		content: (
			<>
				You have the right to request details of the personal information we hold about you. If you would like a copy of the
				information held on you, please contact us at <Email />. If you believe that any information we are holding on you is
				incorrect or incomplete, please email us as soon as possible at the above address. We will promptly correct any
				information found to be incorrect.
			</>
		),
	},
	{
		title: 'Changes to This Privacy Statement',
		content:
			'We may update this Privacy Statement from time to time. Your continued use of our services after any such changes constitutes your acceptance of the new terms.',
	},
	{
		title: 'Contact Us',
		content: (
			<>
				If you have any questions or concerns about our Privacy Statement or the handling of your personal information, please
				contact us at: <Email /> or <Phone />
			</>
		),
	},
];

const Page: React.FC = () => {
	return (
		<div className='flex flex-col gap-2 p-[5%] xl:ml-[25vw] xl:max-w-[50%]'>
			<h1>Your Privacy</h1>
			<p>
				<strong>Last Updated:</strong> 7/4/2024
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
