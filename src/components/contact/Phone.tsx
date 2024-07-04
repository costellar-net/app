import Link from 'next/link';

const Phone: React.FC = () => {
	return (
		<Link href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}}`} className='link'>
			{process.env.NEXT_PUBLIC_CONTACT_PHONE}
		</Link>
	);
};

export default Phone;
