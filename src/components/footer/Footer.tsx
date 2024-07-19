'use client';

import React, { useContext } from 'react';
import Socials from './Socials';
import Grid from './Grid';
import { InfoContext } from '@/providers/Info';
import Link from 'next/link';
import Email from '../contact/Email';
import Phone from '../contact/Phone';

const Footer: React.FC = () => {
	const { info } = useContext(InfoContext);

	return (
		<div
			className='w-full'
			style={{
				backgroundImage: 'linear-gradient(120deg, #eed0ad, #e8c7ef 38%, #d2ccee 76%, #b2d1ee)',
				backgroundSize: '400% 400%',
				animation: 'bg_gradient 10s ease infinite',
				animationPlayState: 'running',
			}}>
			<div
				className='w-full p-20 flex'
				style={{ background: 'radial-gradient(110% 150% at 50% 110%, transparent, var(--bg-normal) 75%)' }}>
				<div className='w-full'>
					<div className='flex justify-between gap-5 flex-col sm:flex-row'>
						<Grid />
						<Socials />
					</div>
					<p className='my-10'>
						Contact us at <Email /> or <Phone />.
					</p>
					<hr className='hr my-10' />
					<div className='flex items-center justify-between gap-5 flex-col sm:flex-row'>
						<p className='text-3xl font-bold text-center'>{info.copyright ?? info.name}</p>
						<p className='text-5xl font-bold text-center'>{info.slogan}</p>
						<Link href='/sitemap.xml' title='Sitemap' className='link'>
							Sitemap
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
