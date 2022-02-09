import { CSSProperties } from 'react';

type Props = {
	className?: string;
	firstColor: string;
	secondColor: string;
};

const ThermometerIcon = ({ className, firstColor, secondColor }: Props) => {
	return (
		<svg className={className} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_215_923)">
				<path d="M19.5289 22.5932L19.0314 25.4145C18.9007 26.1545 18.3447 26.7543 17.6168 26.9417C17.3281 27.0156 17.0651 27.0826 16.8254 27.1445C16.7746 28.0778 16.7222 28.981 16.6689 29.8472C17.0857 29.7398 17.6057 29.6057 18.2571 29.439C19.9638 29.0007 21.264 27.5974 21.57 25.8623C21.6094 25.6389 22.2603 21.9501 22.3039 21.7012C20.9472 22.013 20.3823 22.0929 19.5289 22.5932Z" fill="#121212" />
				<path d="M23.6717 5.32422H4.92021C2.89896 5.32422 1.21974 6.84102 1.01435 8.85195C0.538342 13.5098 0.79031 11.045 0.0209119 18.5706C-0.102838 19.7763 0.326849 20.9511 1.19826 21.7933L1.37529 21.9652C2.12896 22.693 2.52427 23.7088 2.4624 24.7538L1.25412 39.8127C1.19465 40.564 1.78856 41.2048 2.53888 41.2048H12.0289C12.6932 41.2048 13.2483 40.6995 13.3119 40.0387C13.3179 39.9837 13.8499 34.4227 14.2581 26.8636C14.454 23.2276 17.0511 20.2645 20.4619 19.479L23.6717 5.32422ZM17.094 13.5888H11.295C10.5834 13.5888 10.0059 13.0113 10.0059 12.2998C10.0059 11.5882 10.5834 11.0107 11.295 11.0107H17.094C17.8056 11.0107 18.3831 11.5882 18.3831 12.2998C18.3831 13.0113 17.8056 13.5888 17.094 13.5888Z" fill="#121212" />
				<path d="M30.7156 5.32422H26.3156L23.1514 19.2745H28.1375C28.7399 19.2745 29.2615 18.8577 29.3947 18.2707L30.7482 12.2998L31.9729 6.89859C32.0597 6.51617 31.9677 6.1157 31.7228 5.80891C31.4787 5.50297 31.1075 5.32422 30.7156 5.32422Z" fill="#121212" />
				<path d="M36.2057 7.16947C35.6987 6.67017 34.8823 6.67619 34.383 7.18236C33.8828 7.68939 33.8889 8.50579 34.3959 9.00595C35.2845 9.88165 35.7743 11.0521 35.7743 12.2999C35.7743 13.5477 35.2845 14.7181 34.3959 15.5938C33.8889 16.094 33.8828 16.9104 34.383 17.4173C34.8832 17.9244 35.699 17.9301 36.2057 17.4302C37.5902 16.0656 38.3525 14.2438 38.3525 12.2999C38.3525 10.356 37.5902 8.53415 36.2057 7.16947Z" fill="#121212" />
				<path d="M40.2194 3.17066C39.7158 2.66707 38.9003 2.66707 38.3967 3.17066C37.8931 3.6734 37.8922 4.4898 38.3958 4.99331C40.3475 6.94581 41.4225 9.54113 41.4225 12.3005C41.4225 15.0599 40.3474 17.6552 38.3958 19.6077C37.8922 20.1113 37.8931 20.9277 38.3967 21.4304C38.8984 21.9338 39.7146 21.9353 40.2194 21.4304C42.6574 18.9906 44.0006 15.7483 44.0006 12.3005C44.0006 8.85277 42.6574 5.61034 40.2194 3.17066Z" fill="#121212" />
			</g>
			<defs>
				<clipPath id="clip0_215_923">
					<rect width="44" height="44" fill="white" />
				</clipPath>
			</defs>
		</svg>

	);
};

export default ThermometerIcon;
