import styles from './searchBox.module.scss';
import {Props} from './searchBox.props';
import classNames from 'classnames';
import {ChangeEvent, useState, KeyboardEvent} from 'react';
import {useRouter} from 'next/router';
import useWindowSize from "@/hooks/useWindowSize";

const SearchBox = ({mobile = false, onCloseMenu}: Props): JSX.Element => {
	const [value, setValue] = useState('');

	const router = useRouter();

	const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleSearch = () => {
		if (onCloseMenu) {
			onCloseMenu();
		}

		if (value.length) {
			router.push({
				pathname: '/search',
				query: {
					find: value.toLowerCase()
				}
			});

			setValue('');
		}
	};

	const handlePreventKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};
	const size = useWindowSize();
	// @ts-ignore
	return (
		<div className={classNames(mobile && styles.searchMobile)}>
			<div className={classNames(styles.search, mobile && styles.inputMobile)}>
				<input
					className={classNames(styles.input, mobile && styles.inputMobile)}
					type='text'
					value={value}
					onChange={handleChangeSearch}
					onKeyDown={handlePreventKeyDown}
					placeholder='Поиск'
				/>
				<span className={classNames('icon-search', styles.icon)} />
				{mobile && <span className={classNames('icon-close', styles.closeIcon,

					// @ts-ignore
					size.width < 1000 ? styles.none : null)} onClick={onCloseMenu} />}
			</div>
		</div>
	);
};

export default SearchBox;
