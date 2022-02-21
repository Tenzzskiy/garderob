type Props = {
	className?: string;
	color: string;
};

const HangerIcon = ({className, color}: Props) => {
	return (
		<svg width="44" height="44" viewBox="0 0 44 44" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="22" cy="22" r="22" fill={color}/>
			<path d="M33.806 25.1938L23.5 21.2298V20.6638C23.4949 20.5805 23.5126 20.4974 23.5511 20.4234C23.5897 20.3494 23.6478 20.2873 23.719 20.2438C24.6713 19.8526 25.4602 19.1461 25.9538 18.2426C26.4473 17.3391 26.6154 16.2935 26.43 15.2808C26.2896 14.5049 25.9478 13.7796 25.4389 13.1774C24.9299 12.5751 24.2717 12.1172 23.5301 11.8495C22.7885 11.5817 21.9895 11.5135 21.2133 11.6517C20.437 11.7899 19.7107 12.1296 19.107 12.6368C18.045 13.5298 16.635 16.0538 18.033 17.2368C18.3219 17.4745 18.6885 17.5969 19.0623 17.5803C19.436 17.5636 19.7904 17.4092 20.057 17.1468C20.691 16.5128 20.327 15.5358 21.037 14.9398C21.2029 14.8011 21.3968 14.6999 21.6054 14.6431C21.8141 14.5863 22.0325 14.5753 22.2458 14.6108C22.4591 14.6464 22.6622 14.7276 22.8412 14.849C23.0201 14.9703 23.1708 15.1289 23.2827 15.3139C23.3946 15.4989 23.4653 15.706 23.4897 15.9208C23.5142 16.1357 23.4919 16.3533 23.4244 16.5587C23.3569 16.7641 23.2457 16.9525 23.0986 17.111C22.9515 17.2695 22.7719 17.3943 22.572 17.4768C21.9496 17.7428 21.4203 18.1878 21.0514 18.7553C20.6825 19.3227 20.4905 19.987 20.5 20.6638V21.2298L10.194 25.1938C9.5499 25.4447 8.9962 25.8836 8.60491 26.4534C8.21362 27.0232 8.00284 27.6976 8 28.3888V28.9888C8.00106 29.8963 8.36204 30.7664 9.00374 31.4081C9.64545 32.0498 10.5155 32.4108 11.423 32.4118H32.577C33.4842 32.4108 34.3539 32.0501 34.9956 31.4088C35.6372 30.7675 35.9984 29.898 36 28.9908V28.3908C35.9976 27.6993 35.787 27.0244 35.3957 26.4542C35.0043 25.884 34.4504 25.4448 33.806 25.1938ZM33 28.9908C33 29.103 32.9554 29.2106 32.8761 29.2899C32.7968 29.3693 32.6892 29.4138 32.577 29.4138H11.423C11.3108 29.4138 11.2032 29.3693 11.1239 29.2899C11.0446 29.2106 11 29.103 11 28.9908V28.3908C11.0002 28.3054 11.0262 28.222 11.0745 28.1515C11.1229 28.081 11.1914 28.0268 11.271 27.9958L21.848 23.9278C21.9446 23.8909 22.0514 23.8909 22.148 23.9278L32.725 27.9958C32.8046 28.0268 32.8731 28.081 32.9215 28.1515C32.9698 28.222 32.9958 28.3054 32.996 28.3908L33 28.9908Z" fill="white"/>
		</svg>

	);
};
export const SecondIcon = ({className, color}: Props) => {
	return (
		<svg
			className={className}
			width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="22" cy="22" r="22" fill={color}/>
			<path d="M26.2291 18.0928C26.076 18.033 25.9614 17.9031 25.9236 17.7438C25.8846 17.5846 25.9252 17.4163 26.032 17.2926C26.7966 16.4128 27.2596 15.2631 27.2596 14.0061C27.2596 11.2458 25.0217 9 22.2722 9C20.0806 9 18.2176 10.4281 17.5524 12.4057C17.44 12.7423 17.4942 13.1122 17.7026 13.4013C17.9093 13.6893 18.2425 13.8604 18.5977 13.8604C19.0562 13.8604 19.46 13.565 19.6 13.1291C19.9671 11.9918 21.0219 11.1656 22.2716 11.1656C23.8274 11.1656 25.0923 12.4402 25.0923 14.0061C25.0923 14.8673 24.6569 15.8188 24.1205 16.1875C23.5405 16.5873 18.3436 18.1053 18.3436 18.1053C17.3474 18.4825 16.6816 19.4368 16.6816 20.5024V32.4227C16.6816 33.8378 17.8438 34.9994 19.2584 34.9994H25.2849C26.7011 34.9994 27.861 33.8373 27.861 32.4227V20.4781C27.8605 19.4244 27.2099 18.4785 26.2291 18.0928Z" fill="white"/>
			<path d="M23.1035 27.192C22.8142 26.9027 22.4455 26.758 21.9975 26.758C21.5495 26.758 21.1808 26.9027 20.8915 27.192C20.6022 27.4813 20.4575 27.8593 20.4575 28.326C20.4575 28.746 20.5975 29.11 20.8775 29.418C21.1575 29.7353 21.5308 29.894 21.9975 29.894C22.4642 29.894 22.8375 29.7353 23.1175 29.418C23.3975 29.11 23.5375 28.746 23.5375 28.326C23.5375 27.8593 23.3928 27.4813 23.1035 27.192ZM23.0195 23.146C22.7488 22.894 22.4082 22.768 21.9975 22.768C21.5868 22.768 21.2462 22.894 20.9755 23.146C20.7142 23.4073 20.5835 23.7527 20.5835 24.182C20.5835 24.5833 20.7095 24.91 20.9615 25.162C21.2228 25.442 21.5682 25.582 21.9975 25.582C22.4268 25.582 22.7722 25.442 23.0335 25.162C23.2855 24.91 23.4115 24.5833 23.4115 24.182C23.4115 23.7527 23.2808 23.4073 23.0195 23.146ZM23.5375 26.142C23.9575 26.3193 24.2842 26.5713 24.5175 26.898C24.7975 27.2713 24.9375 27.738 24.9375 28.298C24.9375 29.11 24.6902 29.7727 24.1955 30.286C23.6542 30.8647 22.9215 31.154 21.9975 31.154C21.0735 31.154 20.3408 30.8647 19.7995 30.286C19.3048 29.7727 19.0575 29.11 19.0575 28.298C19.0575 27.738 19.1975 27.2713 19.4775 26.898C19.7108 26.5713 20.0375 26.3193 20.4575 26.142C20.1215 26.002 19.8462 25.7687 19.6315 25.442C19.4075 25.0873 19.2955 24.6627 19.2955 24.168C19.2955 23.3747 19.5568 22.726 20.0795 22.222C20.5835 21.746 21.2228 21.508 21.9975 21.508C22.7722 21.508 23.4115 21.746 23.9155 22.222C24.4382 22.726 24.6995 23.3747 24.6995 24.168C24.6995 24.6627 24.5875 25.0873 24.3635 25.442C24.1488 25.7687 23.8735 26.002 23.5375 26.142Z" fill="#FB8F00"/>
		</svg>


	);
};
export const ThirdIcon = ({className, color}: Props) => {
	return (
		<svg
			className={className}
			width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="22" cy="22" r="22" fill={color}/>
			<path d="M33.8258 33.3817V33.7403L34.1655 33.8553C34.8725 34.0945 35.3988 34.7256 35.487 35.4863H34.84C34.7323 34.8656 34.1903 34.3926 33.5391 34.3926H33.4719C32.8207 34.3926 32.2786 34.8656 32.171 35.4863H31.524C31.6121 34.7255 32.1385 34.0945 32.8454 33.8553L33.1852 33.7403V33.3817V31.2198V30.7198H32.6852H11.3148H10.8148V31.2198V33.3817V33.7403L11.1545 33.8553C11.8615 34.0945 12.3879 34.7255 12.476 35.4863H11.829C11.7214 34.8656 11.1793 34.3926 10.5281 34.3926H10.4609C9.80971 34.3926 9.26767 34.8656 9.16004 35.4863H8.51304C8.60118 34.7256 9.12754 34.0945 9.83448 33.8553L10.1742 33.7403V33.3817V10.4746C10.1742 9.39379 11.0543 8.51367 12.1351 8.51367H31.8649C32.9457 8.51367 33.8258 9.39379 33.8258 10.4746V33.3817Z" stroke="white"/>
			<rect x="9.75" y="9.75" width="1.75" height="21" fill="white"/>
			<path d="M32.5 8.875L33.8125 9.75L34.25 30.75H32.5V8.875Z" fill="white"/>
			<rect x="10.625" y="29.875" width="22.75" height="0.875" fill="white"/>
			<rect x="10.625" y="8.875" width="21.875" height="2.625" fill="white"/>
		</svg>

	);
};
export const FourthIcon = ({className, color}: Props) => {
	return (
		<svg
			className={className}
			width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="22" cy="22" r="22" fill={color}/>
			<g clipPath="url(#clip0_1815_6426)">
				<path d="M30.366 24.789C29.8083 24.789 29.3901 24.9284 28.9718 24.9284L24.9287 20.8853L28.2747 17.5392L32.5967 16.0056L35.8033 10.8471C35.9428 10.5683 35.9428 10.15 35.8033 10.0106L34.1303 8.3376C33.8515 8.05877 33.4332 8.05877 33.1544 8.19819L27.8565 11.2654L26.1835 15.7268L22.8374 19.0728L19.0731 15.0297C19.0731 14.6114 19.2125 14.1932 19.2125 13.6355C19.2125 10.0106 15.7271 7.36167 12.2416 8.19819L14.3329 10.2895C15.4482 11.4048 15.4482 13.0778 14.3329 14.1932C13.2175 15.3085 11.5445 15.3085 10.4291 14.1932L8.19845 12.2413C7.0831 16.2845 10.8474 20.1882 15.03 18.9334L19.0731 22.9765L17.4001 24.6496C16.4241 24.3707 15.4482 24.6496 14.7511 25.3467L9.03496 31.0628C7.91961 32.1782 7.78019 33.8512 8.75612 34.9665C9.87147 36.2213 11.6839 36.2213 12.7993 35.106L18.6548 29.2504C19.3519 28.5533 19.6308 27.4379 19.3519 26.6014L21.025 24.9284L25.0681 28.9715C24.9287 29.3898 24.9287 29.9475 24.9287 30.3657C24.9287 33.9906 28.4142 36.6396 31.8996 35.803L29.8083 33.7118C28.693 32.5964 28.693 30.9234 29.8083 29.8081C30.9237 28.6927 32.5967 28.6927 33.7121 29.8081L35.8033 31.8993C36.7793 28.2744 33.9909 24.789 30.366 24.789Z" fill="white"/>
			</g>
			<defs>
				<clipPath id="clip0_1815_6426">
					<rect width="28" height="28" fill="white" transform="translate(8 8)"/>
				</clipPath>
			</defs>
		</svg>


	);
};



export default HangerIcon;
