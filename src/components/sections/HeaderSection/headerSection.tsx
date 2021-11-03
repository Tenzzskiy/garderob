import styles from './headerSection.module.scss';
import classNames from 'classnames';
import {BasketIcon, LogoIcon, Menu} from '@/components';
import {useState} from 'react';
import Link from 'next/link';
import useScrollFreeze from '@/hooks/useScrollFreeze';
import {SearchBox} from '@/components';

const HeaderSection = (): JSX.Element => {
	const [opened, setOpened] = useState(false);
	const [searchOpened, setSearchOpened] = useState(false);

	useScrollFreeze(opened);

	const handleOpenMenu = () => setOpened(true);
	const handleCloseMenu = () => setOpened(false);

	return (
		<header className={styles.header}>
			<div className={classNames('container', styles.container)}>
				<div className={styles.left}>
					{opened ? (
						<span
							className={classNames(styles.icon, styles.iconHidden, 'icon-close')}
							onClick={handleCloseMenu}
						/>
					) : (
						<span
							className={classNames(styles.icon, styles.iconHidden, 'icon-align-left')}
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
					<span
						className={classNames(styles.icon, styles.desktopHidden, 'icon-search')}
						onClick={() => setSearchOpened(true)}
					/>
					<Link href='/favorites' passHref>
						<a className={styles.icon}>
							<span className={classNames(styles.icon, styles.iconHover, 'icon-heart')} />
						</a>
					</Link>
					<Link href='/basket' passHref>
						<a>
							<BasketIcon />
						</a>
					</Link>
				</div>
			</div>
			{searchOpened && <SearchBox mobile={true} onCloseMenu={() => setSearchOpened(false)} />}
		</header>
	);
};

export default HeaderSection;
