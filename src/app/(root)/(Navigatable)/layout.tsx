import React from 'react';
import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Nav />
			<div className='h-[5%]' />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
