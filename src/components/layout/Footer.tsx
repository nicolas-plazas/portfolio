import { useContext } from 'react';

import { SectionsRefContext } from '../../context/sectionsRefContext';
import { IconMail, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';

const Footer = () => {
	const sectionsContext = useContext(SectionsRefContext);

	return (
		<footer
			ref={sectionsContext?.contact}
			className='bg-charade w-full h-auto py-12 px-7 md:py-6'
		>
			<div className='flex flex-col items-center md:flex-row'>
				<p className='text-xs text-center mb-4 text-supernova-50 md:text-left md:text-sm md:mb-0'>
					Design & Developed by <b>Nicolas Plazas</b>
				</p>
				<ul className='flex justify-around w-full md:justify-end'>
					<li>
						<a href='mailto:nicolasplazas10@hotmail.com'>
							<IconMail size={36} className='text-supernova' />
						</a>
					</li>
					<li className='md:mx-3'>
						<a
							href='https://github.com/nicolas-plazas'
							rel='noreferrer'
							target='_blank'
						>
							<IconBrandGithub size={36} className='text-supernova' />
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/nicolas-plazas'
							rel='noreferrer'
							target='_blank'
						>
							<IconBrandLinkedin size={36} className='text-supernova' />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
