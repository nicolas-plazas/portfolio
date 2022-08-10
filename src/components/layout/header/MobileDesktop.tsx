import { useContext, useState } from 'react';
import { HeaderTypes } from './types/headerTypes';

import { SectionsRefContext } from '../../../context/sectionsRefContext';
import scrollIntoView from '../../../utils/scrollIntoView';

const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-coral-red transition ease transform duration-300`;

const MobileDesktop = (props: HeaderTypes) => {
	const { cvUrl } = props;
	const sectionsContext = useContext(SectionsRefContext);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				className='flex flex-col absolute right-0 h-12 w-12 border-coral-red border-2 rounded justify-center items-center focus:outline-none z-20 md:hidden'
				onClick={() => setIsOpen(!isOpen)}
			>
				<div
					className={`${hamburgerLine} ${
						isOpen ? 'rotate-45 translate-y-3 opacity-80' : 'opacity-80'
					}`}
				/>
				<div
					className={`${hamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-80'}`}
				/>
				<div
					className={`${hamburgerLine} ${
						isOpen ? '-rotate-45 -translate-y-3 opacity-80' : 'opacity-80'
					}`}
				/>
			</button>
			<aside
				className={`flex items-center justify-center fixed top-0 bottom-0 right-0 h-screen bg-charade-400 text-center text-coral-red-50 transition-all ${
					isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
				}`}
			>
				<nav className='flex flex-col'>
					<ul className='text-xl font-medium'>
						<li className='mb-5'>
							<button onClick={scrollIntoView(sectionsContext?.skills)}>
								Skills
							</button>
						</li>
						<li className='mb-5'>
							<button onClick={scrollIntoView(sectionsContext?.experience)}>
								Experience
							</button>
						</li>
						<li className='mb-5'>
							<button onClick={scrollIntoView(sectionsContext?.projects)}>
								Projects
							</button>
						</li>
						<li className='mb-5'>
							<button onClick={scrollIntoView(sectionsContext?.contact)}>
								Contact
							</button>
						</li>
					</ul>

					<a
						href={cvUrl}
						target='_blank'
						rel='noreferrer'
						className='border-coral-red border-2 py-3 text-center'
					>
						Resume
					</a>
				</nav>
			</aside>

			<style jsx>{`
				aside {
					width: min(75vw, 400px);
				}
			`}</style>
		</>
	);
};

export default MobileDesktop;
