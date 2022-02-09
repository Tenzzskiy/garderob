import { Props } from './advantageCard.props';
import classNames from 'classnames';
import styles from './advantageCard.module.scss';
import { CSSProperties, useState } from 'react';
import { CameraIcon, BanketIcon, ThermometerIcon, MirrorIcon } from '@/components';

const AdvantageCard = ({
	image,
	title,
	description,
	color,
	rectangleColor,
	maskColor,
	number,
	className
}: Props): JSX.Element => {
	const getIcon = (number: string): JSX.Element => {
		if (number === 'first') {
			return <CameraIcon className={styles.image} firstColor={rectangleColor} secondColor={maskColor} />;
		}
		if (number === 'second') {
			return <ThermometerIcon className={styles.image} firstColor={rectangleColor} secondColor={maskColor} />;
		}
		if (number === 'third') {
			return <BanketIcon className={styles.image} firstColor={rectangleColor} secondColor={maskColor} />;
		} else {
			return <MirrorIcon className={styles.image} firstColor={rectangleColor} secondColor={maskColor} />;
		}
	};

	const [imgStatus, setImgStatus] = useState(false);

	return (
		<div className={classNames(styles.wrapper, className)} style={{ '--color': color } as CSSProperties}
			onMouseEnter={() => setImgStatus(true)}
			onMouseLeave={() => setImgStatus(false)}>
			<div className={styles.inner}>
				{getIcon(number)}
				<p className={styles.title}>{title}</p>
				<div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
			</div>

			{imgStatus && (
				<img className={styles.img}
					src={image} />
			)}
		</div>
	);
};

export default AdvantageCard;
