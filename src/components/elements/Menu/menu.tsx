import styles from './menu.module.scss';
import {Props} from './menu.props';
import classNames from 'classnames';
import {SearchBox, WhatsappFillIcon, GarderobMenu} from '@/components';
import Link from 'next/link';
import {useState, MouseEvent} from 'react';
import {smoothScrollTo} from '@/utilities/helpers';
import useAppDispatch from '@/hooks/useAppDispatch';
import {chooseGarderob} from '@/redux/actions/garderobActions';
import {MOBILE_PHONE, MOBILE_PHONE_BEAUTY} from '@/constants';

const Menu = ({isOpened, onCloseMenu}: Props): JSX.Element => {
	const [isGarderobOpened, setGarderobOpened] = useState(false);
	const [isCatalogOpened, setCatalogOpened] = useState(false);
	const [isShowedMenu, setShowedMenu] = useState(false);

	const dispatch = useAppDispatch();

	const handleChooseGarderob = (index: number) => {
		dispatch(chooseGarderob(index));
		onCloseMenu();
	};

	const onHandleCloseMenu = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
		onCloseMenu();
		handleMenuMouseOut();

		if (id) {
			smoothScrollTo(id);
			e.stopPropagation();
			e.preventDefault();
		}
	};

	const handleMenuMouseOver = (type: 'garderob' | 'catalog') => {
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

	return (
		<nav className={classNames(styles.menu, isOpened && styles.opened)} onMouseLeave={handleMenuMouseOut}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<p
						className={classNames(styles.link, styles.linkButton)}
						onClick={() => setShowedMenu(!isShowedMenu)}
						onMouseEnter={() => handleMenuMouseOver('garderob')}
					>
						<span>Гардероб</span>
						<span
							className={classNames(
								styles.iconChevron,
								isShowedMenu ? 'icon-chevron-up' : 'icon-chevron-down'
							)}
						></span>
					</p>
					{isGarderobOpened ? (
						<GarderobMenu type='garderob' onCloseMenu={() => setGarderobOpened(false)} />
					) : null}
					{isShowedMenu && (
						<ul className={styles.sublist}>
							<li className={styles.subitem}>
								<Link href='/garderob' passHref>
									<a className={styles.sublink} onClick={() => handleChooseGarderob(0)}>
										Доступный
									</a>
								</Link>
							</li>
							<li className={styles.subitem}>
								<Link href='/garderob' passHref>
									<a className={styles.sublink} onClick={() => handleChooseGarderob(1)}>
										Cтандартный
									</a>
								</Link>
							</li>
							<li className={styles.subitem}>
								<Link href='/garderob' passHref>
									<a className={styles.sublink} onClick={() => handleChooseGarderob(2)}>
										Стильный
									</a>
								</Link>
							</li>
						</ul>
					)}
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
