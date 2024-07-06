import React from 'react';
import type { FormStatus } from './page';
import { m } from 'framer-motion';

interface P {
	setForm: React.Dispatch<React.SetStateAction<FormStatus>>;
}

const Hero: React.FC<P> = ({ setForm }) => {
	return (
		<div className='h-screen w-full center bg-black text-white'>
			<video
				className='object-cover size-full absolute'
				style={{
					maskImage: 'linear-gradient(to right, #000a 5%, #000b 20%, #000b 80%, #000a 95%)',
				}}
				playsInline
				autoPlay
				muted
				loop
				src='/blackhole.mp4'
			/>
			<div className='text-center flex flex-col items-center gap-5 opacity-90 px-[5%]'>
				<h1 className='opacity-90 font-bold text-8xl'>Modern. Fast. Awesome.</h1>
				<h2 className='opacity-90 text-3xl'>Pull clients in.</h2>
				<button
					className='button'
					aria-label='Form'
					onClick={() => setForm('Open')}
					style={{ '--color': 'var(--accent)' } as React.CSSProperties}>
					Get a quote
				</button>
			</div>
		</div>
	);
};

export default Hero;
