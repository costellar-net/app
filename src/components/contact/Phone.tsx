'use client';

import { InfoContext } from '@/providers/Info';
import Link from 'next/link';
import { useContext } from 'react';

const Phone: React.FC = () => {
	const { info } = useContext(InfoContext);

	return (
		<Link href={`tel:${info.contact.phone}}`} className='link'>
			{info.contact.phone}
		</Link>
	);
};

export default Phone;
