import { InfoContext } from '@/providers/Info';
import React, { useContext } from 'react';
import Link from 'next/link';

interface P {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner: React.FC<P> = ({ setOpen }) => {
	const { info } = useContext(InfoContext);

	if (!info.banner) {
		return;
	}

	return (
		<div className='h-10 bg-[var(--accent-dark)] hover:bg-[var(--accent)] focus-visible:bg-[var(--accent)] transition-all flex items-center justify-around rounded-xl mx-2 xl:mx-10 my-2 px-2 shadow-lg'>
			<Link href={info.banner.url} title={info.banner.text} className='w-[90%] center text-xl font-bold uppercase'>
				{info.banner.text}
			</Link>
			<button title='Close' className='icon !p-1' onClick={() => setOpen(false)}>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
					<path d='M480-392 300-212q-18 18-44 18t-44-18q-18-18-18-44t18-44l180-180-180-180q-18-18-18-44t18-44q18-18 44-18t44 18l180 180 180-180q18-18 44-18t44 18q18 18 18 44t-18 44L568-480l180 180q18 18 18 44t-18 44q-18 18-44 18t-44-18L480-392Z' />
				</svg>
			</button>
		</div>
	);
};

export default Banner;
