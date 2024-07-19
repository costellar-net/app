import React from 'react';
import Link from 'next/link';

// const words = ['Stellar Performance.', 'Modern. Fast. Awesome.', 'Pull clients in.', 'Where performance meets price.'];
// const random = Math.floor(Math.random() * words.length);

const Hero: React.FC = () => {
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
			<div className='text-center flex flex-col items-center gap-5 px-[5%]'>
				<h1 className='opacity-90 font-bold text-5xl md:text-8xl'>Modern. Fast. Awesome.</h1>
				<h2 className='opacity-90 text-xl'>Don&apos;t waste your time making a website, we&apos;ll do it all for you.</h2>
				<Link
					className='button'
					aria-label='Form'
					href='/quoting'
					style={{ '--color': 'var(--accent-opacity)' } as React.CSSProperties}>
					Get a quote
				</Link>
			</div>
		</div>
	);
};

export default Hero;
