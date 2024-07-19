'use client';

import React, { useState } from 'react';
import { m } from 'framer-motion';
import Loader from '@/components/loader/Loader';
import Link from 'next/link';

type FormState = 'Default' | 'Loading' | 'Success' | 'Error';

interface Form {
	name: string;
	email: string;
	phone: string;
	website: string;
	use_phone: boolean;
}

const Page: React.FC = () => {
	const [form, setForm] = useState<FormState>('Default');
	const [form_data, setFormData] = useState<Partial<Form>>({ use_phone: false });
	const [slide, setSlide] = useState(0);

	const next_button = (
		<button title='Next' className='icon sm:absolute right-0' onClick={() => setSlide((current) => current + 1)}>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='size-8 xl:size-20'>
				<path d='M592-417H189q-26 0-44.5-18.5T126-480q0-26 18.5-44.5T189-543h403L435-700q-19-19-19-45t19-45q19-18 45-18t45 19l264 264q9 9 14 21t5 24q0 12-5 24t-14 21L524-170q-19 19-44.5 19T435-170q-19-19-19-45t19-45l157-157Z' />
			</svg>
		</button>
	);

	const handleSubmit = async () => {
		setForm('Loading');

		const res = await fetch('/api/quoting', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form_data),
		});

		switch (res.status) {
			case 200:
				setForm('Success');
				break;
			default:
				setForm('Error');
				break;
		}
	};

	const slides = [
		<m.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} className='flex flex-col gap-5'>
			<div className='flex items-center justify-center gap-5'>
				<input
					onSubmit={() => setSlide((current) => current + 1)}
					onChange={(e) => setFormData({ ...form_data, name: e.currentTarget.value })}
					className='max-w-[70%] sm:max-w-none transition-all text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-inherit border-b-4 border-solid border-[var(--border-low)] focus:border-0 focus:border-b-4 focus:border-solid focus:border-[var(--link)] placeholder:text-[var(--border-low)]'
					type='text'
					placeholder="What's your name..."
					required
					defaultValue={form_data.name ?? ''}
				/>
				{next_button}
			</div>
			<p className='px-5'>Your name is only used to contact you.</p>
		</m.div>,
		<div>
			<m.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} className='flex flex-col gap-5'>
				<div className='flex items-center justify-center gap-5'>
					<input
						onSubmit={() => setSlide((current) => current + 1)}
						onChange={(e) => setFormData({ ...form_data, email: e.currentTarget.value })}
						className='max-w-[70%] sm:max-w-none transition-all text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-inherit border-b-4 border-solid border-[var(--border-low)] focus:border-0 focus:border-b-4 focus:border-solid focus:border-[var(--link)] placeholder:text-[var(--border-low)]'
						type='email'
						placeholder="What's your email..."
					/>
					{next_button}
				</div>
				<p className='px-5'>Your email is only used to contact you.</p>
			</m.div>
		</div>,
		<m.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} className='flex flex-col gap-5'>
			<div className='flex items-center justify-center gap-5'>
				<input
					onSubmit={() => setSlide((current) => current + 1)}
					onChange={(e) => setFormData({ ...form_data, phone: e.currentTarget.value })}
					className='max-w-[70%] sm:max-w-none transition-all text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-inherit border-b-4 border-solid border-[var(--border-low)] focus:border-0 focus:border-b-4 focus:border-solid focus:border-[var(--link)] placeholder:text-[var(--border-low)]'
					type='text'
					placeholder="What's your phone..."
				/>
				{next_button}
			</div>
			<p className='px-5'>
				<b className='text-red-500'>(Optional)</b> Your phone number is only used to contact you.
			</p>
		</m.div>,
		<div>
			<m.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} className='flex flex-col gap-5'>
				<div className='flex items-center justify-center gap-5'>
					<input
						onSubmit={() => setSlide((current) => current + 1)}
						onChange={(e) => setFormData({ ...form_data, website: e.currentTarget.value })}
						className='max-w-[70%] sm:max-w-none transition-all text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-inherit border-b-4 border-solid border-[var(--border-low)] focus:border-0 focus:border-b-4 focus:border-solid focus:border-[var(--link)] placeholder:text-[var(--border-low)]'
						type='url'
						placeholder='A website?'
					/>

					{next_button}
				</div>

				<div className='flex justify-between gap-5 px-5'>
					<p>
						<b className='text-red-500'>(Optional)</b> Your website is used to see what we work on.
					</p>
					<button
						className='button sm:absolute right-0'
						title='I dont have a website'
						onClick={() => setSlide((current) => current + 1)}>
						I don&apos;t have one yet
					</button>
				</div>
			</m.div>
		</div>,
		<m.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} className='flex flex-col gap-5 items-center'>
			<p className='text-5xl sm:text-6xl text-center'>Last one, Contact me via</p>
			<div className='flex gap-5 items-center'>
				<button
					title='Change preference'
					onClick={() => setFormData({ ...form_data, use_phone: !form_data.use_phone })}
					className='text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold anchor !text-[var(--link)]'>
					{form_data.use_phone ? 'Phone' : 'Email'}
				</button>
				<button
					title='Submit Quote'
					className='icon !bg-green-600 hover:!bg-green-700 !fill-[var(--bg-normal)]'
					onClick={handleSubmit}>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='size-8 xl:size-20'>
						<path d='m382-388 321-321q19-19 45-19t45 19q19 19 19 45t-19 45L427-253q-19 19-45 19t-45-19L167-423q-19-19-19-45t19-45q19-19 45-19t45 19l125 125Z' />
					</svg>
				</button>
			</div>
		</m.div>,
	];

	return (
		<>
			<div className='w-full mt-[5%] h-1/6 flex items-center justify-center gap-10'>
				{slide > 0 && form === 'Default' && (
					<m.button
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						title='Back'
						className='icon'
						onClick={() => setSlide((current) => current - 1)}>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='size-8'>
							<path d='m368-417 157 157q19 19 19 45t-19 45q-19 18-45 18t-45-19L171-435q-9-9-14-21t-5-24q0-12 5-24t14-21l265-265q19-19 44.5-19t44.5 19q19 19 19 45t-19 45L368-543h403q26 0 44.5 18.5T834-480q0 26-18.5 44.5T771-417H368Z' />
						</svg>
					</m.button>
				)}
				<h1 className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'>
					{form === 'Default' && "Let's talk"}
					{form === 'Success' && 'Thank you'}
					{form === 'Error' && 'Sorry'}
					{form === 'Loading' && 'Sending to the Stars...'}
				</h1>
			</div>
			<div className='w-full h-2/5 mb-[5%] center'>
				<m.div
					initial={{ opacity: 0, scale: 0.75, y: 100 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ type: 'spring', duration: 0.75 }}>
					{form === 'Default' && <div>{slides[slide]}</div>}
					{form === 'Loading' && <Loader />}
					{form === 'Success' && (
						<div className='flex flex-col items-center gap-5'>
							<p className='text-xl'>We have recieved your request and we will contact you as soon as possible!</p>
							<Link title='Go to Homepage' href='/' className='link'>
								Return Home
							</Link>
						</div>
					)}
					{form === 'Error' && (
						<div className='flex flex-col items-center gap-5'>
							<p className='text-xl'>There was an issue processing your request, maybe try again?</p>
							<button title='Submit Quote Again' onClick={handleSubmit} className='button'>
								Try again
							</button>
						</div>
					)}
				</m.div>
			</div>
		</>
	);
};

export default Page;
