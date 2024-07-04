'use client';

import React, { useState } from 'react';
import Form from './Form';
import { AnimatePresence } from 'framer-motion';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';
import header_background from '/public/moon.jpg';
import Email from '@/components/contact/Email';
import Phone from '@/components/contact/Phone';
import Sections from './Sections';
import { m } from 'framer-motion';

export type FormStatus = 'Closed' | 'Open' | 'Loading' | 'Success' | 'Error';

const Page: React.FC = () => {
	const [form, setForm] = useState<FormStatus>('Closed');

	return (
		<div className='size-full center'>
			<AnimatePresence>{form != 'Closed' && <Form formStatus={form} setForm={setForm} />}</AnimatePresence>
			<div className='h-screen w-full center bg-black text-white'>
				<Image
					className='object-cover size-full absolute'
					src={header_background}
					alt=''
					style={{
						maskImage: 'linear-gradient(to right, #0006 5%, #000 20%, #000 80%, #0006 95%)',
					}}
				/>
				<div className='text-center flex flex-col items-center gap-5 opacity-90'>
					<m.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', duration: 1 }}>
						Modern. Fast. Awesome.
					</m.h1>
					<m.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'spring', duration: 1, delay: 1 }}>
						Modern websites should be the standard.
					</m.h3>
					<button
						className='button'
						aria-label='Form'
						onClick={() => setForm('Open')}
						style={{ '--color': 'var(--accent)' } as React.CSSProperties}>
						Get a quote
					</button>
					<p>
						Or contact us at <Email /> or <Phone />
					</p>
				</div>
			</div>
			<Sections setForm={setForm} />
			<Footer />
		</div>
	);
};

export default Page;
