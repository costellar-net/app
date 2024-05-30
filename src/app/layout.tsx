import type { Metadata } from 'next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Mukta } from 'next/font/google';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'Costellar: Exceptional Web Solutions for Your Digital Success',
	description:
		"Elevate your online presence with Costellar. Our web development expertise combines innovation and precision to create bespoke digital solutions tailored to your needs. Let's transform your vision into a stunning reality.",
};

const font = Mukta({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '700', '800'],
	fallback: ['sans-serif'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
			<GoogleAnalytics gaId='G-K4S7R15KTF' />
			<GoogleTagManager gtmId='GTM-PKNRCX57' />
		</html>
	);
}
