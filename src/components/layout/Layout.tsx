import { useContext } from 'react';

import Header from './header/Header';
import Footer from './Footer';
import ScrollToTopBtn from './ScrollToTopBtn';

import { SectionsRefContext } from '../../context/SectionsRefContext';

interface LayoutProps {
	children: React.ReactNode;
	presentationIsFocused: boolean;
}

const Layout = (props: LayoutProps) => {
	const sectionsContext = useContext(SectionsRefContext);

	return (
		<div className='overflow-y-scroll snap-proximity md:snap-y max-h-screen'>
			<div ref={sectionsContext?.divToScrollTop} />
			<Header />
			<main className='px-6 md:px-12 lg:px-44 2xl:px-96'>{props.children}</main>
			<Footer />
			<ScrollToTopBtn presentationIsFocused={props.presentationIsFocused} />
		</div>
	);
};

export default Layout;
