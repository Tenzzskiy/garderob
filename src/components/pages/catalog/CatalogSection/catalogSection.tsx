import styles from './catalogSection.module.scss';
import {CatalogMain, CatalogSidebar} from '@/components';
import classNames from 'classnames';
import {Props} from './catalogSection.props';

const CatalogSection = ({category, categories}: Props): JSX.Element => {
	return (
		<section className={classNames('section', styles.section)} id='categoryList'>
			<div className={classNames('container', styles.container)}>
				<p className={classNames('sectionTitle', styles.title)} id='catalog'>Каталог</p>
				<div className={styles.wrapper} key={category.name}>
					<CatalogSidebar categories={categories} slug={category.slug} />
					<CatalogMain category={category} />
				</div>
			</div>
		</section>
	);
};

export default CatalogSection;
