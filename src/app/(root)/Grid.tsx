import Link from 'next/link';
import React from 'react';
import { features } from './(Navigatable)/features/page';

const Grid: React.FC = () => {
	return (
		<div className='mt-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 scale-100'>
			{features.map((item, i) => {
				return (
					<div className='flex gap-5 items-center justify-between bg-[var(--bg-high)] p-5 rounded-xl' key={i}>
						<h3 className='text-2xl'>{item.name}</h3>
						{item.icon ? (
							React.cloneElement(item.icon, {
								className: 'size-8 fill-green-600',
							})
						) : (
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='size-8 fill-green-600'>
								<path d='m421-443-60-60q-17-17-42-17t-42 17q-17 17-16.5 42t17.5 42l98 98q19.36 19 45.18 19T466-321l211-211q17-17 17-41.5T677-615q-17-17-42-17t-42 17L421-443Zm59 397q-91 0-169.99-34.08-78.98-34.09-137.41-92.52-58.43-58.43-92.52-137.41Q46-389 46-480q0-91 34.08-169.99 34.09-78.98 92.52-137.41 58.43-58.43 137.41-92.52Q389-914 480-914q91 0 169.99 34.08 78.98 34.09 137.41 92.52 58.43 58.43 92.52 137.41Q914-571 914-480q0 91-34.08 169.99-34.09 78.98-92.52 137.41-58.43 58.43-137.41 92.52Q571-46 480-46Z' />
							</svg>
						)}
					</div>
				);
			})}
			<Link
				href='/features'
				title='See All'
				className='flex gap-5 items-center justify-between bg-[var(--bg-high)] p-5 rounded-xl hover:bg-[var(--border-low)] focus-visible:bg-[var(--border-low)] transition-all'>
				<p className='text-[var(--link)] text-2xl'>See All</p>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='size-8 fill-[var(--link)]'>
					<path d='M592-417H189q-26 0-44.5-18.5T126-480q0-26 18.5-44.5T189-543h403L435-700q-19-19-19-45t19-45q19-18 45-18t45 19l264 264q9 9 14 21t5 24q0 12-5 24t-14 21L524-170q-19 19-44.5 19T435-170q-19-19-19-45t19-45l157-157Z' />
				</svg>
			</Link>
		</div>
	);
};

export default Grid;
