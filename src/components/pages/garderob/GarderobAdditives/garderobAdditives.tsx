import styles from './garderobAdditives.module.scss';
import { GarderobBlock } from '@/components';
import categories from '@/fixtures/categories.json';
import { CategoryCardType, CategoryPageType } from '@/types';
import { useGarderobContext } from '@/contexts/GarderobContext';
import numbers from '@/fixtures/numbers.json';
import GarderobTabs from '../GarderobTabs';

const GarderobAdditives = (): JSX.Element => {
	const { isAdded } = useGarderobContext();

	const getItems = (category: any) => {
		if (category.slug === 'personal-na-meropriyatie') {
			return category.items.filter((item: any) => item.isGarderob !== true);
		}

		return category.items;
	};

	const getGarderobItems = () => {
		const personalCategory: any = categories.find(category => category.slug === 'personal-na-meropriyatie');

		if (personalCategory) {
			return personalCategory.items.filter((item: any) => item.isGarderob === true);
		}

		return [];
	};

	return (
		<div className={styles.section}>
			<GarderobBlock
				myId='garderobBlock'
				title='Выберите сотрудника'
				items={getGarderobItems() as CategoryCardType[]}
				isAdded={isAdded}
				visible={true}
			/>
			<GarderobTabs />
		</div>
	);
};

export default GarderobAdditives;
