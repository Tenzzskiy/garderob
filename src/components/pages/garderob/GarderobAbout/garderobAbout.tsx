import styles from './garderobAbout.module.scss';
import {GarderobTypes, GarderobDescription} from '@/components';

const GarderobAbout = (): JSX.Element => {
	return (
		<div className={styles.garderobAbout}>
			<GarderobTypes />
			<GarderobDescription />
		</div>
	);
};

export default GarderobAbout;
