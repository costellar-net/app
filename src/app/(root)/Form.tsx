import Link from 'next/link';
import { m } from 'framer-motion';
import React, { useState } from 'react';

interface P {
	setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Data {
	name: string;
	email: string;
	phone?: string;
	website?: string;
	contact_method: Contact;
}

type Contact = 'phone' | 'email';

const Form: React.FC<P> = ({ setFormOpen }) => {
	const [contact, setContact] = useState<Contact>('email');
	const [data, setData] = useState<Data>();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!data) {
			return;
		}

		fetch('/api/sales', {
			method: 'POST',
			body: JSON.stringify({
				name: 'John Doe',
				email: 'john.doe@example.com',
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Data submission response:', data);
			})
			.catch((error) => {
				console.error('Error submitting data:', error);
			});
	};

	return (
		<m.form
			onSubmit={handleSubmit}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ ease: 'anticipate', duration: 0.5 }}
			className='fixed w-auto xl:w-1/2 z-10 bg-[var(--bg-low)] rounded-xl p-10 flex flex-col gap-5'>
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
					<input className='input' type='text' placeholder='Name...' required />
				</div>
				<div className='flex flex-col gap-1'>
					<label className='label'>
						Email <span className='text-red-500'>*</span>
					</label>
					<input className='input' type='email' placeholder='Email...' required />
				</div>
				<div className='flex flex-col gap-1'>
					<label className='label'>Phone</label>
					<input className='input' type='text' placeholder='Phone...' />
				</div>
				<div className='flex flex-col gap-1'>
					<label className='label'>Website</label>
					<input className='input' type='url' placeholder='Website...' />
				</div>
			</div>
			<div className='flex gap-5'>
				Contact me via {contact}.
				<button type='button' aria-label='Email' className='link' onClick={() => setContact('email')}>
					Email
				</button>
				<button type='button' aria-label='Phone' className='link' onClick={() => setContact('phone')}>
					Phone
				</button>
			</div>
			<div>
				We value your{' '}
				<Link href='/privacy' className='link' target='_blank'>
					privacy
				</Link>
				.
			</div>
			<button className='button justify-center'>All done</button>
		</m.form>
	);
};

export default Form;
