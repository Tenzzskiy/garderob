import styles from './headerSection.module.scss';
import classNames from 'classnames';
import { BasketIcon, LogoIcon, Menu } from '@/components';
import { useState } from 'react';
import Link from 'next/link';
import useScrollFreeze from '@/hooks/useScrollFreeze';
import { SearchBox } from '@/components';
import FavouriteIcon from '../../elements/FavouritesIcon/favouritesIcon'

const HeaderSection = (): JSX.Element => {
	const [opened, setOpened] = useState(false);


	useScrollFreeze(opened);

	const handleOpenMenu = () => setOpened(true);
	const handleCloseMenu = () => setOpened(false);

	return (
		<header className={styles.header}>
			<div className={classNames('container', styles.container)}>
				<div className={styles.left}>
					{opened ? (
						<span
							className={classNames(styles.iconMenu, styles.iconHidden, 'icon-close')}
							onClick={handleCloseMenu}
						/>
					) : (
						<span
							className={classNames(styles.iconMenu, styles.iconHidden, 'icon-align-left')}
							onClick={handleOpenMenu}
						/>
					)}
					<Link href='/' passHref>
						<a>
							<LogoIcon className={styles.logo} />
						</a>
					</Link>
					<Menu isOpened={opened} onCloseMenu={handleCloseMenu} />
				</div>
				<div className={styles.right}>

					<Link href='/favorites' passHref>
						<a className={styles.icon} rel='nofollow'>
							<FavouriteIcon />
						</a>
					</Link>
					<Link href='/basket' passHref>
						<a rel='nofollow'>
							<BasketIcon />
						</a>
					</Link>
				</div>
			</div>

		</header>
	);
};

export default HeaderSection;
