import React from 'react';
import type { FormStatus } from './page';
import { m } from 'framer-motion';
import Grid from './Grid';
// import Marquee from 'react-fast-marquee';

interface P {
	setForm: React.Dispatch<React.SetStateAction<FormStatus>>;
}

// const marquee = [
// 	{
// 		name: 'ok',
// 	},
// 	{
// 		name: 'yeh',
// 	},
// 	{
// 		name: 'no',
// 	},
// ];

const Sections: React.FC<P> = ({ setForm }) => {
	return (
		<>
			{/* <div className='px-1 py-20 w-full center'>
				<m.div
					initial={{ opacity: 0, scale: 0.75 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ type: 'spring', duration: 0.7 }}
					className='flex flex-col gap-5 text-center'>
					<p className='text-5xl font-bold'>Why us?</p>
					<div className='w-screen max-w-full mt-10'>
						<Marquee
							autoFill
							// style={{
							// 	maskImage:
							// 		'linear-gradient(to right, rgba(0, 0, 0, 0) 15%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 85%)',
							// }}
						>
							{marquee.map((item, i) => {
								return (
									<div
										key={i}
										className='cursor-pointer transition-colors bg-[var(--bg-high)] hover:bg-[var(--border-low)] px-20 py-10 mx-5 rounded-xl'>
										{item.name}
									</div>
								);
							})}
						</Marquee>
					</div>
				</m.div>
			</div> */}

			<div className='px-1 py-20 w-full center'>
				<m.div
					initial={{ opacity: 0, scale: 0.75 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ type: 'spring', duration: 0.7 }}
					className='p-[5%] mx-[5%] center bg-[var(--bg-high)] rounded-3xl'>
					<div className='flex flex-col gap-5'>
						<h3 className='text-5xl font-bold'>Reach for the Stars.</h3>
						<h2 className='text-3xl'>
							Our extremely optimized SEO and project speeds will get you to customers in no time.
						</h2>
						<div className='p-[5%] flex flex-col gap-6'>
							<div className='flex gap-5 items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='24px'
									viewBox='0 -960 960 960'
									width='24px'
									className='w-8 h-8 fill-green-600'>
									<path d='m421-443-60-60q-17-17-42-17t-42 17q-17 17-16.5 42t17.5 42l98 98q19.36 19 45.18 19T466-321l211-211q17-17 17-41.5T677-615q-17-17-42-17t-42 17L421-443Zm59 397q-91 0-169.99-34.08-78.98-34.09-137.41-92.52-58.43-58.43-92.52-137.41Q46-389 46-480q0-91 34.08-169.99 34.09-78.98 92.52-137.41 58.43-58.43 137.41-92.52Q389-914 480-914q91 0 169.99 34.08 78.98 34.09 137.41 92.52 58.43 58.43 92.52 137.41Q914-571 914-480q0 91-34.08 169.99-34.09 78.98-92.52 137.41-58.43 58.43-137.41 92.52Q571-46 480-46Z' />
								</svg>
								<h2 className='text-3xl'>Awesome SEO</h2>
							</div>
							<div className='flex gap-5 items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='24px'
									viewBox='0 -960 960 960'
									width='24px'
									className='w-8 h-8 fill-green-600'>
									<path d='m391-334-216-29q-39-5-51.5-42.5T140-471l447-429q7-7 17-10.5t28-3.5q28 0 42.5 24t1.5 49L564-619l217 27q40 5 52 42.5T816-484L373-60q-7 7-17 10.5T328-46q-28 0-43-23.5t-2-48.5l108-216Z' />
								</svg>
								<h2 className='text-3xl'>Blazingly fast load times</h2>
							</div>
							<div className='flex gap-5 items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='24px'
									viewBox='0 -960 960 960'
									width='24px'
									className='w-8 h-8 fill-green-600'>
									<path d='M535-504v-116q0-23.38-15.81-39.19Q503.38-675 480-675q-23.37 0-39.19 15.81Q425-643.38 425-620v136q0 13 4.5 24.07T443-440l116 116q16 16 38 16t39-16q17-16 17-39t-17-40L535-504ZM480-46q-91 0-169.99-34.08-78.98-34.09-137.41-92.52-58.43-58.43-92.52-137.41Q46-389 46-480q0-91 34.08-169.99 34.09-78.98 92.52-137.41 58.43-58.43 137.41-92.52Q389-914 480-914q91 0 169.99 34.08 78.98 34.09 137.41 92.52 58.43 58.43 92.52 137.41Q914-571 914-480q0 91-34.08 169.99-34.09 78.98-92.52 137.41-58.43 58.43-137.41 92.52Q571-46 480-46Z' />
								</svg>
								<h2 className='text-3xl'>We&apos;ll get it done in a week</h2>
							</div>
						</div>
					</div>
				</m.div>
			</div>

			<div className='px-1 py-20 w-full center'>
				<m.div
					initial={{ opacity: 0, scale: 0.75 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ type: 'spring', duration: 0.7 }}
					className='flex flex-col gap-5 text-center'>
					<p className='text-5xl font-bold'>What We Offer</p>
					<Grid />
				</m.div>
			</div>

			<div className='px-1 py-20 w-full center'>
				<m.div
					initial={{ opacity: 0, scale: 0.75 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ type: 'spring', duration: 0.7 }}
					className='p-[5%] size-11/12 center bg-[var(--space)] text-[var(--bg-high)] rounded-3xl overflow-hidden'>
					<video
						className='object-cover size-full absolute'
						style={{
							maskImage: 'linear-gradient(to right, #0006 5%, #000 20%, #000 80%, #0006 95%)',
						}}
						playsInline
						autoPlay
						muted
						loop
						src='/galaxy.mp4'
					/>
					<div className='flex flex-col gap-10 items-center'>
						<p className='text-5xl font-bold'>What&apos;s the price?</p>
						<button
							className='button'
							aria-label='Form'
							onClick={() => setForm('Open')}
							style={{ '--color': 'var(--accent)' } as React.CSSProperties}>
							Talk Today
						</button>
					</div>
				</m.div>
			</div>
		</>
	);
};

export default Sections;
