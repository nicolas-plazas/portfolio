import { useContext } from 'react';
import { SectionsRefContext } from '../../context/SectionsRefContext';

import { IconArrowNarrowUp } from '@tabler/icons';

interface ScrollToTopBtnProps {
	presentationIsFocused: boolean;
}

const ScrollToTopBtn = ({ presentationIsFocused }: ScrollToTopBtnProps) => {
	const sectionsContext = useContext(SectionsRefContext);

	const executeScroll = () =>
		sectionsContext?.divToScrollTop.current?.scrollIntoView({
			behavior: 'smooth',
		});

	return (
		<button
			onClick={executeScroll}
			className={`flex justify-center items-center absolute bottom-2 md:bottom-24 right-1 h-14 w-14 rounded-full bg-supernova ${
				presentationIsFocused ? 'hidden' : 'block'
			} focus:outline-none`}
		>
			<IconArrowNarrowUp size={30} />
		</button>
	);
};

export default ScrollToTopBtn;
