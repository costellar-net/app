'use client';

import { InfoContext } from '@/providers/Info';
import Link from 'next/link';
import React, { useContext } from 'react';

const included = ['Bug Fixes', 'Basic Content Addition', 'Request of Advanded Content (paid extra)', 'Check-ins', 'SEO Updates'];

const Page: React.FC = () => {
	const { info } = useContext(InfoContext);

	return (
		<div className='w-full center'>
			<div className='w-[90%] center py-20 flex flex-col gap-10'>
				<p className='text-3xl text-center'>What&apos;s included in</p>
				<h1 className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'>Site Management</h1>
			</div>

			<div className='w-[90%] sm:w-[70%] flex flex-col flex-wrap gap-5'>
				<h2 className='text-4xl sm:text-5xl font-bold'>It&apos;s our plan to keep you up to date.</h2>
				<p>So we&apos;ve made a plan just for you. Every month you pay for this plan, we will make sure your site gets:</p>

				{included.map((item, i) => {
					return (
						<div className='flex gap-5 items-center justify-between bg-[var(--bg-high)] p-5 rounded-xl' key={i}>
							<h3 className='text-2xl'>{item}</h3>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='size-8 fill-green-600'>
								<path d='m421-443-60-60q-17-17-42-17t-42 17q-17 17-16.5 42t17.5 42l98 98q19.36 19 45.18 19T466-321l211-211q17-17 17-41.5T677-615q-17-17-42-17t-42 17L421-443Zm59 397q-91 0-169.99-34.08-78.98-34.09-137.41-92.52-58.43-58.43-92.52-137.41Q46-389 46-480q0-91 34.08-169.99 34.09-78.98 92.52-137.41 58.43-58.43 137.41-92.52Q389-914 480-914q91 0 169.99 34.08 78.98 34.09 137.41 92.52 58.43 58.43 92.52 137.41Q914-571 914-480q0 91-34.08 169.99-34.09 78.98-92.52 137.41-58.43 58.43-137.41 92.52Q571-46 480-46Z' />
							</svg>
						</div>
					);
				})}
				<p className='text-center text-3xl'>And don&apos;t worry, there will be more to come in the near future.</p>
			</div>

			<div className='w-[90%] center mt-40 py-40 flex flex-col gap-10'>
				<p className='text-center text-5xl'>All you need to do is...</p>
				<p className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'>Email us Today</p>
				<Link
					className='button'
					aria-label='Form'
					href={`mailto:${info.contact.email}`}
					style={{ '--color': 'var(--accent-opacity)' } as React.CSSProperties}>
					Email Us
				</Link>
			</div>
		</div>
	);
};

export default Page;
