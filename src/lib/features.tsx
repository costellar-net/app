import Link from 'next/link';

interface Feature {
	name: string;
	description: string | React.ReactElement;
	icon?: React.ReactElement;
	image_url?: string;
}

export const features: Feature[] = [
	{
		name: 'Design Customization',
		description:
			'We want you to have exactly what you like, just tell us what you like and we will try our best to replicate your needs. Whether you need unique layouts, custom graphics, APIs, databases, or specialized interactive elements, we ensure your site stands out and resonates with your target audience. Our design team collaborates closely with you to turn your vision into a stunning, functional reality.',
	},
	{
		name: 'Responsive UI',
		description:
			"With our Responsive UI feature, your website will look and function flawlessly on any device, whether it's a desktop, tablet, or smartphone. We prioritize user experience, ensuring that your site automatically adjusts to various screen sizes and resolutions, providing a seamless experience for all users.",
	},
	{
		name: 'Accessibility',
		description:
			'Our commitment to Accessibility ensures that your website is usable by everyone, including individuals with disabilities. We adhere to the latest accessibility standards, implementing features like keyboard navigation, screen reader compatibility, and sufficient color contrast.',
	},
	{
		name: 'Source Code Included',
		description:
			"You receive the source code when you purchase from us. It you to have full control over your website's code, enabling future modifications, updates, and customizations. It also ensures that you are not locked into a single service provider for ongoing maintenance.",
	},
	{
		name: 'SEO',
		description:
			"Our SEO (Search Engine Optimization) services are designed to improve your website's visibility on search engines like Google. We use the latest techniques to optimize your site's content, structure, and performance, helping you attract more organic traffic, increase your search rankings, and ultimately drive more business.",
	},
	{
		name: 'Modern framework',
		icon: (
			<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'>
				<path d='M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z'></path>
			</svg>
		),
		description: (
			<>
				Utilizing a modern framework,{' '}
				<Link href='https://nextjs.org/' title='NextJS' className='link'>
					Next.js
				</Link>{' '}
				we build websites that are not only fast and efficient but also scalable and easy to maintain. Next.js is a
				cutting-edge framework that enhances your site&apos;s performance and provides robust support for data handling,
				ensuring a smooth and responsive user experience.
			</>
		),
	},
	{
		name: 'Security',
		description:
			'We implement industry-leading practices to safeguard your data and ensure that your site remains secure against attacks.',
	},
	{
		name: 'Revisions',
		description:
			'We offer revisions until uou are satisfied with the final product. Our goal is your complete satisfaction, we aim to work like a team to fufill your vision.',
	},
	{
		name: 'Hand-Coded',
		description:
			'We custom code all of our websites to offer you a human thought through solution instead of an AI or drag & drop website builder which often lacks performance, accessibilty, and simplicity.',
		icon: (
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
				<path d='m211-480 139 139q19 19 18.5 44.5T349-252q-19 19-44 18.5T261-252L77-435q-9-9-14-21t-5-24q0-12 5-24t14-21l184-184q19-19 44.5-19t44.5 19q19 19 19 45t-19 45L211-480Zm538 0L610-619q-19-19-18.5-44.5T611-708q19-19 44-18.5t44 18.5l184 183q9 9 14 21t5 24q0 12-5 24t-14 21L699-251q-19 19-44.5 19T610-251q-19-19-19-45t19-45l139-139Z' />
			</svg>
		),
	},
];
