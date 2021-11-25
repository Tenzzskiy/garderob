import styles from './garderobMenu.module.scss';
import classNames from 'classnames';
import {Props} from './garderobMenu.props';
import {CategoryList} from '@/components';
import Link from 'next/link';
import useAppDispatch from '@/hooks/useAppDispatch';
import {chooseGarderob} from '@/redux/actions/garderobActions';

const GarderobMenu = ({type, onCloseMenu}: Props): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleChooseGarderob = (index: number) => {
		dispatch(chooseGarderob(index));
		onCloseMenu();
	};

	return (
		<div className={styles.menu}>
			<div className='container'>
				<p className={styles.title}>{type === 'garderob' ? 'Гардероб' : 'Каталог'}</p>
				<div className={classNames(type === 'garderob' ? styles.garderobList : styles.categoryList)}>
					{type === 'garderob' ? (
						<>
							<Link href='/garderob' passHref>
								<a className={styles.item} onClick={() => handleChooseGarderob(0)}>
									<div className={styles.top}>
										<figure className={styles.figure}>
											<img
												className={styles.image}
												src='/images/warderob-first-mobile.jpg'
												alt='Image'
											/>
										</figure>
										<p className={styles.name}>Доступный</p>
									</div>
									<div className={styles.bottom}>
										<span className={styles.description}>1 место/20 ₽</span>
										<p className={styles.more}>
											<span className={styles.moreText}>Подробнее</span>
											<span className={classNames(styles.icon, 'icon-chevron-right')}></span>
										</p>
									</div>
								</a>
							</Link>
							<Link href='/garderob' passHref>
								<a className={styles.item} onClick={() => handleChooseGarderob(1)}>
									<div className={styles.top}>
										<figure className={styles.figure}>
											<img
												className={styles.image}
												src='/images/warderob-second-mobile.jpg'
												alt='Image'
											/>
										</figure>
										<p className={styles.name}>Двухярусный</p>
									</div>
									<div className={styles.bottom}>
										<span className={styles.description}>1 место/25 ₽</span>
										<p className={styles.more}>
											<span className={styles.moreText}>Подробнее</span>
											<span className={classNames(styles.icon, 'icon-chevron-right')}></span>
										</p>
									</div>
								</a>
							</Link>
							<Link href='/garderob' passHref>
								<a className={styles.item} onClick={() => handleChooseGarderob(2)}>
									<div className={styles.top}>
										<figure className={styles.figure}>
											<img
												className={styles.image}
												src='/images/warderob-third-mobile.jpg'
												alt='Image'
											/>
										</figure>
										<p className={styles.name}>Стильный</p>
									</div>
									<div className={styles.bottom}>
										<span className={styles.description}>1 место/30 ₽</span>
										<p className={styles.more}>
											<span className={styles.moreText}>Подробнее</span>
											<span className={classNames(styles.icon, 'icon-chevron-right')}></span>
										</p>
									</div>
								</a>
							</Link>
						</>
					) : (
						<CategoryList onCloseMenu={onCloseMenu} />
					)}
				</div>
			</div>
		</div>
	);
};

export default GarderobMenu;
