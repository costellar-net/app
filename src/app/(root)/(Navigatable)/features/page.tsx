import { features } from '@/lib/features';
import Link from 'next/link';
import React from 'react';

const Page: React.FC = () => {
	return (
		<>
			<div className='w-full center py-20 flex flex-col gap-10'>
				<h2 className='text-3xl text-center'>We focus on quality and a No-BS website.</h2>
				<h1 className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'>
					What&apos;s included
				</h1>
			</div>
			{features.map((feature, i) => {
				return (
					<div key={i} className='w-full flex flex-col sm:flex-row flex-wrap align-stretch justify-center gap-5 p-5 sm:p-20'>
						<div className='w-full sm:w-1/3'>
							<div className='flex gap-5 items-center pt-20 sticky top-0'>
								{feature.icon &&
									React.cloneElement(feature.icon, {
										className: 'size-10',
									})}
								<h3 className='text-5xl font-bold'>{feature.name}</h3>
							</div>
						</div>
						<div className='w-full sm:w-2/5 h-full'>
							<p className='leading-relaxed text-3xl sm:pt-20'>{feature.description}</p>
						</div>
					</div>
				);
			})}
			<div className='w-full center py-20 flex flex-col gap-10'>
				<p className='text-center text-5xl'>And the best part...</p>
				<p className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'>
					We&apos;ll do it all for you
				</p>
				<p className='text-center text-5xl'>In under a month</p>
				<Link
					className='button'
					aria-label='Form'
					href='/quoting'
					style={{ '--color': 'var(--accent-opacity)' } as React.CSSProperties}>
					Get a quote
				</Link>
			</div>
		</>
	);
};

export default Page;
