import type { Config } from 'tailwindcss';

export const tailwind: Config['theme'] = {
	colors: {
		link: '#539bf5',
		button: '#0004',
	},
	animation: {
		transition: 'cubic-bezier(0, 1, 0.74, 1) 0.3s',
	},
	gradient: {
		button: 'radial-gradient(circle at 0%, #0003 0%, #0006 100%)',
	},
};
