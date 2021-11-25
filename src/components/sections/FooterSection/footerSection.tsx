import styles from './footerSection.module.scss';
import classNames from 'classnames';
import {
	LogoIcon,
	VkontakteFooterIcon,
	InstagramFooterIcon,
	FacebookFooterIcon,
	TelegramFooterIcon,
	WhatsappFooterIcon
} from '@/components';
import {ADDRESS, EMAIL} from '@/constants';
import useAppDispatch from '@/hooks/useAppDispatch';
import {chooseGarderob} from '@/redux/actions/garderobActions';
import Link from 'next/link';
import {smoothScrollTo} from '@/utilities/helpers';
import {MouseEvent} from 'react';

const FooterSection = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleChooseGarderob = (index: number) => {
		dispatch(chooseGarderob(index));
	};

	const onScrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
		smoothScrollTo(id);
		e.stopPropagation();
		e.preventDefault();
	};

	return (
		<footer className={styles.footer}>
			<div className={classNames('container', styles.footerContainer)}>
				<div className={classNames(styles.block, styles.blockFirst)}>
					<div className={styles.item}>
						<p className={styles.itemTitle}>Гардероб</p>
						<ul className={styles.itemList}>
							<li className={styles.itemListItem}>
								<Link href='/garderob' passHref>
									<a className={styles.itemLink} onClick={() => handleChooseGarderob(0)}>
										Доступный
									</a>
								</Link>
							</li>
							<li className={styles.itemListItem}>
								<Link href='/garderob' passHref>
									<a className={styles.itemLink} onClick={() => handleChooseGarderob(1)}>
										Стандартный
									</a>
								</Link>
							</li>
							<li className={styles.itemListItem}>
								<Link href='/garderob' passHref>
									<a className={styles.itemLink} onClick={() => handleChooseGarderob(2)}>
										Стильный
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={classNames(styles.block, styles.blockSecond)}>
					<div className={styles.item}>
						<p className={styles.itemTitle}>Каталог</p>
						<ul className={styles.itemList}>
							<li className={styles.itemListItem}>
								<Link href='/catalog/arenda-mebeli' passHref>
									<a className={styles.itemLink}>Мебель</a>
								</Link>
							</li>
							<li className={styles.itemListItem}>
								<Link href='/catalog/kamery-hraneniya-v-arendu' passHref>
									<a className={styles.itemLink}>Камера хранения</a>
								</Link>
							</li>
							<li className={styles.itemListItem}>
								<Link href='/catalog/personal-na-meropriyatie' passHref>
									<a className={styles.itemLink}>Персонал</a>
								</Link>
							</li>
							<li className={styles.itemListItem}>
								<Link href='/catalog/oborudovanie-dlya-grimernoy' passHref>
									<a className={styles.itemLink}>Гримерная</a>
								</Link>
							</li>
							<li className={styles.itemListItem}>
								<Link href='/catalog/dezinfeksiya' passHref>
									<a className={styles.itemLink}>Дезинфекция</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={classNames(styles.block, styles.blockThird)}>
					{/* <p className={styles.itemTitle}>Социальные сети</p> */}
					<ul className={styles.itemList}>
						{/* <li className={classNames(styles.itemListItem, styles.itemListItemFlex)}>
							<a className={styles.itemListIconLink} href='#' target='_blank'>
								<VkontakteFooterIcon />
							</a>
							<a className={styles.itemListIconLink} href='#' target='_blank'>
								<InstagramFooterIcon />
							</a>
							<a className={styles.itemListIconLink} href='#' target='_blank'>
								<FacebookFooterIcon />
							</a>
							<a className={styles.itemListIconLink} href='#' target='_blank'>
								<TelegramFooterIcon />
							</a>
							<a className={styles.itemListIconLink} href='#' target='_blank'>
								<WhatsappFooterIcon />
							</a>
						</li> */}
						<li className={styles.itemListItem}>
							<a className={styles.itemLink} href='#questions' onClick={e => onScrollTo(e, 'questions')}>
								Вопросы
							</a>
						</li>
						<li className={styles.itemListItem}>
							<Link href='/novosti' passHref>
								<a className={styles.itemLink}>Новости</a>
							</Link>
						</li>
						<li className={styles.itemListItem}>
							<Link href='/privacy' passHref>
								<a className={styles.itemLink} rel='nofollow'>
									Политика конфиденциальности
								</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={classNames(styles.block, styles.blockFourth)}>
					<ul className={styles.itemList}>
						<li className={styles.itemListItem}>
							<a className={styles.itemLink} href={`mailto:${EMAIL}`}>
								{EMAIL}
							</a>
						</li>
						<li className={styles.itemListItem}>
							<a className={styles.itemLink} href='#'>
								{ADDRESS}
							</a>
						</li>
					</ul>
				</div>
				<div className={classNames(styles.block, styles.blockLine, styles.blockFifth)}>
					<Link href='/' passHref>
						<a>
							<LogoIcon />
						</a>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
