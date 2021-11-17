import {Props} from './dropdown.props';
import styles from './dropdown.module.scss';
import classNames from 'classnames';
import {useState, useRef} from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';

const Dropdown = ({classname, value, onChangeSort, items, small = false, isBig = false}: Props): JSX.Element => {
	const [opened, setOpened] = useState<boolean>(false);

	const buttonRef = useRef<HTMLDivElement | null>(null);

	const handleOpenMenu = () => {
		setOpened(!opened);
	};

	const handleCloseMenu = () => setOpened(false);

	const handleChangeValue = (value: string | number) => {
		onChangeSort(value);
		setOpened(false);
	};

	useOnClickOutside(buttonRef, handleCloseMenu);

	return (
		<div ref={buttonRef} className={classNames(styles.dropdown, classname)}>
			<button
				className={classNames(styles.button, isBig && styles.buttonBig, opened && styles.buttonOpened)}
				onClick={handleOpenMenu}
				type='button'
				disabled={items.length ? false : true}
			>
				<span>{value}</span>
				<span className={classNames(styles.icon, opened ? 'icon-chevron-up' : 'icon-chevron-down')} />
			</button>
			{opened && (
				<ul className={styles.menu}>
					{items.map((child, index) => {
						return (
							<li className={styles.item} key={index} onClick={() => handleChangeValue(child)}>
								{child}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
