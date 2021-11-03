import {useState} from 'react';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const useSlider = (settings: object) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
		slideChanged(s) {
			setCurrentIndex(s.details().relativeSlide);
		},
		...settings
	});

	const handleSlidePrev = (): void => {
		if (slider) {
			slider.prev();
		}
	};

	const handleSlideNext = (): void => {
		if (slider) {
			slider.next();
		}
	};

	const handleChangeCurrentIndex = (index: number): void => {
		if (slider) {
			slider.moveToSlide(index);
		}
	};

	return {
		currentIndex,
		setCurrentIndex,
		handleChangeCurrentIndex,
		handleSlideNext,
		handleSlidePrev,
		slider,
		sliderRef
	};
};

export default useSlider;
