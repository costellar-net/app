import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='h-full w-full grid place-items-center'>
			<h1 className='text-[40vw] leading-[50vh] absolute opacity-10 z-10 font-black select-none'>404</h1>
			<div className='flex items-center flex-col gap-5 z-20'>
				<h2 className='text-2xl max-w-[60%] md:max-w-[60%] text-center'>
					We couldn&apos;t find the page you&apos;re looking for.
				</h2>
				<Link aria-label='Go to home' className='a' href='/'>
					Return Home
				</Link>
				<Button
					title='Hello'
					icon={
						<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
							<path d='M126-212v-342q0-30 13-56.5t37-44.5l228-171q34-26 76-26t76 26l228 171q24 18 37 44.5t13 56.5v342q0 53-36.5 89.5T708-86h-77q-26 0-44.5-18.5T568-149v-196q0-26-18.5-44.5T505-408h-50q-26 0-44.5 18.5T392-345v196q0 26-18.5 44.5T329-86h-77q-53 0-89.5-36.5T126-212Z' />
						</svg>
					}
				/>
			</div>
		</div>
	);
}
