import {Props} from './layout.props';
import {HeaderSection, FooterSection, ContactSection} from '@/components';
import {loadScript} from '@/utilities/helpers';
import {useEffect} from 'react';

const Layout = ({children}: Props): JSX.Element => {
	useEffect(() => {
		loadScript('/main.js');
	});

	return (
		<>
			<HeaderSection />
			{children}
			<ContactSection />
			<FooterSection />
			<noscript>
				<div>
					<img
						src='https://mc.yandex.ru/watch/86277172'
						style={{position: 'absolute', left: '-9999px'}}
						alt=''
					/>
				</div>
			</noscript>
		</>
	);
};

export default Layout;
