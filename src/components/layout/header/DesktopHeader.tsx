import { useContext } from 'react';
import { HeaderTypes } from './types/headerTypes';

import { SectionsRefContext } from '../../../context/SectionsRefContext';
import scrollIntoView from '../../../utils/scrollIntoView';

const DesktopHeader = (props: HeaderTypes) => {
	const { cvUrl } = props;
	const sectionsContext = useContext(SectionsRefContext);

	return (
		<div className='hidden md:flex md:justify-end md:w-full text-coral-red'>
			<ul className='flex justify-between items-center text-sm'>
				<li className='mx-2'>
					<button onClick={scrollIntoView(sectionsContext?.skills)}>
						{/* Skills */}
						Habilidades
					</button>
				</li>
				<li className='mx-2'>
					<button onClick={scrollIntoView(sectionsContext?.experience)}>
						{/* Experience */}
						Experiencia
					</button>
				</li>
				<li className='mx-2'>
					<button onClick={scrollIntoView(sectionsContext?.projects)}>
						{/* Projects */}
						Proyectos
					</button>
				</li>
				<li className='mx-2'>
					<button onClick={scrollIntoView(sectionsContext?.contact)}>
						{/* Contact */}
						Contacto
					</button>
				</li>
			</ul>

			<a
				href={cvUrl}
				target='_blank'
				rel='noreferrer'
				className='border-coral-red border-2 py-2 px-4 ml-4 rounded text-center'
			>
				{/* Resume */}
				Resumen
			</a>
		</div>
	);
};

export default DesktopHeader;
