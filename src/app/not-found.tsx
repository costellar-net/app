import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='h-screen w-screen grid place-items-center'>
			<h1 className='text-9xl absolute opacity-10 z-10'>404</h1>
			<div className='flex items-center flex-col g-10 z-20'>
				<h2 className='max-w-[60%] md:max-w-[60%] leading-5 text-center'>
					We couldn&apos;t find the page you&apos;re looking for.
				</h2>
				<Link aria-label='Go to home' className='text-center text-link hover:underline' href='/'>
					Return Home
				</Link>
			</div>
		</div>
	);
}
