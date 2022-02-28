import styles from './garderobAbout.module.scss';
import {GarderobTypes, GarderobDescription} from '@/components';
import {useState} from "react";

const GarderobAbout = () => {
	const [active1,setActive1] = useState(true);
	const [active2,setActive2] = useState(false);
	const [active3,setActive3] = useState(true);
	const [active4,setActive4] = useState(false);
	const [active5,setActive5] = useState(true);
	const [active6,setActive6] = useState(false);
	const [color,setColor] = useState('#C4C4C4');
	return (
		<div className={styles.garderobAbout}>
			<GarderobTypes color={color}
						   setColor={setColor} />
			<GarderobDescription active1={active1}
								 active2={active2}
								 active3={active3}
								 active4={active4}
								 active5={active5}
								 active6={active6}
								 setActive1={setActive1}
								 setActive2={setActive2}
								 setActive3={setActive3}
								 setActive4={setActive4}
								 setActive5={setActive5}
								 setActive6={setActive6}
								 color={color}
								 setColor={setColor} />
		</div>
	);
};

export default GarderobAbout;
