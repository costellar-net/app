import Footer from '@/components/footer/Footer';
import Link from 'next/link';

export default function NotFound() {
	return (
		<>
			<div className='size-full grid place-items-center'>
				<h1 className='text-[40vw] leading-[50vh] absolute opacity-10 z-10 font-bold select-none'>404</h1>
				<div className='flex items-center flex-col gap-5 z-20'>
					<h2 className='text-2xl max-w-[60%] md:max-w-[60%] text-center'>
						We couldn&apos;t find the page you&apos;re looking for.
					</h2>
					<Link title='Go to the homepage' className='link' href='/'>
						Return Home
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
}
