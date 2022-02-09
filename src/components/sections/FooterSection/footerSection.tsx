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
import { ADDRESS, EMAIL } from '@/constants';
import useAppDispatch from '@/hooks/useAppDispatch';
import { chooseGarderob } from '@/redux/actions/garderobActions';
import Link from 'next/link';
import { smoothScrollTo } from '@/utilities/helpers';
import { MouseEvent } from 'react';

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
						<ul className={styles.itemList}>

							<Link href='/' passHref>
								<a className={styles.logo}>
									<LogoIcon />
								</a>
							</Link>

							<div className={styles.blockDivider}>
								<p className={styles.rights}>Все права защищены</p>
								<p className={styles.rights}>© 2021 «Выездной гардероб»</p>
							</div>
						</ul>
					</div>
				</div>
				<div className={classNames(styles.block, styles.blockSecond)}>
					<div className={styles.item}>
						<ul className={styles.itemList}>
							<li className={styles.itemListItem}>
								<Link href='/garderob' passHref>
									<a className={styles.itemLink} onClick={() => handleChooseGarderob(1)}>
										Гардероб
									</a>
								</Link>
							</li>
							<li className={styles.itemListItem}>
								<Link href='/catalog/arenda-mebeli' passHref>
									<a className={styles.itemLink}>Мебель</a>
								</Link>
							</li>
							<li className={styles.itemListItem}>
								<Link href='/catalog/personal-na-meropriyatie' passHref>
									<a className={styles.itemLink}>Персонал</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={classNames(styles.block, styles.blockThird)}>
					<ul className={styles.itemList}>
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
						<li className={styles.itemListItem}>
							<Link href='/catalog/kamery-hraneniya-v-arendu' passHref>
								<a className={styles.itemLink}>Камера хранения</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={classNames(styles.block, styles.blockFourth)}>
					<ul className={styles.itemList}>
						<div className={styles.divider}>
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
						</div>
						<li className={classNames(styles.itemListItem, styles.policy)}>
							<Link href='/privacy' passHref>
								<a className={styles.itemLink} rel='nofollow'>
									Политика конфиденциальности
								</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={classNames(styles.block, styles.blockFifth)}>
					<ul className={styles.itemList}>
						<li className={styles.itemListItem}>
							<a className={styles.itemLink} href={`mailto:${EMAIL}`}>
								<svg className={styles.svg} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M2.25732 5.02539C2.25732 4.61118 2.59311 4.27539 3.00732 4.27539H15C15.4142 4.27539 15.75 4.61118 15.75 5.02539V13.5186C15.75 14.347 15.0784 15.0186 14.25 15.0186H3.75C2.92157 15.0186 2.25 14.347 2.25 13.5186V5.26856C2.25 5.23284 2.2525 5.19771 2.25732 5.16332V5.02539ZM3.75 6.69321V13.5186H14.25V6.69346L10.5911 10.3523C9.71244 11.231 8.28782 11.231 7.40914 10.3523L3.75 6.69321ZM4.92924 5.75113H13.071L9.53046 9.29169C9.23757 9.58458 8.76269 9.58458 8.4698 9.29169L4.92924 5.75113Z" fill="#68888C" />
								</svg>
								{EMAIL}
							</a>
						</li>
						<li className={styles.itemListItem}>
							<a className={styles.itemLink} href='#'>
								<svg className={styles.svg} width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M10.2041 7.35058C10.2041 9.00743 8.86096 10.3506 7.20411 10.3506C5.54725 10.3506 4.20411 9.00743 4.20411 7.35058C4.20411 5.69372 5.54725 4.35057 7.20411 4.35057C8.86096 4.35057 10.2041 5.69372 10.2041 7.35058ZM8.70411 7.35058C8.70411 8.179 8.03254 8.85058 7.20411 8.85058C6.37568 8.85058 5.70411 8.179 5.70411 7.35058C5.70411 6.52215 6.37568 5.85057 7.20411 5.85057C8.03254 5.85057 8.70411 6.52215 8.70411 7.35058Z" fill="#68888C" />
									<path fillRule="evenodd" clipRule="evenodd" d="M2.34562 12.0352C-0.354317 9.46463 -0.459213 5.19205 2.11133 2.49211C4.68188 -0.207833 8.95446 -0.312728 11.6544 2.25782C14.3543 4.82837 14.4592 9.10094 11.8887 11.8009L7.2343 16.6896L2.34562 12.0352ZM10.8023 10.7666L7.18224 14.5689L3.37993 10.9488C1.27998 8.94949 1.19839 5.62637 3.19771 3.52642C5.19702 1.42646 8.52014 1.34488 10.6201 3.34419C12.72 5.34351 12.8016 8.66662 10.8023 10.7666Z" fill="#68888C" />
								</svg>
								{ADDRESS}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
