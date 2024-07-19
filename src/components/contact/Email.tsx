'use client';

import { InfoContext } from '@/providers/Info';
import Link from 'next/link';
import { useContext } from 'react';

const Email: React.FC = () => {
	const { info } = useContext(InfoContext);

	return (
		<Link href={`mailto:${info.contact.email}`} className='link'>
			{info.contact.email}
		</Link>
	);
};

export default Email;
