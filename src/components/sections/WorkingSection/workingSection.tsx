import styles from './workingSection.module.scss';
import {WorkingCard} from '@/components';
import classNames from 'classnames';
import {Props} from './workingSection.props';

const WorkingSection = ({color, working}: Props): JSX.Element => {
	return (
		<section className={classNames(styles.working, 'section')}>
			<div className='container'>
				<p className={classNames(styles.workingTitle, 'sectionTitle')}>Как мы работаем</p>
				<div className={styles.workingGroup}>
					<WorkingCard title={working.stepTitle} text={working.stepText} color={color} />
					<WorkingCard
						title='Обсуждение деталей'
						text='Наши менеджеры подскажут информацию и помогут определиться с выбором'
						color={color}
					/>
					<WorkingCard
						title='Доставка и подготовка'
						text='Выезд обслуживающего персонала на площадку и подготовка к работе'
						color={color}
					/>
					<WorkingCard
						title='Мероприятие'
						text='Поможем вашим гостям получить удовольствие от нашей работы'
						color={color}
					/>
				</div>
			</div>
		</section>
	);
};

export default WorkingSection;
