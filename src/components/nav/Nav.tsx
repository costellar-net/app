'use client';

import { InfoContext } from '@/providers/Info';
import { useViewportSize, useWindowScroll } from '@mantine/hooks';
import React, { useContext, useState } from 'react';
import Banner from './Banner';
import Image from 'next/image';
import Links from './Links/Links';
import Hamburger from './Hamburger/Hamburger';
import Link from 'next/link';
import { AnimatePresence, m } from 'framer-motion';
import clsx from 'clsx';

const Nav: React.FC = () => {
	const [scroll] = useWindowScroll();
	const { width } = useViewportSize();
	const { info } = useContext(InfoContext);

	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const [bannerOpen, setBannerOpen] = useState(true);

	return (
		<>
			<AnimatePresence>{hamburgerOpen && <Hamburger setOpen={setHamburgerOpen} />}</AnimatePresence>
			<div className='fixed z-30 top-0 left-0 w-full max-w-[100vw]'>
				<div className='flex justify-between items-center px-[5vw] sm:px-[20vw] py-1 transition-all bg-[var(--bg-normal)]'>
					<Link
						href='/'
						title='Home'
						className='flex items-center gap-3 hover:bg-[var(--border-low)] focus-visible:bg-[var(--border-low)] px-2 rounded-xl transition-colors'>
						<Image src={info.logo_src} alt='' width={50} height={50} />
						<p className='sm:text-xl font-bold text-[var(--text-low)]'>{info.name}</p>
					</Link>
					{info.banner && !bannerOpen && width > 500 && (
						<m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='w-1/2 center'>
							<Link
								href={info.banner.url}
								title={info.banner.text}
								className='flex items-center justify-center text-center lg:text-xl font-bold uppercase rounded-xl bg-[var(--accent)] px-5 py-2 h-5/6 w-1/2'>
								{info.banner.text}
							</Link>
						</m.div>
					)}
					{width > 1000 ? (
						<Links />
					) : (
						<button className='icon' onClick={() => setHamburgerOpen(true)} title='Menu'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='size-6'>
								<path d='M149-191q-26 0-44.5-18.5T86-254q0-26 18.5-44.5T149-317h662q26 0 44.5 18.5T874-254q0 26-18.5 44.5T811-191H149Zm0-226q-26 0-44.5-18.5T86-480q0-26 18.5-44.5T149-543h662q26 0 44.5 18.5T874-480q0 26-18.5 44.5T811-417H149Zm0-226q-26 0-44.5-18.5T86-706q0-26 18.5-44.5T149-769h662q26 0 44.5 18.5T874-706q0 26-18.5 44.5T811-643H149Z' />
							</svg>
						</button>
					)}
				</div>
				<AnimatePresence>
					{bannerOpen && (
						<m.div exit={{ opacity: 0, y: -50, scale: 0.75 }}>
							<Banner setOpen={setBannerOpen} />
						</m.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default Nav;
