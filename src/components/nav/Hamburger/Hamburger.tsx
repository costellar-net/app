import React, { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m } from 'framer-motion';
import { InfoContext } from '@/providers/Info';
import Group from './Group';
import clsx from 'clsx';

interface P {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger: React.FC<P> = ({ setOpen }) => {
	const pathname = usePathname();
	const { info } = useContext(InfoContext);

	return (
		<m.div
			// initial={{ opacity: 0, y: '-101%' }}
			// animate={{ opacity: 1, y: 0 }}
			// exit={{ opacity: 1, y: '-101%' }}
			initial={{ opacity: 0, scale: 0.75 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.75 }}
			transition={{ ease: 'anticipate' }}
			className='z-40 fixed w-[102%] -left-[1%] h-full  bg-[var(--bg-normal)] flex items-center justify-center overflow-hidden rounded-xl'>
			<div className='flex flex-col gap-5 size-[80%] overflow-y-scroll'>
				<Link
					href='/'
					title='Home'
					onClick={() => setOpen(false)}
					className={clsx('anchor !p-5 !gap-5', pathname === '/' && 'bg-[var(--accent-opacity)]')}>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='size-8'>
						<path d='M126-212v-342q0-30 13-56.5t37-44.5l228-171q34-26 76-26t76 26l228 171q24 18 37 44.5t13 56.5v342q0 53-36.5 89.5T708-86h-77q-26 0-44.5-18.5T568-149v-196q0-26-18.5-44.5T505-408h-50q-26 0-44.5 18.5T392-345v196q0 26-18.5 44.5T329-86h-77q-53 0-89.5-36.5T126-212Z' />
					</svg>
					<p className='text-3xl'>Home</p>
				</Link>
				{info.sitemap.map((group, i) => {
					if (group.items) {
						return <Group data={group} key={i} setHamburgerOpen={setOpen} />;
					}

					if (group.callback) {
						return (
							<button title={group.title} onClick={group.callback} key={i} className='anchor !p-5 !gap-5'>
								{group.icon &&
									React.cloneElement(group.icon, {
										className: 'size-10 sm:size-12',
									})}
								<p className='text-3xl'>{group.title}</p>
							</button>
						);
					}

					if (group.link) {
						return (
							<Link
								href={group.link}
								onClick={() => setOpen(false)}
								title={group.title}
								key={i}
								className={clsx('anchor !p-5 !gap-5', pathname === '/' && 'fill-[var(--accent)] text-[var(--accent)]')}>
								{group.icon &&
									React.cloneElement(group.icon, {
										className: 'size-10 sm:size-12',
									})}
								<p className='text-3xl'>{group.title}</p>
							</Link>
						);
					}

					return <p key={i}>Error</p>;
				})}
			</div>
			<button className='icon absolute top-0 right-0 m-5' title='Close' onClick={() => setOpen(false)}>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='size-6'>
					<path d='M480-392 300-212q-18 18-44 18t-44-18q-18-18-18-44t18-44l180-180-180-180q-18-18-18-44t18-44q18-18 44-18t44 18l180 180 180-180q18-18 44-18t44 18q18 18 18 44t-18 44L568-480l180 180q18 18 18 44t-18 44q-18 18-44 18t-44-18L480-392Z' />
				</svg>
			</button>
		</m.div>
	);
};

export default Hamburger;
