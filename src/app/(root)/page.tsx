'use client';

import React, { useState } from 'react';
import Form from './Form';
import { AnimatePresence } from 'framer-motion';
import Footer from '@/components/footer/Footer';

const Page: React.FC = () => {
	const [formOpen, setFormOpen] = useState(false);

	return (
		<div className='size-full center'>
			<div className='h-full w-[95vw] md:w-full center'>
				<AnimatePresence>{formOpen && <Form setFormOpen={setFormOpen} />}</AnimatePresence>
				<div className='h-screen w-screen center'>
					<div className='flex flex-col items-center gap-5'>
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
