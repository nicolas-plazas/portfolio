import DesktopHeader from './DesktopHeader';
import MobileDesktop from './MobileDesktop';

const Header = () => {
    const cvUrl = '/documents/nicolas_plazas_cv.pdf';

	return (
		<header className='fixed top-0 w-full h-24 px-6 bg-charade opacity-95 z-10'>
			<nav className='flex relative h-full items-center'>
				{/* Mobile Menu */}
				<MobileDesktop cvUrl={cvUrl} />
				{/* Desktop menu */}
                <DesktopHeader cvUrl={cvUrl} />
			</nav>
		</header>
	);
};

export default Header;
