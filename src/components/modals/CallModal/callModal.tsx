import styles from './callModal.module.scss';
import {Props} from './callModal.props';
import {Dropdown} from '@/components';
import {ChangeEvent, FormEvent, useState, useRef} from 'react';
import classNames from 'classnames';
import {getMaskForNumber} from '@/utilities/helpers';
import Link from 'next/link';
import axios from 'axios';
import useOnClickOutside from '@/hooks/useOnClickOutside';

const items = ['Общение по телефону', 'Написать в Whatsapp', 'Написать в Telegram'];

const CallModal = ({onChangeOpened, title = 'Заявка', button = 'Оставить заявку'}: Props): JSX.Element => {
	const [windowName, setWindowName] = useState<'request' | 'success'>('request');
	const [select, setSelect] = useState<string | number>('Общение по телефону');
	const [phone, setPhone] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const modalRef = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(modalRef, () => onChangeOpened(false));

	const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(getMaskForNumber(e.target.value));

	const handleChangeSelect = (selected: string | number) => {
		setSelect(selected);
	};

	const handleSendRequest = async () => {
		if (phone.length !== 15) {
			setMessage('Для отправки заявки должен быть введен номер.');
		} else {
			setMessage('');

			if (title === 'Оформление') {
				const res: any = await axios.post('/api/order', {phone, select});
				const {success} = res.data;

				if (success) {
					setWindowName('success');
				} else {
					setMessage('Что-то произошло не так! Попробуйте еще раз...');
				}
				return;
			}

			const res: any = await axios.post('/api/calling', {phone, select});
			const {success} = res.data;

			if (success) {
				setWindowName('success');
			} else {
				setMessage('Что-то произошло не так! Попробуйте еще раз...');
			}
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		handleSendRequest();
	};

	const renderRequest = (): JSX.Element => {
		return (
			<>
				<p className={styles.title}>{title}</p>
				<p className={styles.text}>
					Укажите номер телефона и удобную форму общения для вас, наш менеджер свяжется с вами в ближайщее
					время
				</p>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.formGroup}>
						<div className={styles.inputWrapper}>
							<input
								className={styles.input}
								onChange={handleChangePhone}
								value={phone}
								type='tel'
								placeholder='999 999 99 99'
							/>
						</div>
						<Dropdown
							classname={styles.dropdown}
							value={select}
							isBig={true}
							onChangeSort={handleChangeSelect}
							items={items}
						/>
					</div>
					{message.length ? <p className={styles.message}>{message}</p> : null}
					<p className={styles.info}>
						Нажимая на кнопку, соглашаюсь на{' '}
						<Link href='/policy' passHref>
							<a className={styles.privacy} onClick={() => onChangeOpened(false)}>
								обработку персональных данных
							</a>
						</Link>
					</p>
					<button className={styles.button} type='submit'>
						{button}
					</button>
				</form>
			</>
		);
	};

	const renderSuccess = (): JSX.Element => {
		return (
			<>
				<p className={classNames(styles.title, styles.titleMargin)}>Заявка отправлена</p>
				<img className={styles.image} src='/images/smile.png' alt='Success' />
				<p className={styles.text}>Менеджер свяжется с вами в ближайщее время</p>
			</>
		);
	};

	return (
		<div className={styles.wrapper}>
			<div
				ref={modalRef}
				className={classNames(styles.container, windowName === 'success' && styles.successContainer)}
			>
				<span className={classNames(styles.icon, 'icon-close')} onClick={() => onChangeOpened(false)}></span>
				{windowName === 'request' ? renderRequest() : renderSuccess()}
			</div>
		</div>
	);
};

export default CallModal;
