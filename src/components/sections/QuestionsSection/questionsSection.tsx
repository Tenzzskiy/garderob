import styles from './questionsSection.module.scss';
import {Accordion} from '@/components';
import questions from '@/fixtures/questions.json';
import {QuestionType} from './questionSection.types';
import classNames from 'classnames';

const QuestionsSection = (): JSX.Element => {
	return (
		<section className='section' id='questions'>
			<div className='container'>
				<p className={classNames('sectionTitle', styles.title)}>Часто задаваемые вопросы</p>
				<div className={styles.wrapper}>
					<figure className={styles.figure}>
						<img className={styles.image} src='/images/questions.png' alt='Questions' />
					</figure>
					<Accordion />
				</div>
			</div>
		</section>
	);
};

export default QuestionsSection;
