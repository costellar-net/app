'use client';

import React, { useState } from 'react';
import Form from './Form';
import { AnimatePresence } from 'framer-motion';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';
import header_background from '/public/moon.jpg';

const Page: React.FC = () => {
	const [formOpen, setFormOpen] = useState(false);

	return (
		<div className='size-full center'>
			<div className='h-full pl-[2vw] md:pl-0 w-full center'>
				<AnimatePresence>{formOpen && <Form setFormOpen={setFormOpen} />}</AnimatePresence>
				<div className='h-screen w-screen center bg-black text-white'>
					<Image
						className='object-cover size-full absolute'
						src={header_background}
						alt=''
						style={{
							maskImage: 'linear-gradient(to right, #0006 5%, #000 20%, #000 80%, #0006 95%)',
						}}
					/>
					<div className='text-center flex flex-col items-center gap-5 opacity-90'>
						<h1>Modern. Fast. Awesome.</h1>
						<h3>Modern websites should be the standard.</h3>
						<button className='button' aria-label='Form' onClick={() => setFormOpen((prev) => !prev)}>
							Get a quote
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Page;
