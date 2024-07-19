'use client';

import { InfoContext } from '@/providers/Info';
import Link from 'next/link';
import React, { useContext } from 'react';

const Socials: React.FC = () => {
	const { info } = useContext(InfoContext);

	if (!info.socials) {
		return;
	}

	return (
		<div className='flex justify-center flex-wrap gap-10'>
			{info.socials.map((social, i) => {
				return (
					<Link
						href={social.url}
						title={`Link to our ${social.url}`}
						key={i}
						className='fill-[var(--text-low)] hover:fill-[var(--accent)] focus-visible:fill-[var(--accent)] transition-all'>
						{React.cloneElement(social.icon, {
							className: 'size-10 sm:size-24',
						})}
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
