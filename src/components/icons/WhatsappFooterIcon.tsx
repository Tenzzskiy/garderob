type Props = {
	className?: string;
};

const WhatsappFooterIcon = ({className}: Props) => {
	return (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<circle cx='16' cy='16' r='16' fill='#FFE200' />
			<path
				d='M15.99 6.00006C10.53 6.00006 6.08 10.4501 6.08 15.9101C6.08 17.6601 6.54 19.3601 7.4 20.8601L6 26.0001L11.25 24.6201C12.7 25.4101 14.33 25.8301 15.99 25.8301C21.45 25.8301 25.9 21.3801 25.9 15.9201C25.9 13.2701 24.87 10.7801 23 8.91006C22.0832 7.98399 20.9912 7.24973 19.7876 6.75011C18.5841 6.25049 17.2931 5.99552 15.99 6.00006V6.00006ZM16 7.67006C18.2 7.67006 20.26 8.53006 21.82 10.0901C22.5856 10.8554 23.1926 11.7644 23.6062 12.7648C24.0197 13.7653 24.2317 14.8375 24.23 15.9201C24.23 20.4601 20.53 24.1501 15.99 24.1501C14.51 24.1501 13.06 23.7601 11.8 23.0001L11.5 22.8301L8.38 23.6501L9.21 20.6101L9.01 20.2901C8.18394 18.9787 7.74701 17.4599 7.75 15.9101C7.76 11.3701 11.45 7.67006 16 7.67006V7.67006ZM12.48 11.3301C12.32 11.3301 12.05 11.3901 11.82 11.6401C11.6 11.8901 10.95 12.5001 10.95 13.7101C10.95 14.9301 11.84 16.1001 11.95 16.2701C12.09 16.4401 13.71 18.9401 16.2 20.0001C16.79 20.2701 17.25 20.4201 17.61 20.5301C18.2 20.7201 18.74 20.6901 19.17 20.6301C19.65 20.5601 20.63 20.0301 20.84 19.4501C21.05 18.8701 21.05 18.3801 20.99 18.2701C20.92 18.1701 20.76 18.1101 20.51 18.0001C20.26 17.8601 19.04 17.2601 18.82 17.1801C18.59 17.1001 18.45 17.0601 18.26 17.3001C18.1 17.5501 17.62 18.1101 17.48 18.2701C17.33 18.4401 17.19 18.4601 16.95 18.3401C16.69 18.2101 15.89 17.9501 14.95 17.1101C14.21 16.4501 13.72 15.6401 13.57 15.3901C13.45 15.1501 13.56 15.0001 13.68 14.8901C13.79 14.7801 13.95 14.6001 14.05 14.4501C14.18 14.3101 14.22 14.2001 14.3 14.0401C14.38 13.8701 14.34 13.7301 14.28 13.6101C14.22 13.5001 13.72 12.2601 13.51 11.7701C13.31 11.2901 13.11 11.3501 12.95 11.3401C12.81 11.3401 12.65 11.3301 12.48 11.3301V11.3301Z'
				fill='#121212'
			/>
		</svg>
	);
};

export default WhatsappFooterIcon;
