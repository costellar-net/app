'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Sections from './Sections';
import Hero from './Hero';
import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';

const Page: React.FC = () => {
	return (
		<>
			<Nav />
			<Hero />
			<Sections />
			<Footer />
		</>
	);
};

export default Page;
