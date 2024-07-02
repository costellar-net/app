import Link from 'next/link';
import React from 'react';

const sections = [
	{
		title: 'SERVICES PROVIDED',
		content:
			'Costellar provides website production services, including but not limited to design, development, and deployment of websites.',
	},
	{
		title: 'ACCEPTANCE OF TERMS',
		content:
			'By using our Service, you confirm that you have read, understood, and agree to be bound by these Terms. We may update these Terms from time to time. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.',
	},
	{
		title: 'LIABILITY DISCLAIMER',
		content:
			'To the fullest extent permitted by applicable law, Costellar shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, resulting from:',
		list: [
			'The use or the inability to use the Service;',
			'Unauthorized access to or alteration of your transmissions or data;',
			'Statements or conduct of any third party on the Service;',
			'Any other matter relating to the Service.',
		],
	},
	{
		title: 'OWNERSHIP AND TRANSFER OF WEBSITE',
		content:
			'Ownership of the website and all associated materials, including but not limited to design, content, and code, is transferred to the client upon completion of the transaction. Once payment is received and the website is delivered, the client assumes full responsibility for the website.',
	},
	{
		title: 'PAYMENT TERMS',
		content:
			'Full payment is required upon completion of the website production unless otherwise agreed upon in writing. Payment must be made according to the payment terms specified in the invoice.',
	},
	{
		title: 'CLIENT RESPONSIBILITIES',
		content:
			'The client is responsible for providing all necessary content, materials, and information required for the production of the website. The client is also responsible for reviewing and approving the website before final delivery.',
	},
	{
		title: 'REVISIONS AND MODIFICATIONS',
		content:
			'Revisions and modifications to the website after the initial delivery may incur additional charges. The scope of such revisions and the associated costs will be agreed upon in writing before any work is undertaken.',
	},
	{
		title: 'TERMINATION',
		content:
			'Costellar reserves the right to terminate services at any time if the client fails to comply with these Terms or engages in any unlawful activity. Upon termination, the client remains responsible for any outstanding payments.',
	},
	{
		title: 'GOVERNING LAW',
		content:
			'These Terms shall be governed and construed in accordance with the laws of the United States of America, without regard to its conflict of law provisions. Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the courts of the United States of America.',
	},
	{
		title: 'ENTIRE AGREEMENT',
		content:
			'These Terms constitute the entire agreement between you and Costellar regarding the use of the Service and supersede all prior agreements and understandings.',
	},
];

const Page: React.FC = () => {
	return (
		<div className='flex flex-col gap-2 p-[5%] xl:ml-[25vw] xl:max-w-[50%]'>
			<h1>Our Terms</h1>
			<p>
				<strong>Last Updated:</strong> 6/28/2024
			</p>
			<p>
				Welcome to Costellar (“Company,” “we,” “our,” “us”). Please read these Terms of Service (“Terms,” “Terms of Service”)
				carefully before using our website production services (the “Service”).
			</p>
			<p>
				By accessing or using the Service, you agree to be bound by these Terms. If you do not agree with any part of the
				Terms, you may not access the Service.
			</p>

			{sections.map((section, i) => {
				return (
					<section key={i} className='flex flex-col gap-3 my-5'>
						<h3 className='capitalize text-[var(--text-low)]'>{section.title.toLowerCase()}</h3>
						<p className='leading-tight'>{section.content}</p>
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
