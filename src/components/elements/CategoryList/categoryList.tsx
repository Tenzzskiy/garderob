import styles from './categoryList.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import {Props} from './categoryList.props';

const CategoryList = ({onCloseMenu}: Props): JSX.Element => {
	return (
		<>
			<Link href='/catalog/kamery-hraneniya-v-arendu' passHref>
				<a className={classNames(styles.catalogItem, styles.catalogFirstItem)} onClick={onCloseMenu}>
					<div className={classNames(styles.catalogItemContainer, styles.catalogFirstItemContainer)}>
						<figure className={classNames(styles.catalogItemFigure, styles.catalogFirstItemFigure)}>
							<img
								className={classNames(styles.catalogItemImage, 'lazyload')}
								data-src='/images/catalog-first.png'
								alt='Камера хранения'
							/>
						</figure>
						<div className={styles.catalogItemInfo}>
							<p className={classNames(styles.catalogItemTitle, styles.catalogFirstItemTitle)}>
								Камера хранения
							</p>
							<p className={styles.catalogItemText}>Сейфы, ячейки...</p>
						</div>
					</div>
				</a>
			</Link>
			<Link href='/catalog/personal-na-meropriyatie' passHref>
				<a className={classNames(styles.catalogItem, styles.catalogSecondItem)} onClick={onCloseMenu}>
					<div className={classNames(styles.catalogItemContainer, styles.catalogSecondItemContainer)}>
						<div className={styles.catalogItemInfo}>
							<p className={classNames(styles.catalogItemTitle, styles.catalogSecondItemTitle)}>
								Персонал
							</p>
							<p className={styles.catalogItemText}>Гардеробщики, хостес...</p>
						</div>
						<figure className={classNames(styles.catalogItemFigure, styles.catalogSecondItemFigure)}>
							<img
								className={classNames(styles.catalogItemImage, 'lazyload')}
								data-src='/images/catalog-second.png'
								alt='Персонал'
							/>
						</figure>
					</div>
				</a>
			</Link>
			<Link href='/catalog/arenda-mebeli' passHref>
				<a className={classNames(styles.catalogItem, styles.catalogThirdItem)} onClick={onCloseMenu}>
					<div className={classNames(styles.catalogItemContainer, styles.catalogThirdItemContainer)}>
						<figure className={classNames(styles.catalogItemFigure, styles.catalogThirdItemFigure)}>
							<img
								className={classNames(styles.catalogItemImage, 'lazyload')}
								data-src='/images/catalog-third.png'
								alt='Мебель'
							/>
						</figure>
						<div className={styles.catalogItemInfo}>
							<p className={classNames(styles.catalogItemTitle, styles.catalogThirdItemTitle)}>Мебель</p>
							<p className={styles.catalogItemText}>Диваны, столы, стулья, банкетки...</p>
						</div>
					</div>
				</a>
			</Link>
			<Link href='/catalog/oborudovanie-dlya-grimernoy' passHref>
				<a className={classNames(styles.catalogItem, styles.catalogFourthItem)} onClick={onCloseMenu}>
					<div className={classNames(styles.catalogItemContainer, styles.catalogFourthItemContainer)}>
						<div className={styles.catalogItemInfo}>
							<p className={classNames(styles.catalogItemTitle, styles.catalogFourthItemTitle)}>
								Гримерная
							</p>
							<p className={styles.catalogItemText}>Гримерные столики, ширмы...</p>
						</div>
						<figure className={classNames(styles.catalogItemFigure, styles.catalogFourthItemFigure)}>
							<img
								className={classNames(styles.catalogItemImage, 'lazyload')}
								data-src='/images/catalog-fourth.png'
								alt='Гримерная'
							/>
						</figure>
					</div>
				</a>
			</Link>
			<Link href='/catalog/dezinfeksiya' passHref>
				<a className={classNames(styles.catalogItem, styles.catalogFifthItem)} onClick={onCloseMenu}>
					<div className={classNames(styles.catalogItemContainer, styles.catalogFifthItemContainer)}>
						<figure className={classNames(styles.catalogItemFigure, styles.catalogFifthItemFigure)}>
							<img
								className={classNames(styles.catalogItemImage, 'lazyload')}
								data-src='/images/catalog-fifth.png'
								alt='Дезинфекция'
							/>
						</figure>
						<div className={styles.catalogItemInfo}>
							<p className={classNames(styles.catalogItemTitle, styles.catalogFifthItemTitle)}>
								Дезинфекция
							</p>
							<p className={styles.catalogItemText}>Санитайзеры, термометры...</p>
						</div>
					</div>
				</a>
			</Link>
		</>
	);
};

export default CategoryList;
