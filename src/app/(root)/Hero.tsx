import React from 'react';
import type { FormStatus } from './page';

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
			<div className='text-center flex flex-col items-center gap-5 opacity-90'>
				<h1 className='opacity-90'>Modern. Fast. Awesome.</h1>
				<h3 className='opacity-90'>Modern websites should be the standard.</h3>
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
