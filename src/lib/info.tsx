export namespace Sitemap {
	export interface Group {
		title: string;
		description?: string;
		icon?: React.ReactElement;
		link?: string;
		callback?: () => void;
		items?: Item[];
		exempt?: boolean;
	}

	export interface Item {
		title: string;
		description: string;
		icon?: React.ReactElement;
		link?: string;
		callback?: () => void;
		exempt?: boolean;
	}
}

export interface Info {
	name: string;
	slogan: string;
	domain: string;
	logo_src: string;
	copyright?: string;
	sitemap: Sitemap.Group[];
	banner?: {
		text: string;
		url: string;
	};
	contact: {
		email: string;
		phone: string;
		address: string;
	};
	socials?: {
		name: string;
		url: string;
		icon: React.ReactElement;
	}[];
	last_update: Date;
}

export const company_info: Info = {
	name: 'Costellar',
	slogan: 'Modern. Fast. Awesome.',
	logo_src: '/costellar_logo.svg',
	domain: 'https://costellar.net',
	sitemap: [
		{
			title: 'About',
			items: [
				{
					icon: (
						<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
							<path d='m421-443-60-60q-17-17-42-17t-42 17q-17 17-16.5 42t17.5 42l98 98q19.36 19 45.18 19T466-321l211-211q17-17 17-41.5T677-615q-17-17-42-17t-42 17L421-443Zm59 397q-91 0-169.99-34.08-78.98-34.09-137.41-92.52-58.43-58.43-92.52-137.41Q46-389 46-480q0-91 34.08-169.99 34.09-78.98 92.52-137.41 58.43-58.43 137.41-92.52Q389-914 480-914q91 0 169.99 34.08 78.98 34.09 137.41 92.52 58.43 58.43 92.52 137.41Q914-571 914-480q0 91-34.08 169.99-34.09 78.98-92.52 137.41-58.43 58.43-137.41 92.52Q571-46 480-46Z' />
						</svg>
					),
					title: 'Features',
					description: 'The services we provide.',
					link: '/features',
				},
				{
					icon: (
						<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
							<path d='M432-238v9q0 13 9.6 22t22.4 9h33q13 0 22-9.6t9-22.4v-8h32q20.4 0 34.2-13.51Q608-265.02 608-285v-128q0-20.4-13.8-34.2Q580.4-461 560-461H448v-32h113q19.97 0 33.49-13.8Q608-520.6 608-541q0-19.97-13.51-33.49Q580.97-588 561-588h-33v-9q0-13-9.6-22t-22.4-9h-33q-13 0-22 9t-9 22v9h-32q-20.4 0-34.2 13.51Q352-560.97 352-541v128q0 20.4 13.8 34.2Q379.6-365 400-365h112v32H399q-19.98 0-33.49 13.52Q352-305.96 352-285.98T365.8-252q13.8 14 34.2 14h32ZM252-46q-53 0-89.5-36.5T126-172v-616q0-53 36.5-89.5T252-914h342l240 240v502q0 53-36.5 89.5T708-46H252Zm308-742v85q0 26 18.5 44.5T623-640h85L560-788Z' />
						</svg>
					),
					title: 'Quoting',
					description: 'Get a quote & talk with us.',
					link: '/quoting',
				},
			],
		},
		{
			title: 'Resources',
			items: [
				{
					title: 'Terms',
					description: 'Legal Terms of Service.',
					link: '/terms',
				},
				{
					title: 'Privacy',
					description: 'Your privacy matters.',
					link: '/privacy',
				},
			],
		},
	],
	contact: {
		email: 'contact@costellar.net',
		phone: '(716) 427-4280',
		address: '',
	},
	socials: [
		{
			url: 'https://www.tiktok.com/@costellarweb',
			name: 'TikTok',
			icon: (
				<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'>
					<path d='M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z' />
				</svg>
			),
		},
		{
			url: 'https://www.instagram.com/costellarcompany/',
			name: 'Instagram',
			icon: (
				<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'>
					<path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334' />
				</svg>
			),
		},
		{
			url: 'https://x.com/costellarllc',
			name: 'X',
			icon: (
				<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'>
					<path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z' />
				</svg>
			),
		},
	],
	last_update: new Date(2024, 6, 16),
};
