import {RefObject, useEffect} from 'react';

const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: () => void) => {
	useEffect(() => {
		const listener = (event: any) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}

			handler();
		};

		document.addEventListener('mousedown', listener, {passive: false});
		document.addEventListener('touchstart', listener, {passive: false});

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
};

export default useOnClickOutside;
