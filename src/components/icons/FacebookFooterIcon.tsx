type Props = {
	className?: string;
};

const FacebookFooterIcon = ({className}: Props) => {
	return (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z'
				fill='#FFE200'
			/>
			<path
				d='M20.022 16.6262H17.167V27.0856H12.8414V16.6262H10.7842V12.9504H12.8414V10.5717C12.8414 8.87066 13.6495 6.20703 17.2055 6.20703L20.4096 6.22044V9.78848H18.0848C17.7035 9.78848 17.1673 9.979 17.1673 10.7904V12.9538H20.3999L20.022 16.6262Z'
				fill='#121212'
			/>
		</svg>
	);
};

export default FacebookFooterIcon;
