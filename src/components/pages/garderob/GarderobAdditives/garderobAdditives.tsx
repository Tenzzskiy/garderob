import styles from './garderobAdditives.module.scss';
import {GarderobBlock} from '@/components';
import categories from '@/fixtures/categories.json';
import {CategoryCardType, CategoryPageType} from '@/types';
import {useGarderobContext} from '@/contexts/GarderobContext';
import numbers from '@/fixtures/numbers.json';

const GarderobAdditives = (): JSX.Element => {
	const {isAdded} = useGarderobContext();

	const getItems = (category: any) => {
		if (category.slug === 'personal') {
			return category.items.filter((item: any) => item.isGarderob !== true);
		}

		return category.items;
	};

	const getGarderobItems = () => {
		const personalCategory: any = categories.find(category => category.slug === 'personal');

		if (personalCategory) {
			return personalCategory.items.filter((item: any) => item.isGarderob === true);
		}

		return [];
	};

	return (
		<div className={styles.section}>
			<GarderobBlock
				myId='garderobBlock'
				title='Гардеробщик'
				items={getGarderobItems() as CategoryCardType[]}
				isAdded={isAdded}
				visible={true}
			/>
			<GarderobBlock
				title='Выбор номерков'
				items={numbers as CategoryCardType[]}
				isAdded={isAdded}
				visible={true}
				isDifferent={true}
			/>
			{categories.map(category => {
				return (
					<GarderobBlock
						isAdded={isAdded}
						title={category.name}
						key={category.id}
						items={getItems(category) as CategoryCardType[]}
					/>
				);
			})}
		</div>
	);
};

export default GarderobAdditives;
