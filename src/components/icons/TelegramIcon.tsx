type Props = {
	className?: string;
};

const TelegramIcon = ({className}: Props) => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M13.7767 2.47788L1.95669 7.03588C1.15002 7.35988 1.15469 7.80988 1.80869 8.01055L4.84336 8.95721L11.8647 4.52721C12.1967 4.32521 12.5 4.43388 12.2507 4.65521L6.56202 9.78921H6.56069L6.56202 9.78988L6.35269 12.9179C6.65936 12.9179 6.79469 12.7772 6.96669 12.6112L8.44069 11.1779L11.5067 13.4425C12.072 13.7539 12.478 13.5939 12.6187 12.9192L14.6314 3.43388C14.8374 2.60788 14.316 2.23388 13.7767 2.47788V2.47788Z'
				fill='white'
			/>
		</svg>
	);
};

export default TelegramIcon;
