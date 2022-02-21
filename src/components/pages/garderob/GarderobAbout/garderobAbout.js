import styles from './garderobAbout.module.scss';
import {GarderobTypes, GarderobDescription} from '@/components';
import {useState} from "react";

const GarderobAbout = () => {
	const [active1,setActive1] = useState(true);
	const [active2,setActive2] = useState(false);
	const [color,setColor] = useState('#C4C4C4');
	return (
		<div className={styles.garderobAbout}>
			<GarderobTypes active1={active1}
						   active2={active2}
						   setActive1={setActive1}
						   setActive2={setActive2}
						   color={color}
						   setColor={setColor} />
			<GarderobDescription active1={active1} active2={active2} setActive1={setActive1} setActive2={setActive2} color={color} setColor={setColor} />
		</div>
	);
};

export default GarderobAbout;
