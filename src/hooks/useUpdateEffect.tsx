import {useEffect, useRef, DependencyList, EffectCallback, MutableRefObject} from 'react';

function useUpdateEffect(effect: EffectCallback, deps: DependencyList = []) {
	const isInitialMount: MutableRefObject<boolean> = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			effect();
		}
	}, deps);
}

export default useUpdateEffect;
