import styles from './garderobMain.module.scss';
import classNames from 'classnames';
import {GarderobImage, GarderobAbout, GarderobAdditives} from '@/components';
import {Props} from './garderobMain.props';
import useAppSelector from '@/hooks/useAppSelector';
import {selectAllGarderobs, selectCurrentGarderob} from '@/redux/selectors';
import {GarderobProvider} from '@/contexts/GarderobContext';
import {useEffect, useState} from 'react';

const GarderobMain = ({garderobs}: Props): JSX.Element => {
	const currentIndex = useAppSelector(selectCurrentGarderob);
	const garderobItems = useAppSelector(selectAllGarderobs);

	const [currentGarderob, setCurrentGarderob] = useState<any>({...garderobs[currentIndex], addedDops: []});

	useEffect(() => {
		const foundGarderob = garderobItems.find(item => item.id === garderobs[currentIndex].id);

		if (foundGarderob) {
			setCurrentGarderob(foundGarderob);
		} else {
			setCurrentGarderob(garderobs[currentIndex]);
		}
	}, [garderobItems, currentIndex]);

	return (
		<GarderobProvider value={currentGarderob}>
			<section className={styles.section}>
				<div className={styles.container}>
					<h1 className={classNames('sectionTitle', styles.sectionTitle)}>{currentGarderob.title}</h1>
					<div className={styles.main}>
						<GarderobImage key={currentIndex} />
						<GarderobAbout />
					</div>
					<GarderobAdditives />
				</div>
			</section>
		</GarderobProvider>
	);
};

export default GarderobMain;
