import Link from 'next/link';

const Email: React.FC = () => {
	return (
		<Link href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className='link'>
			{process.env.NEXT_PUBLIC_CONTACT_EMAIL}
		</Link>
	);
};

export default Email;
