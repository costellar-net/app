import Link from 'next/link';
import { m } from 'framer-motion';
import React, { useState, useRef } from 'react';

interface P {
	setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<P> = ({ setFormOpen }) => {
	const formRef = useRef(null);
	const [preference, setPreference] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!formRef.current) {
			return;
		}

		const formData = new FormData(formRef.current);

		formData.set('use phone', String(preference));

		fetch(process.env.API_ROUTE ?? '', {
			method: 'POST',
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Data submission response:', data);
			})
			.catch((error) => {
				console.error('Error submitting data:', error);
			});

		setFormOpen(false);
	};

	return (
		<m.form
			onSubmit={handleSubmit}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ ease: 'anticipate', duration: 0.5 }}
			ref={formRef}
			className='fixed w-auto xl:w-1/2 z-20 bg-[var(--bg-normal)] shadow-2xl rounded-xl p-10 flex flex-col gap-5'>
			<div className='flex gap-5 justify-between items-center'>
				<h2>Let&apos;s Talk</h2>
				<button type='button' className='icon' aria-label='Close' onClick={() => setFormOpen(false)}>
					<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
						<path d='M480-392 300-212q-18 18-44 18t-44-18q-18-18-18-44t18-44l180-180-180-180q-18-18-18-44t18-44q18-18 44-18t44 18l180 180 180-180q18-18 44-18t44 18q18 18 18 44t-18 44L568-480l180 180q18 18 18 44t-18 44q-18 18-44 18t-44-18L480-392Z' />
					</svg>
				</button>
			</div>
			<div className='grid gap-3 grid-cols-2'>
				<div className='flex flex-col gap-1'>
					<label className='label'>
						Name <span className='text-red-500'>*</span>
					</label>
					<input className='input' type='text' name='name' placeholder='Name...' required />
				</div>
				<div className='flex flex-col gap-1'>
					<label className='label'>
						Email <span className='text-red-500'>*</span>
					</label>
					<input className='input' type='email' name='email' placeholder='Email...' required />
				</div>
				<div className='flex flex-col gap-1'>
					<label className='label'>Phone</label>
					<input className='input' type='text' name='phone' placeholder='Phone...' />
				</div>
				<div className='flex flex-col gap-1'>
					<label className='label'>Website</label>
					<input className='input' type='url' name='site' placeholder='Website...' />
				</div>
			</div>
			<div className='flex gap-5 justify-between items-center'>
				<div className='flex gap-5'>
					Contact me via
					<input type='checkbox' title='use phone' checked={preference} readOnly className='hidden' />
					<button
						type='button'
						aria-label='Email'
						className={preference ? 'link' : 'font-bold cursor-default'}
						onClick={() => setPreference(false)}>
						Email
					</button>
					<button
						type='button'
						aria-label='Phone'
						className={preference ? 'font-bold cursor-default' : 'link'}
						onClick={() => setPreference(true)}>
						Phone
					</button>
				</div>
				<div>
					We value your{' '}
					<Link href='/privacy' className='link' target='_blank'>
						privacy
						<svg xmlns='http://www.w3.org/2000/svg' height='16px' width='16px' viewBox='0 -960 960 960'>
							<path d='M212-86q-53 0-89.5-36.5T86-212v-536q0-53 36.5-89.5T212-874h205q26 0 44.5 18.5T480-811q0 26-18.5 44.5T417-748H212v536h536v-205q0-26 18.5-44.5T811-480q26 0 44.5 18.5T874-417v205q0 53-36.5 89.5T748-86H212Zm536-575L462-375q-18 18-43 17.5T376-376q-18-18-18-43.5t18-43.5l285-285h-38q-26 0-44.5-18.5T560-811q0-26 18.5-44.5T623-874h188q26 0 44.5 18.5T874-811v188q0 26-18.5 44.5T811-560q-26 0-44.5-18.5T748-623v-38Z' />
						</svg>
					</Link>
					.
				</div>
			</div>
			<button className='button justify-center'>All done</button>
		</m.form>
	);
};

export default Form;
