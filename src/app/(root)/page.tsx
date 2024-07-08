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

	const schema = {
		"@context": "http://schema.org",
		"@type": "Organization",
		"name": "Costellar Web Design",
		"url": "https://costellar.net",
		"logo": "https://costellar.net/favicon.ico",
		"sameAs": [
		  "https://x.com/costellarllc",
		  "https://www.instagram.com/costellarcompany",
		  "https://www.tiktok.com/@costellarweb"
		],
		"contactPoint": {
		  "@type": "ContactPoint",
		  "telephone": "+1-716-427-4280",
		  "email": "contact@ycostellar.net",
		  "contactType": "Customer Service",
		  "areaServed": "US",
		  "availableLanguage": "English",
		}
	  }	  

	return (
		<div className='size-full center flex flex-col flex-grow'>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
			<AnimatePresence>{form != 'Closed' && <Form formStatus={form} setForm={setForm} />}</AnimatePresence>
			<Hero setForm={setForm} />
			<Sections setForm={setForm} />
			<Footer />
		</div>
	);
};

export default Page;
