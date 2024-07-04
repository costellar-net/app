import Image from 'next/image';
import React from 'react';
import header_background from '/public/moon.webp';
import Email from '@/components/contact/Email';
import Phone from '@/components/contact/Phone';
import type { FormStatus } from './page';

interface P {
	setForm: React.Dispatch<React.SetStateAction<FormStatus>>;
}

const Hero: React.FC<P> = ({ setForm }) => {
	return (
		<div className='h-screen w-full center bg-black text-white'>
			<Image
				loading='eager'
				priority
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
	);
};

export default Hero;
