import styles from './menu.module.scss';

import classNames from 'classnames';
import { SearchBox, WhatsappFillIcon, GarderobMenu } from '@/components';
import Link from 'next/link';
import { useState, MouseEvent } from 'react';
import { smoothScrollTo } from '@/utilities/helpers';
import useAppDispatch from '@/hooks/useAppDispatch';
import { chooseGarderob } from '@/redux/actions/garderobActions';
import { MOBILE_PHONE, MOBILE_PHONE_BEAUTY } from '@/constants';
import useWindowSize from "@/hooks/useWindowSize";

const Menu = ({ isOpened, onCloseMenu }) => {
	const [isGarderobOpened, setGarderobOpened] = useState(false);
	const [isCatalogOpened, setCatalogOpened] = useState(false);
	const [isShowedMenu, setShowedMenu] = useState(false);

	const dispatch = useAppDispatch();

	const handleChooseGarderob = (index) => {
		dispatch(chooseGarderob(index));
		onCloseMenu();
	};

	const onHandleCloseMenu = (e, id) => {
		onCloseMenu();
		handleMenuMouseOut();

		if (id) {
			smoothScrollTo(id);
			e.stopPropagation();
			e.preventDefault();
		}
	};

	const handleMenuMouseOver = (type) => {
		if (type === 'garderob') {
			setGarderobOpened(true);
			setCatalogOpened(false);
		} else {
			setCatalogOpened(true);
			setGarderobOpened(false);
		}
	};

	const handleMenuMouseOut = () => {
		setGarderobOpened(false);
		setCatalogOpened(false);
	};
	const [searchOpened, setSearchOpened] = useState(true);
	// @ts-ignore
	return (
		<nav className={classNames(styles.menu, isOpened && styles.opened)} onMouseLeave={handleMenuMouseOut}>
			<ul className={styles.list}>
				<li> 	{searchOpened && <SearchBox mobile={true} onCloseMenu={() => setSearchOpened(false)} />}
					{useWindowSize().width < 1000 ? <span
						className={classNames(styles.icon, styles.desktopHidden, 'icon-search')}
						onClick={() => setSearchOpened(true)}
					/> : null}
				</li>
				<li className={classNames(styles.item, styles.itemMobileHidden)}>
					<p
						className={styles.link}
						onClick={onCloseMenu}
						onMouseEnter={() => handleMenuMouseOver('catalog')}
					>
						Каталог
					</p>
					{isCatalogOpened ? (
						<GarderobMenu type='catalog' onCloseMenu={() => setCatalogOpened(false)} />
					) : null}
				</li>
				<li className={classNames(styles.item, styles.itemHidden)}>
					<Link href='/garderob' passHref>
						<a className={styles.link} onClick={onCloseMenu}>
							Гардероб
						</a>
					</Link>
				</li>
				<li className={classNames(styles.item, styles.itemHidden)}>
					<Link href='/catalog/arenda-mebeli' passHref>
						<a className={styles.link} onClick={onCloseMenu}>
							Мебель
						</a>
					</Link>
				</li>
				<li className={classNames(styles.item, styles.itemHidden)}>
					<Link href='/catalog/kamery-hraneniya-v-arendu' passHref>
						<a className={styles.link} onClick={onCloseMenu}>
							Камера хранения
						</a>
					</Link>
				</li>
				<li className={classNames(styles.item, styles.itemHidden)}>
					<Link href='/catalog/personal-na-meropriyatie' passHref>
						<a className={styles.link} onClick={onCloseMenu}>
							Персонал
						</a>
					</Link>
				</li>
				<li className={classNames(styles.item, styles.itemHidden)}>
					<Link href='/catalog/oborudovanie-dlya-grimernoy' passHref>
						<a className={styles.link} onClick={onCloseMenu}>
							Гримерная
						</a>
					</Link>
				</li>
				<li className={classNames(styles.item, styles.itemHidden)}>
					<Link href='/catalog/dezinfeksiya' passHref>
						<a className={styles.link} onClick={onCloseMenu}>
							Дезинфекция
						</a>
					</Link>
				</li>
				<li className={styles.item}>
					<Link href='#questions' passHref>
						<a className={styles.link} onClick={e => onHandleCloseMenu(e, 'questions')}>
							Вопросы
						</a>
					</Link>
				</li>
				<li className={classNames(styles.item, styles.itemMargin)}>
					<Link href='#contacts' passHref>
						<a className={styles.link} onClick={e => onHandleCloseMenu(e, 'contacts')}>
							Контакты
						</a>
					</Link>
				</li>
				<li className={classNames(styles.item, styles.itemMobileHidden)} onClick={handleMenuMouseOut}>
					<SearchBox />
				</li>
				<li className={classNames(styles.item, styles.itemTabletsHidden)}>
					<Link href={`tel:${MOBILE_PHONE}`} passHref>
						<a className={classNames(styles.link, styles.linkFlex)} onClick={onCloseMenu}>
							<span className={styles.textMargin}>{MOBILE_PHONE_BEAUTY}</span>
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
