import type { Sitemap } from '@/lib/info';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m } from 'framer-motion';
import clsx from 'clsx';

interface P {
	data: Sitemap.Group;
	setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Group: React.FC<P> = ({ data, setHamburgerOpen }) => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	if (!data.items) {
		return <p>Error</p>;
	}

	return (
		<>
			<button title={data.title} onClick={() => setOpen((prev) => !prev)} className='anchor !p-5 !gap-5 justify-between'>
				<div>
					{data.icon}
					<p className={`text-3xl ${open ? 'text-[var(--text-normal)]' : ''}`}>{data.title}</p>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 -960 960 960'
					className={clsx('size-10 transition-all', open && 'rotate-90')}>
					<path d='M472-480 332-620q-18-18-18-44t18-44q18-18 44-18t44 18l183 183q9 9 14 21t5 24q0 12-5 24t-14 21L420-252q-18 18-44 18t-44-18q-18-18-18-44t18-44l140-140Z' />
				</svg>
			</button>
			{open && (
				<div className='flex flex-col gap-5 px-[5%]'>
					{data.items.map((item, i) => {
						if (item.callback) {
							return (
								<m.div
									key={i}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.05 }}>
									<button title={item.title} onClick={item.callback} className='anchor'>
										{item.icon &&
											React.cloneElement(item.icon, {
												className: 'size-10 sm:size-12',
											})}
										<div>
											<p className='text-xl font-bold text-[var(--text-normal)]'>{item.title}</p>
											<p>{item.description}</p>
										</div>
									</button>
								</m.div>
							);
						}

						if (item.link) {
							return (
								<m.div
									key={i}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.05 }}>
									<Link
										href={item.link}
										onClick={() => setHamburgerOpen(false)}
										title={item.title}
										className={clsx('anchor', pathname === item.link && 'bg-[var(--accent-opacity)]')}>
										{item.icon &&
											React.cloneElement(item.icon, {
												className: 'size-10 sm:size-12',
											})}
										<div>
											<p className='text-xl font-bold text-[var(--text-normal)]'>{item.title}</p>
											<p>{item.description}</p>
										</div>
									</Link>
								</m.div>
							);
						}

						return <p>Error</p>;
					})}
				</div>
			)}
		</>
	);
};

export default Group;
