import { useContext } from 'react';
import { HeaderTypes } from './types/headerTypes';

import { SectionsRefContext } from '../../../context/sectionsRefContext';
import scrollIntoView from '../../../utils/scrollIntoView';

const DesktopHeader = (props: HeaderTypes) => {
	const { cvUrl } = props;
	const sectionsContext = useContext(SectionsRefContext);

	return (
		<div className='hidden md:flex md:justify-end md:w-full text-coral-red'>
			<ul className='flex justify-between items-center text-sm'>
				<li className='mx-2'>
					<button onClick={scrollIntoView(sectionsContext?.skills)}>
						Skills
					</button>
				</li>
				<li className='mx-2'>
					<button onClick={scrollIntoView(sectionsContext?.experience)}>
						Experience
					</button>
				</li>
				<li className='mx-2'>
					<button onClick={scrollIntoView(sectionsContext?.projects)}>
						Projects
					</button>
				</li>
				<li className='mx-2'>
					<button onClick={scrollIntoView(sectionsContext?.contact)}>
						Contact
					</button>
				</li>
			</ul>

			<a
				href={cvUrl}
				target='_blank'
				rel='noreferrer'
				className='border-coral-red border-2 py-2 px-4 ml-4 rounded text-center'
			>
				Resume
			</a>
		</div>
	);
};

export default DesktopHeader;