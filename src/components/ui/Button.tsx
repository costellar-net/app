import React from 'react';

interface P extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	icon?: React.ReactNode;
	title: string;
	disabled?: boolean;
}

/**
 * @title
 * @disabled
 * @icon
 */
const Button: React.FC<P> = ({ disabled, icon, className, title, ...rest }) => {
	let styling = 'button';

	if (className) {
		styling += ' ' + className;
	}

	if (disabled) {
		styling += ' disabled';
	}

	return (
		<button aria-label={title} className={styling} {...rest}>
			{icon && icon}
			<p>{title}</p>
		</button>
	);
};

export default Button;
