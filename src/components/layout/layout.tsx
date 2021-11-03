import {Props} from './layout.props';
import {HeaderSection, FooterSection, ContactSection} from '@/components';

const Layout = ({children}: Props): JSX.Element => {
	return (
		<>
			<HeaderSection />
			{children}
			<ContactSection />
			<FooterSection />
		</>
	);
};

export default Layout;
