import {GarderobMain} from '@/components';
import {Props} from './garderobPage.props';

const GarderobPage = ({garderobs}: Props): JSX.Element => {
	return (
		<>
			<GarderobMain garderobs={garderobs} />
		</>
	);
};

export default GarderobPage;
