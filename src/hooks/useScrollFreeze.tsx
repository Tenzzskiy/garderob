import {useEffect} from 'react';

function useScrollFreeze(isOpen: boolean) {
	useEffect(() => {
		const bodyStyles = window.getComputedStyle(document.body);

		const originalOverflow = bodyStyles.overflow;
		const originalWidth = bodyStyles.width;

		if (isOpen) {
			document.body.style.overflow = 'hidden';
			document.body.style.width = originalWidth;
		}

		return () => {
			document.body.style.overflow = originalOverflow;
			document.body.style.width = 'auto';
		};
	}, [isOpen]);
}

export default useScrollFreeze;
