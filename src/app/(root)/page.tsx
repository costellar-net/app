'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Footer from '@/components/footer/Footer';
import Form from './Form';

import Sections from './Sections';
import Hero from './Hero';

export type FormStatus = 'Closed' | 'Open' | 'Loading' | 'Success' | 'Error';

const Page: React.FC = () => {
	const [form, setForm] = useState<FormStatus>('Closed');

	return (
		<div className='size-full center'>
			<AnimatePresence>{form != 'Closed' && <Form formStatus={form} setForm={setForm} />}</AnimatePresence>
			<Hero setForm={setForm} />
			<Sections setForm={setForm} />
			<Footer />
		</div>
	);
};

export default Page;
