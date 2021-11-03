type Props = {
	className?: string;
};

const TelegramFooterIcon = ({className}: Props) => {
	return (
		<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...className}>
			<circle cx='16' cy='16' r='16' fill='#FFE200' />
			<path
				d='M24.6646 8.11037L6.93461 14.9474C5.72461 15.4334 5.73161 16.1084 6.71261 16.4094L11.2646 17.8294L21.7966 11.1844C22.2946 10.8814 22.7496 11.0444 22.3756 11.3764L13.8426 19.0774H13.8406L13.8426 19.0784L13.5286 23.7704C13.9886 23.7704 14.1916 23.5594 14.4496 23.3104L16.6606 21.1604L21.2596 24.5574C22.1076 25.0244 22.7166 24.7844 22.9276 23.7724L25.9466 9.54437C26.2556 8.30537 25.4736 7.74437 24.6646 8.11037Z'
				fill='#121212'
			/>
		</svg>
	);
};

export default TelegramFooterIcon;
