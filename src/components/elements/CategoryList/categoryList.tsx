import styles from './categoryList.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import { Props } from './categoryList.props';

const CategoryList = ({ onCloseMenu }: Props): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Link href='/garderob' passHref>
				<a className={classNames(styles.catalogItem, styles.catalogItem1)} onClick={onCloseMenu}>
					<div className={classNames(styles.catalogItemContainer, styles.catalogItemContainer1)}>
						<div className={styles.catalogItemInfo}>
							<p className={classNames(styles.catalogItemTitle, styles.catalogItemTitle1)}>
								Гардероб
							</p>
							<p className={styles.catalogItemText}>Вешала, плечики, номерки...</p>
						</div>
						<figure className={classNames(styles.catalogItemFigure, styles.catalogItemFigure1)}>
							<img
								className={classNames(styles.catalogItemImage)}
								src='/images/catalog-six.png'
								alt='Гардероб'
							/>
						</figure>
						<span />
					</div>
				</a>
			</Link>
			<Link href={{ pathname: '/catalog/arenda-mebeli', hash: ('catalog')}} passHref>
				<a className={classNames(styles.catalogItem, styles.catalogItem4)} onClick={onCloseMenu}>
					<div className={classNames(styles.catalogItemContainer, styles.catalogItemContainer4)}>
						<div className={styles.catalogItemInfo}>
							<p className={classNames(styles.catalogItemTitle, styles.catalogItemTitle4)}>
								Мебель
							</p>
							<p className={styles.catalogItemText}>Диваны, столы, стулья, банкетки...</p>
						</div>
						<figure className={classNames(styles.catalogItemFigure, styles.catalogItemFigure4)}>
							<img
								className={classNames(styles.catalogItemImage)}
								src='/images/catalog-third.png'
								alt='Мебель'
							/>
						</figure>
						<span />
					</div>
				</a>
			</Link>
			<Link  href={{ pathname: '/catalog/personal-na-meropriyatie', hash: ('catalog')}} passHref>
				<a className={classNames(styles.catalogItem, styles.catalogItem3)} onClick={onCloseMenu}>
					<div className={classNames(styles.catalogItemContainer, styles.catalogItemContainer3)}>
						<div className={styles.catalogItemInfo}>
							<p className={classNames(styles.catalogItemTitle, styles.catalogItemTitle3)}>
								Персонал
							</p>
							<p className={styles.catalogItemText}>Гардеробщики, хостес...</p>
						</div>
						<figure className={classNames(styles.catalogItemFigure, styles.catalogItemFigure3)}>
							<img
								className={classNames(styles.catalogItemImage)}
								src='/images/catalog-second.png'
								alt='Персонал'
							/>
						</figure>
						<span />
					</div>
				</a>
			</Link>
			<Link href={{ pathname: '/catalog/dezinfeksiya', hash: ('catalog')}}  passHref>
				<a className={classNames(styles.catalogItem, styles.catalogItem6)} onClick={onCloseMenu}>
					<div className={classNames(styles.catalogItemContainer, styles.catalogItemContainer6)}>
						<div className={styles.catalogItemInfo}>
							<p className={classNames(styles.catalogItemTitle, styles.catalogItemTitle6)}>
								Дезинфекция
							</p>
							<p className={styles.catalogItemText}>Санитайзеры, термометры...</p>
						</div>
						<figure className={classNames(styles.catalogItemFigure, styles.catalogItemFigure6)}>
							<img
								className={classNames(styles.catalogItemImage)}
								src='/images/catalog-fifth.png'
								alt='Дезинфекция'
							/>
						</figure>
						<span />
					</div>
				</a>
			</Link>
			<Link href={{ pathname: '/catalog/kamery-hraneniya-v-arendu', hash: ('catalog')}} passHref>
				<a className={classNames(styles.catalogItem, styles.catalogItem2)} onClick={onCloseMenu}>
					<div className={classNames(styles.catalogItemContainer, styles.catalogItemContainer2)}>
						<div className={styles.catalogItemInfo}>
							<p className={classNames(styles.catalogItemTitle, styles.catalogItemTitle2)}>
								Камера хранения
							</p>
							<p className={styles.catalogItemText}>Сейфы, ячейки...</p>
						</div>
						<figure className={classNames(styles.catalogItemFigure, styles.catalogItemFigure2)}>
							<img
								className={classNames(styles.catalogItemImage)}
								src='/images/catalog-first.png'
								alt='Камера хранения'
							/>
						</figure>
						<span />
					</div>
				</a>
			</Link>
			<Link href={{ pathname: '/catalog/oborudovanie-dlya-grimernoy', hash: ('catalog')}} passHref>
				<a className={classNames(styles.catalogItem, styles.catalogItem5)} onClick={onCloseMenu}>
					<div className={classNames(styles.catalogItemContainer, styles.catalogItemContainer5)}>
						<div className={styles.catalogItemInfo}>
							<p className={classNames(styles.catalogItemTitle, styles.catalogItemTitle5)}>
								Гримерная
							</p>
							<p className={styles.catalogItemText}>Гримерные столики, ширмы...</p>
						</div>
						<figure className={classNames(styles.catalogItemFigure, styles.catalogItemFigure5)}>
							<img
								className={classNames(styles.catalogItemImage)}
								src='/images/catalog-fourth.png'
								alt='Гримерная'
							/>
						</figure>
						<span />
					</div>
				</a>
			</Link>
		</div>
	);
};

export default CategoryList;
