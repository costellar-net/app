import type { Sitemap } from '@/lib/info';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m } from 'framer-motion';
import clsx from 'clsx';

interface P {
	data: Sitemap.Group;
}

const Group: React.FC<P> = ({ data }) => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	if (!data.items) {
		return <p>Error</p>;
	}

	return (
		<>
			<button
				title={data.title}
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
				className='anchor z-20 !gap-2'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 -960 960 960'
					className={clsx('size-6 transition-all', open && 'rotate-180')}>
					<path d='M480-338q-12 0-24-5t-21-14L252-540q-18-18-18-44t18-44q18-18 44-18t44 18l140 140 140-140q18-18 44-18t44 18q18 18 18 44t-18 44L525-357q-9 9-21 14t-24 5Z' />
				</svg>
				<p className='text-xl font-bold'>{data.title}</p>
			</button>
			{open && (
				<div
					className='w-[110%] h-[110%] absolute -top-[5%] -left-[5%] z-10'
					onMouseEnter={() => setOpen(true)}
					onMouseLeave={() => setOpen(false)}
				/>
			)}
			{open && (
				<m.div
					onMouseEnter={() => setOpen(true)}
					onMouseLeave={() => setOpen(false)}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className='absolute top-full left-0 w-fit min-w-[250px] grid grid-flow-row gap-5 rounded-xl bg-[var(--bg-low)] z-10 p-2 shadow-xl'>
					{data.items.map((item, i) => {
						if (item.callback) {
							return (
								<button title={item.title} onClick={item.callback} key={i} className='anchor'>
									{item.icon}
									<div>
										<p className='text-xl font-bold text-[var(--text-normal)]'>{item.title}</p>
										<p>{item.description}</p>
									</div>
								</button>
							);
						}

						if (item.link) {
							return (
								<Link
									href={item.link}
									title={item.title}
									key={i}
									className={`anchor ${pathname === item.link ? 'bg-[var(--accent-opacity)]' : ''}`}>
									{item.icon &&
										React.cloneElement(item.icon, {
											className: 'size-10 sm:size-12',
										})}
									<div>
										<p className='text-xl font-bold text-[var(--text-normal)]'>{item.title}</p>
										<p>{item.description}</p>
									</div>
								</Link>
							);
						}

						return <p key={i}>Error</p>;
					})}
				</m.div>
			)}
		</>
	);
};

export default Group;
