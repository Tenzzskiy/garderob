import styles from './contactSection.module.scss';
import classNames from 'classnames';
import {TelegramIcon, WhatsappIcon} from '@/components';
import {CallModal} from '@/components';
import {useState} from 'react';
import useScrollFreeze from '@/hooks/useScrollFreeze';
import {MOBILE_PHONE, MOBILE_PHONE_BEAUTY, TELEGRAM} from '@/constants';

const ContactSection = (): JSX.Element => {
	const [opened, setOpened] = useState(false);

	useScrollFreeze(opened);

	return (
		<>
			<section className={classNames('section', styles.section)} id='contacts'>
				<div className={classNames('container', styles.container)}>
					<figure className={styles.figure}>
						<picture>
							<source srcSet='/images/contact-phone.png' media='(max-width: 992px)' />
							<source srcSet='/images/contact-phone-desktop.png' />
							<img className={styles.image} src='/images/contact-phone-desktop.png' alt='Contact Phone' />
						</picture>
					</figure>
					<div className={styles.right}>
						<p className={styles.title}>Остались вопросы?</p>
						<p className={styles.subtitle}>Звоните нам по телефону</p>
						<a className={styles.number} href={`tel: ${MOBILE_PHONE}`} target='_blank'>
							{MOBILE_PHONE_BEAUTY}
						</a>
						{/* <div className={styles.socialsBlock}>
							<a
								className={classNames(styles.button, styles.buttonBlue)}
								href={`https://telegram.me/${TELEGRAM}`}
								target='_blank'
							>
								<span className={styles.buttonText}>Telegram</span>
								<TelegramIcon className={styles.buttonIcon} />
							</a>
							<a
								className={classNames(styles.button, styles.buttonGreen)}
								href={`https://api.whatsapp.com/send?phone=${MOBILE_PHONE}`}
								target='_blank'
							>
								<span className={styles.buttonText}>WhatsApp</span>
								<WhatsappIcon className={styles.buttonIcon} />
							</a>
						</div> */}
						<p className={styles.text}>
							Пишите нам в мессенджеры или укажите{' '}
							<span className={styles.textButton} onClick={() => setOpened(true)}>
								удобную для вас форму общения
							</span>
							, и мы свяжемся с вами
						</p>
					</div>
				</div>
			</section>
			{opened ? <CallModal onChangeOpened={setOpened} /> : null}
		</>
	);
};

export default ContactSection;
